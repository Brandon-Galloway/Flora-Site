import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api'
import config from '../amplifyconfiguration.json'
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import { sub, getUnixTime } from 'date-fns';
import { handleSignIn, handleSignOut } from './auth-utils'

Amplify.configure(config)
const client = generateClient({
  authMode: 'userPool',
});

export async function fetchSensorData(deviceId: string,interval:Duration) {
  try {
    await handleSignIn();
    const currentTime = Date.now();
    const targetTime = sub(currentTime, interval)
    const response = await client.graphql({
      query: queries.readings,
      variables: {
        where: {
          DeviceId: deviceId,
          StartTimestamp: getUnixTime(targetTime),
          EndTimestamp: getUnixTime(currentTime)
        }
      },
    });
    await handleSignOut();
    if (response?.data?.readings) {
      return response.data.readings.sort(function(a, b) {
        // Compare the 2 dates
        const t1 = a?.Timestamp;
        const t2 = b?.Timestamp;

        if (!t1 || !t2 || t1 === t2) {
          return 0;
        }
        
        return t1 < t2 ? -1 : 1;
      });
    } else {
      // Handle the case where login.data.devices is undefined
      console.error('Readings data is undefined');
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};

export async function fetchDevices(deviceId: string) {
  try {
    await handleSignIn();
    const response = await client.graphql({
      query: queries.devices,
      variables: {
        where: {
          DeviceId: deviceId,
        }
      },
    });
    await handleSignOut();
    if (response?.data?.devices) {
      return response.data.devices;
    } else {
      // Handle the case where login.data.devices is undefined
      console.error('Devices data is undefined');
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};