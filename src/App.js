import './App.scss';
import ForecastContainer from './containers/ForecastContainer';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <MainContainer />
        <ForecastContainer />
      </div>
    </div>
  );
}

export default App;
