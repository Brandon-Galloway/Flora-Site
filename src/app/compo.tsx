import { fetchSensorData, fetchDevices } from "@/lib/api-utils";

const targetDevice = process.env.DEVICE_ID ?? '';

export default async function Compo() {
    const readings = await fetchSensorData(targetDevice,{
        hours: 4
    }) ?? [];
    const device = await fetchDevices(targetDevice);
    return (
        <div>
            <div>
                <h1>{JSON.stringify(device)}</h1>
                <p>Device: {device.Nickname}</p>
            </div>
            <h1></h1>
        </div>
    )
}