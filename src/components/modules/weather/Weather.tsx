import { useQuery } from 'react-query';
import { ChangeEvent, useState } from 'react';

import { WeatherCard } from './weather-card/WeatherCard';
import { useDebounce } from 'hooks/useDebounced';

import { Input } from 'components/ui/input/Input';

import './Weather.css';
import { WeatherService } from 'api/services/weather/weather.api';

export const Weather = () => {
    const [city, setCity] = useState<string>('Moscow');
    const debouncedCity = useDebounce(city, 1000);

    const { data, isLoading } = useQuery(
        ['weather', debouncedCity],
        () => WeatherService.requestGetWeatherByCity(debouncedCity),
        {
            enabled: !!debouncedCity,
        },
    );

    const handleSearchCity = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    return (
        <div className="weather">
            <h1 className="weather-title">Find you weather</h1>

            <Input value={city} type="text" onChange={handleSearchCity} />

            <div className="weather-container">
                {data ? (
                    <WeatherCard data={data} />
                ) : (
                    <p className="weather-loading">{isLoading ? 'Поиск города...' : 'Город не найден'}</p>
                )}
            </div>
        </div>
    );
};
