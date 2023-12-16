import { fetchSensorData } from "@/lib/api-utils";
import { Duration, formatDuration } from "date-fns";
const targetDevice = process.env.DEVICE_ID ?? '';

export default async function SensorDataStats() {
    const duration: Duration = {
        hours: 4
    }
    const readings = await fetchSensorData(targetDevice,duration);
    
    const averageReadings = readings?.length
    ? {
        Humidity: +(readings.reduce((total, obj) => total + (obj?.Humidity || 0), 0) / readings.length).toFixed(2),
        AirTemperature: +(readings.reduce((total, obj) => total + (obj?.AirTemperature || 0), 0) / readings.length).toFixed(2),
        SoilTemperature: +((readings.reduce((total, obj) => total + (obj?.SoilTemperature || 0), 0) / readings.length) / 2000).toFixed(2),
        SoilMoisture: +(readings.reduce((total, obj) => total + (obj?.SoilMoisture || 0), 0) / readings.length).toFixed(2),
        VisibleLight: +(readings.reduce((total, obj) => total + (obj?.VisibleLight || 0), 0) / readings.length).toFixed(2),
        InfraredLight: +(readings.reduce((total, obj) => total + (obj?.InfraredLight || 0), 0) / readings.length).toFixed(2),
      }
    : null;
    const soilMoisturePercentage = ((averageReadings?.SoilMoisture ?? 0) / 2000) * 100;

    return (
        <div className="stats shadow">
  
            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    </svg>                </div>
                <div className="stat-title">Average Air Temp</div>
                <div className="stat-value text-primary">{averageReadings?.AirTemperature}&deg;F</div>
                <div className="stat-desc">For the last {formatDuration(duration)}</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-8 h-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
                </div>
                <div className="stat-title">Soil Moisture</div>
                <div className="stat-value text-secondary">{soilMoisturePercentage.toFixed(0)}%</div>
                <div className="stat-desc">Scaled 200-2000</div>
            </div>
            
            <div className="stat">
                <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-8 h-8 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>
                </div>
                <div className="stat-title">Average Humidity</div>
                <div className="stat-value text-secondary">{averageReadings?.Humidity.toFixed(0)}%</div>
                <div className="stat-desc">For the last {formatDuration(duration)}</div>
            </div>
            
            </div>
    )
}