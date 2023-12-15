import { fetchSensorData, fetchDevices } from "@/lib/api-utils";
const targetDevice = process.env.DEVICE_ID ?? '';
import SensorDataTable from "@/components/sensorDateTable";

export default async function Home() {
  
  const readings = await fetchSensorData(targetDevice,{
      hours: 4
  });
  const device = (await fetchDevices(targetDevice))?.at(0);
  return (
      <div>
          <div>
              <p>Device: {device?.Nickname} [{device?.Location?.LocationName}]</p>
          </div>
          <div className="divider divider-primary">Data Preview</div>
          <SensorDataTable></SensorDataTable>
      </div>
  )
}
