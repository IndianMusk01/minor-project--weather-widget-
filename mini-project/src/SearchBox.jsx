import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './searchbox.css';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState('');
    const [error, setError] = useState(null); // State for storing error messages
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ecc502a1b82f729f91c8493bb0886939";

    let getWeatherInfo = async () => {
        setError(null); // Clear previous errors before fetching
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`City not found: ${response.statusText}`);
            }
            let jsonResponse = await response.json();
            let result = {
                city: jsonResponse.name || "Unknown",
                temp: jsonResponse.main?.temp || 0,
                tempMin: jsonResponse.main?.temp_min || 0,
                tempMax: jsonResponse.main?.temp_max || 0,
                humidity: jsonResponse.main?.humidity || 0,
                feelsLike: jsonResponse.main?.feels_like || 0,
                weather: jsonResponse.weather?.[0]?.description || "No description",
            };
            return result;
        } catch (error) {
            setError(error.message); // Set error message
            return null;
        }
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        if (!city.trim()) {
            setError("City name cannot be empty.");
            return;
        }
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo); // Update weather info only if valid data is returned
        }
        setCity(''); // Clear city input
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                    Search
                </Button>
            </form>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>} {/* Error message */}
        </div>
    );
}
