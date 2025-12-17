
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix for Leaflet marker icons in Leaflet for React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Waypoint {
    lat: number;
    lon: number;
    name: string;
    ele?: string;
}

const RaceMap = () => {
    const [trackPoints, setTrackPoints] = useState<[number, number][]>([]);
    const [waypoints, setWaypoints] = useState<Waypoint[]>([]);
    const [center, setCenter] = useState<[number, number]>([22.4000, 114.3000]);

    useEffect(() => {
        const fetchGPX = async () => {
            try {
                const response = await fetch('/trail.gpx');
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'text/xml');

                // Parse Waypoints (wpt)
                const wpts = Array.from(xml.querySelectorAll('wpt')).map(pt => ({
                    lat: parseFloat(pt.getAttribute('lat') || '0'),
                    lon: parseFloat(pt.getAttribute('lon') || '0'),
                    name: pt.querySelector('name')?.textContent || 'Checkpoint',
                    ele: pt.querySelector('ele')?.textContent,
                }));
                setWaypoints(wpts);

                // Parse Track Points (trkpt) — flattening all segments
                const trkpts: [number, number][] = [];
                const segments = xml.querySelectorAll('trkseg');
                segments.forEach(seg => {
                    const points = seg.querySelectorAll('trkpt');
                    points.forEach(pt => {
                        trkpts.push([
                            parseFloat(pt.getAttribute('lat') || '0'),
                            parseFloat(pt.getAttribute('lon') || '0')
                        ]);
                    });
                });
                setTrackPoints(trkpts);

                // Auto-center map if we have points
                if (trkpts.length > 0) {
                    setCenter(trkpts[0]);
                }
            } catch (err) {
                console.error("Error loading GPX:", err);
            }
        };

        fetchGPX();
    }, []);

    return (
        <MapContainer
            center={center}
            zoom={11}
            className="h-full w-full z-0"
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {trackPoints.length > 0 && (
                <Polyline positions={trackPoints} pathOptions={{ color: '#FFD700', weight: 4 }} />
            )}

            {waypoints.map((wp, idx) => (
                <Marker key={idx} position={[wp.lat, wp.lon]}>
                    <Popup>
                        <div className="text-sm font-bold">{wp.name}</div>
                        {wp.ele && <div className="text-xs text-gray-500">Elev: {wp.ele}m</div>}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default RaceMap;
