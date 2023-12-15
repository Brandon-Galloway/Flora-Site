import { fetchSensorData, fetchDevices } from "@/lib/api-utils";
const targetDevice = process.env.DEVICE_ID ?? '';

export default async function Home() {
  
  const readings = await fetchSensorData(targetDevice,{
      hours: 4
  });
  const nums = [1,2,3]
  const device = (await fetchDevices(targetDevice))?.at(0);
  return (
      <div>
          <div>
              <p>Device: {device?.Nickname} [{device?.Location?.LocationName}]</p>
          </div>
          <div>
          {readings?.map((reading, index) => (
            <p key={index}>[{reading?.Timestamp}]: Air Temp:{reading?.AirTemperature}</p>
          ))}
          </div>
      </div>
  )
}
