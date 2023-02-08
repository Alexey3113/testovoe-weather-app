import axios from 'axios';
import { IWeather } from 'types/weather';

const API_URL = process.env.REACT_APP_API_WEATHER_URL

axios.defaults.baseURL = API_URL;

export const WeatherService = {
    requestGetWeatherByCity: async (city: string): Promise<IWeather> => {
        const { data } = await axios.get<IWeather>(
            `/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_WEATHER_KEY}`,
        );
    
        return data;
    },
}

