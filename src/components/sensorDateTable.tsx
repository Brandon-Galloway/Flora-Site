import { fetchSensorData } from "@/lib/api-utils";
import { format } from 'date-fns';
const targetDevice = process.env.DEVICE_ID ?? '';

export default async function SensorDataTable() {
  
  const readings = await fetchSensorData(targetDevice,{
      hours: 8
  });
  return (
      <div>
          <div className="overflow-x-auto max-h-full">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Humidity</th> 
                  <th>Air Temp</th> 
                  <th>Soil Temp</th> 
                  <th>Soil Moisture</th> 
                  <th>Visible Light</th> 
                  <th>Infrared Light</th>
                </tr>
              </thead> 
              <tbody>
              {readings?.map((reading, index) => (
                <tr key={index}>
                  <td>{format(new Date((reading?.Timestamp ?? 0) * 1000), 'yyyy-MM-dd HH:mm:ss')}</td>
                  <td>{reading?.Humidity}</td> 
                  <td>{reading?.AirTemperature}</td> 
                  <td>{reading?.SoilTemperature}</td> 
                  <td>{reading?.SoilMoisture}</td> 
                  <td>{reading?.VisibleLight}</td>
                  <td>{reading?.InfraredLight}</td>
                </tr>
              ))}
              </tbody> 
            </table>
          </div>
      </div>
  )
}