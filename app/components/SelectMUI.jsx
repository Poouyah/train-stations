import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export default function SelectMUI({ open, setOpen, selectedCity, setSelectedCity, uniqueCities }) {

    const theme = createTheme({
        colorSchemes: {
            dark: true,
        },
    });

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <ThemeProvider theme={theme} defaultMode="dark">
            <FormControl sx={{ width: '100%', maxHeight: 40 }} >
                <InputLabel id="demo-controlled-open-select-label">Filter By City</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={selectedCity}
                    label="Filter By City"
                    onChange={e => setSelectedCity(e.target.value)}
                    sx={{ '& .MuiSelect-select': { paddingTop: '10px', paddingBottom: '10px' } }}
                >
                    {uniqueCities.map((city) => (
                        <MenuItem key={city} value={city}>
                            {city}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </ThemeProvider>
    )
}
