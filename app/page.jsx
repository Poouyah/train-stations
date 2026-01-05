'use client';
import React, { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { getData } from './services/fetchHandler';
import Loading from './components/Loading';
import Error from './components/Error';
import TrainStationsFilter from './components/TrainStationsFilter';
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./components/Map"), { ssr: false });

export default function Home() {
    const [stations, setStations] = useState([]);
    const [filteredStations, setFilteredStations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCity, setSelectedCity] = useState('All');
    const [uniqueCities, setUniqueCities] = useState([]);
    const [selectedStationId, setSelectedStationId] = useState(null);
    const markerRefs = useRef({});

    useEffect(() => {
        setLoading(true);
        getData()
            .then(data => {
                setStations(data);
                setFilteredStations(data);
                const cities = [...new Set(data.map(s => s.city))].sort();
                setUniqueCities(['All', ...cities]);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (selectedCity === 'All') {
            setFilteredStations(stations);
        } else {
            setFilteredStations(stations.filter(s => s.city === selectedCity));
        }
        setSelectedStationId(null);
    }, [selectedCity, stations]);

    const handleStationClick = (station) => {
        setSelectedStationId(station.id);
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <div className='flex h-screen'>
            <div className='w-1/3 p-4 overflow-y-auto'>
                <TrainStationsFilter selectedCity={selectedCity} setSelectedCity={setSelectedCity} uniqueCities={uniqueCities} filteredStations={filteredStations} handleStationClick={handleStationClick} />
            </div>
            <div className='w-2/3'>
                <Map filteredStations={filteredStations} selectedStationId={selectedStationId} markerRefs={markerRefs} selectedCity={selectedCity} />
            </div>
        </div>
    );
}
