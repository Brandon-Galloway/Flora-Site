import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api'
import config from '../amplifyconfiguration.json'
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import { signIn } from 'aws-amplify/auth';
import { SensorSearchRange } from '@/API';

Amplify.configure(config)
const client  = await generateAuthenticatedClient();

async function generateAuthenticatedClient() {
  const client = generateClient({
    authMode: 'userPool',
  })
  console.log("Signing In.")
  await signIn({
    username: process.env.ADMIN_USERNAME ?? '',
    password: process.env.ADMIN_PASSWORD ?? '',
  })
  console.log("Signed In.")
  return client;
}

export async function fetchSensorData(deviceId: string) {
  console.log("Fetching Sensor Data")
  try {
    const response = await client.graphql({
      query: queries.readings,
      variables: {
        where: {
          DeviceId: deviceId,
          range: SensorSearchRange.DAILY,
          page: null,
        }
      },
    });
    if (response?.data?.readings?.page) {
      return response.data.readings.page.sort(function(a, b) {
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
  console.log("Fetch Devices")
  try {
    const response = await client.graphql({
      query: queries.devices,
      variables: {
        where: {
          DeviceId: deviceId,
        }
      },
    });
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