import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export function fetchCityWeather(city) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  );
}
export async function fetchLocationWeather(lon, lat) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  );
}
export async function fetchYesterdayWeather(lon, lat) {
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  const time = Math.floor(
    (yesterday.getTime() + yesterday.getTimezoneOffset() * 60 * 1000) / 1000
  );
  // 	Date from the previous days (Unix time, UTC time zone), e.g. dt=1586468027
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  );
}
