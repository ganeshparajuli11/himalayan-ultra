import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet marker icons in Next.js
const icon = L.icon({
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
// Simple placeholder fix to avoid needing local assets immediately
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Approximated trail coordinates (A scenic loop in Hong Kong/Sai Kung area for demo)
const trailCoordinates: [number, number][] = [
    [22.3893, 114.3039], // Pak Tam Chung
    [22.3840, 114.3300],
    [22.3700, 114.3500], // High Island Reservoir area
    [22.3600, 114.3700],
    [22.3800, 114.3800],
    [22.4000, 114.3600],
    [22.4200, 114.3200],
    [22.4300, 114.2800],
    [22.4100, 114.2500],
    [22.4116, 114.1160], // Towards Tai Mo Shan
];

const RaceMap = () => {
    return (
        <MapContainer
            center={[22.4000, 114.3000]}
            zoom={11}
            style={{ height: '400px', width: '100%', borderRadius: '12px', zIndex: 1 }}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline positions={trailCoordinates} pathOptions={{ color: '#FFD700', weight: 4 }} />
            <Marker position={[22.3893, 114.3039]}>
                <Popup>Start: Pak Tam Chung</Popup>
            </Marker>
            <Marker position={[22.4116, 114.1160]}>
                <Popup>Finish: Tai Mo Shan</Popup>
            </Marker>
        </MapContainer>
    );
};

export default RaceMap;
