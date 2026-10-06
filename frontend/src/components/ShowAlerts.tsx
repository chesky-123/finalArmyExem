import axios from 'axios';
import { useState } from 'react'
import AlertsMap, { type AlertsMapProps } from './AlertsMap';

export default function ShowAlerts(id:string) {

    const [alerts, setAlerts] = useState<AlertsMapProps[] >([]);

    const handleAlert = async (e: any) => {

        e.preventDefault()
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
           
                const { data } = await axios.get(`${API_URL}/api/alerts`)
                console.log(data);
                setAlerts((state) => state = data)
            


        } catch (error) {
            console.log("sssss", error)
            alert('שיבוש במערכת')
        }
    }

    return (
        <div >
            
            <button onClick={handleAlert}>click</button>
            <AlertsMap alerts={[...alerts]} >{handleAlert}</AlertsMap>
        </div>
    )
}
