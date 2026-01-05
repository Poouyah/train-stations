import React, { useState } from 'react';
import SelectMUI from './SelectMUI';

export default function TrainStationsFilter({ selectedCity, setSelectedCity, uniqueCities, filteredStations, handleStationClick }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <h1 className='text-3xl mb-4'>Train Stations in Germany</h1>
            <SelectMUI open={open} setOpen={setOpen} selectedCity={selectedCity} setSelectedCity={setSelectedCity} uniqueCities={uniqueCities} />
            <ul className='list-none p-0 mt-2.5'>
                {filteredStations.map((station) => (
                    <li
                        key={station.id}
                        onClick={() => handleStationClick(station)}
                        className='cursor-pointer p-1 border-b border-gray-300'
                    >
                        {station.name} - {station.city}
                    </li>
                ))}
            </ul>
        </>
    )
}
