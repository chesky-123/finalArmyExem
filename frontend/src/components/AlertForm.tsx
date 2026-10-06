

import { useState } from 'react'
import axios from 'axios'
import AlertsMap, { type AlertsMapProps } from './AlertsMap'
import ShowAlerts from './ShowAlerts'
// import type { MapAlert } from './AlertsMap'

export default function AlertForm() {
    const [displayName, setDisplayName] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('Low')
    const [arena, setArena] = useState('North')
    const [status, setStatus] = useState('active')
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [id, setId] = useState<AlertsMapProps | null>(null)

    const handleSubmit = async (e: any) => {

        e.preventDefault()
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

            const { data } = await axios.post(`${API_URL}/api/alerts`, {
                displayName,
                description,
                arena,
                status,
                priority,
                lat,
                lon
            })
            alert(data.message)
           setId(data.id)
            

        } catch (error) {
            console.log("sssss",error)
            alert('שגיאה ביצירת התראה')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="alert-form">
            <h3>דיווח על התראה חדשה</h3>
            <input
                type="text"
                placeholder="שם ההתראה"
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                required
            />
            <br />
            <textarea
                placeholder="תיאור"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
            />
            <br />
            <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="Low">נמוך</option>
                <option value="Medium">בינוני</option>
                <option value="High">גבוה</option>
                <option value="Critical">קריטי</option>
            </select>
            <br />
            <select value={arena} onChange={e => setArena(e.target.value)}>
                <option value="North">צפון</option>
                <option value="South">דרום</option>
                <option value="Center">מרכז</option>
            </select>
            <br />
            <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="active">פעיל</option>
                <option value="handled">טופל</option>
            </select>
            <br />
            <input
                type="number"
                placeholder="קו רוחב"
                value={lat}
                onChange={e => setLat(e.target.value)}
                required
            />
            <br />
            <input
                type="number"
                placeholder="קו אורך"
                value={lon}
                onChange={e => setLon(e.target.value)}
                required
            />
            <br />
            <button type="submit">שלח התראה</button>
            {/* <ShowAlerts /> */}
            {/* { newAlert && <AlertsMap alerts={[{...newAlert.data[0]}]}/>} */}
        </form>
    )
}


