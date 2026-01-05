import { render, screen, fireEvent } from '@testing-library/react';
import TrainStationsFilter from '../app/components/TrainStationsFilter';

const mockStations = [
    { id: 1, name: 'Berlin Hbf', city: 'Berlin' },
    { id: 2, name: 'Munich Hbf', city: 'Munich' },
];

test('renders filter and station list', () => {
    const setSelectedCity = jest.fn();
    const handleStationClick = jest.fn();

    render(
        <TrainStationsFilter
            selectedCity="All"
            uniqueCities={['All', 'Berlin', 'Munich']}
            filteredStations={mockStations}
            setSelectedCity={setSelectedCity}
            handleStationClick={handleStationClick}
        />
    );

    expect(screen.getByText('Train Stations in Germany')).toBeInTheDocument();
    expect(screen.getByText('Berlin Hbf - Berlin')).toBeInTheDocument();
    expect(screen.getByText('Munich Hbf - Munich')).toBeInTheDocument();

    // Test station click
    fireEvent.click(screen.getByText('Berlin Hbf - Berlin'));
    expect(handleStationClick).toHaveBeenCalledWith(mockStations[0]);
});