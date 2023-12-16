import { fetchSensorData, fetchDevices } from "@/lib/api-utils";
const targetDevice = process.env.DEVICE_ID ?? '';
import SensorDataTable from "@/components/sensorDateTable";
import SensorDataStats from "@/components/sensorDataStats";

export default async function Home() {
  const device = (await fetchDevices(targetDevice))?.at(0);
  
  return (
      <div>
          <SensorDataStats></SensorDataStats>
          <div className="divider divider-primary"></div>
          <SensorDataTable></SensorDataTable>
      </div>
  )
}
