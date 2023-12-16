import { fetchSensorData, fetchDevices } from "@/lib/api-utils";
const targetDevice = process.env.DEVICE_ID ?? '';
import SensorDataTable from "@/components/sensorDateTable";
import SensorDataStats from "@/components/sensorDataStats";

export default async function Home() {
  const device = (await fetchDevices(targetDevice))?.at(0);
  
  return (
      <div>
          <div className="flex w-full">
            <div className="grid w-30 flex-grow card bg-base-300 rounded-box place-items-center">
              <h1 className="text-primary">Selected Device: {device?.Nickname}</h1>
              <p className="text-secondary">Location: [{device?.Location?.LocationName}]</p>
            </div>
            <div className="divider divider-horizontal divider-primary"></div>
            <SensorDataStats></SensorDataStats>
          </div>
          <div className="divider divider-primary"></div>
          <SensorDataTable></SensorDataTable>
      </div>
  )
}
