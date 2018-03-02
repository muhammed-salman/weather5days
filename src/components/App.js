import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Weather Forecasting</h1>
        <p className="text-center">
          A simple current 5 days weather forecasting app. Type the location of your choice to display forcast.
        </p>
        <div>
        	<SearchBar />
        	<WeatherList />
        </div>
      </div>
    );
  }
}

export default App;
