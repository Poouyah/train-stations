'use client';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

export default function Map({ filteredStations, selectedStationId, markerRefs, selectedCity }) {
    return (
        <MapContainer center={[51.1657, 10.4515]} zoom={6} className='h-full'>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {filteredStations.map((station) => (
                <Marker
                    key={station.id}
                    position={[station.lat, station.lng]}
                    ref={(ref) => {
                        markerRefs.current[station.id] = ref;
                    }}
                >
                    <Popup>{station.name} - {station.city}</Popup>
                </Marker>
            ))}
            <MapEffect
                selectedStationId={selectedStationId}
                stations={filteredStations}
                markerRefs={markerRefs}
                selectedCity={selectedCity}
            />
        </MapContainer>
    )
}

function MapEffect({ selectedStationId, stations, markerRefs, selectedCity }) {
    const map = useMap();
    const defaultCenter = [51.1657, 10.4515];
    const defaultZoom = 6;

    useEffect(() => {
        if (selectedStationId) {
            const station = stations.find((s) => s.id === selectedStationId);
            if (station) {
                const marker = markerRefs.current[station.id];
                if (marker) {
                    map.flyTo([station.lat, station.lng], 12, { duration: 1 });
                    marker.openPopup();
                }
            }
            return;
        }

        if (selectedCity && selectedCity !== 'All') {
            const station = stations[0];
            if (station) {
                map.flyTo([station.lat, station.lng], 12, { duration: 1 });
                return;
            }
        }
        map.flyTo(defaultCenter, defaultZoom, { duration: 1 });

    }, [selectedCity, selectedStationId, stations, map, markerRefs]);

    return null;
}