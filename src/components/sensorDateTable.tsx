import { fetchSensorData } from "@/lib/api-utils";
const targetDevice = process.env.DEVICE_ID ?? '';

export default async function SensorDataTable() {
  
  const readings = await fetchSensorData(targetDevice,{
      hours: 4
  });
  return (
      <div>
          <div className="overflow-x-auto">
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
                  <td>{reading?.Timestamp}</td>
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