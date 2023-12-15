import { fetchSensorData, fetchDevices } from "@/lib/api-utils";
const targetDevice = process.env.DEVICE_ID ?? '';

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
          <div>
          </div>
          {/* Test Table */}
          <div className="overflow-x-auto">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th> 
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
                // <p key={index}>[{reading?.Timestamp}]: Air Temp:{reading?.AirTemperature}</p>
                <tr key={index}>
                  <th>{index}</th> 
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
