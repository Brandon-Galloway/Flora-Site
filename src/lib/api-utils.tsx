import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api'
import config from '../amplifyconfiguration.json'
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import { sub, getUnixTime } from 'date-fns';
import { handleSignIn } from './auth-utils'
import { DevicesQuery } from '@/API';

Amplify.configure(config)
const client = generateClient({
  authMode: 'userPool',
});

export async function fetchSensorData(deviceId: string,interval:Duration) {
  try {
    await handleSignIn();
    const currentTime = Date.now();
    const targetTime = sub(currentTime, interval)
    const login = await client.graphql({
      query: queries.readings,
      variables: {
        where: {
          DeviceId: deviceId,
          StartTimestamp: getUnixTime(targetTime),
          EndTimestamp: getUnixTime(currentTime)
        }
      },
    });

    return login.data.readings;
  } catch (error) {
    console.error('Login error:', error);
    return { login: null, error: 'Login failed' };
  }
};

export async function fetchDevices(deviceId: string) {
  try {
    await handleSignIn();
    const login = await client.graphql({
      query: queries.devices,
      variables: {
        where: {
          DeviceId: deviceId,
        }
      },
    });
    
    if (login?.data?.devices) {
      return login.data.devices;
    } else {
      // Handle the case where login.data.devices is undefined
      console.error('Devices data is undefined');
      return { login: null, error: 'Devices data is undefined' };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { login: null, error: 'Login failed' };
  }
};