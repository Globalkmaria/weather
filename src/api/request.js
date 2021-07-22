import axios from 'axios';
const KEY = '3d21a9759f9e5dd9eea9b47b5739eb4a';

export function fetchCityWeather(city) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`
  );
}
export async function fetchLocationWeather(lon, lat) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${KEY}`
  );
}
// https://api.openweathermap.org/data/2.5/onecall?lat=37.485634&lon=127.0144369&exclude=current,hourly,daily&appid=3d21a9759f9e5dd9eea9b47b5739eb4a
export async function fetchYesterdayWeather(lon, lat) {
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  const time = Math.floor(
    (yesterday.getTime() + yesterday.getTimezoneOffset() * 60 * 1000) / 1000
  );
  // 	Date from the previous days (Unix time, UTC time zone), e.g. dt=1586468027
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metric&appid=${KEY}`
  );
}
