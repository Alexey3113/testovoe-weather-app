import { IWeather } from 'types/weather';
import './WeatherCard.css';

interface WeatherCardProps {
    data: IWeather;
}

export const WeatherCard = ({ data }: WeatherCardProps) => {
    return (
        <div className='weather-card'>
            <div className="weather-card-top">
                <div className="weather-card-degrees">
                    <span>{data?.main.temp} ℃ </span>

                    <img
                        src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
                        alt={data?.weather[0].main}
                    />
                </div>

                <span>
                    {data?.weather[0].main} {data?.weather[0].description}
                </span>
            </div>

            <div className="weather-card-bottom">
                {data?.name} - {data?.sys.country}
            </div>
        </div>
    );
};
