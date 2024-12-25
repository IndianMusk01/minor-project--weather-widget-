import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './searchbox.css';

export default function SearchBox() {
    const [city, setCity] = useState('');
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ecc502a1b82f729f91c8493bb0886939";

    let getWeatherInfo = async (city) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
             weather: jsonResponse.weather[0].description,

        };
        console.log(result);
    };


    let handleChange = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        setCity('');
        getWeatherInfo(city);
    };

    return (
        <div className="SearchBox">
            <h3>Search for Weather</h3>
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
        </div>
    );
}
