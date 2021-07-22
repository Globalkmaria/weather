import React from 'react';
import Icon from '../components/Icon';
import SearchContainer from './SearchContainer';
import TodayContainer from './TodayContainer';

function MainContainer({ currentData, dailyData, setSearch, cityname }) {
  const iconId = currentData.weather[0].icon;
  return (
    <main className="main">
      <div className="main__content">
        <SearchContainer setSearch={setSearch} />
        <TodayContainer
          cityname={cityname}
          currentData={currentData}
          dailyData={dailyData}
        />
      </div>
      <div className="main__icon">
        <Icon lg iconId={iconId} />
      </div>
    </main>
  );
}

export default React.memo(MainContainer);
