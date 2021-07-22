import { useEffect, useState } from 'react';
import {
  fetchCityWeather,
  fetchLocationWeather,
  fetchYesterdayWeather,
} from './api/request';
import './App.scss';
import ForecastContainer from './containers/ForecastContainer';
import MainContainer from './containers/MainContainer';
import Loading from './Loading';

function App() {
  const [mainData, setMainData] = useState({
    currentData: null,
    dailyData: null,
    cityname: null,
  });
  const { currentData, dailyData, cityname } = mainData;
  const [yesterdayData, setYesterdayData] = useState(null);
  const [search, setSearch] = useState(null);
  async function getLocationWeather(lon, lat, city) {
    const main_data = await fetchLocationWeather(lon, lat);
    const current = main_data.data.current;
    const daily = main_data.data.daily;
    const yesterday_data = await fetchYesterdayWeather(lon, lat);
    setMainData({
      cityname: city ? city : main_data.data.timezone.split('/')[1],
      currentData: current,
      dailyData: daily,
    });
    setYesterdayData(yesterday_data);
    setSearch(null);
  }
  useEffect(() => {
    if (cityname) return;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
        getLocationWeather(lon, lat);
      },
      () => getLocationWeather(127.0144, 37.4856, 'Seoul')
    );
  }, [cityname]);
  useEffect(() => {
    if (search === null) return;
    async function getCityWeather(search) {
      try {
        const city_data = await fetchCityWeather(search);
        const { lon, lat } = city_data.data.coord;
        getLocationWeather(lon, lat, city_data.data.name);
      } catch (e) {
        alert(`Can't find the city`);
      }
    }
    getCityWeather(search);
  }, [search]);
  return (
    <div className="App">
      <div className="App-wrapper">
        {currentData && dailyData && (
          <MainContainer
            currentData={currentData}
            dailyData={dailyData}
            setSearch={setSearch}
            cityname={cityname}
          />
        )}
        {yesterdayData && (
          <ForecastContainer
            dailyData={dailyData}
            yesterdayData={yesterdayData}
          />
        )}
        {!currentData && (
          <div className="App__loading">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
