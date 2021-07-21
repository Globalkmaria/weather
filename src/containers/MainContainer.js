import React from 'react';
import Icon from '../components/Icon';
import SearchContainer from './SearchContainer';
import TodayContainer from './TodayContainer';

function MainContainer() {
  return (
    <main className="main">
      <div className="main__content">
        <SearchContainer />
        <TodayContainer />
      </div>
      <div className="main__icon">
        <Icon lg />
      </div>
    </main>
  );
}

export default MainContainer;
