import AlertsMap from "./components/AlertsMap";
import AlertForm from "./components/AlertForm";

export default function App() {
  return (
    <div>
      <AlertForm/>
      <AlertsMap alerts={[{
        "id": "6ac3709b1d714b75a64854ba",
        "displayName": "momo",
        "priority": "Low",
        "status":"active",
        "description":"gvyujgty",
        "arena":"",
        "lat": 33.2806,
        "lon": 35.5786,
      }]} />
    </div>
  )
}
