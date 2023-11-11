/**
 * Filename: advanced_weather_app.js
 * Description: An advanced weather application that fetches real-time weather data
 *              from an API and displays it in a user-friendly interface.
 * Author: John Doe
 * Date: November 30, 2021
 */

// Imports necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// WeatherApp Component
class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weatherData: null,
      isLoading: false,
      error: null,
    };
  }

  // Handles input change
  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  // Fetches weather data from API
  fetchWeatherData = async () => {
    const API_KEY = 'YOUR_API_KEY';
    const { city } = this.state;

    try {
      this.setState({ isLoading: true });

      // Make API request
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      this.setState({
        weatherData: response.data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error: 'Failed to fetch weather data. Please try again.',
        weatherData: null,
      });
    }
  };

  // Renders the WeatherApp component
  render() {
    const { city, weatherData, isLoading, error } = this.state;

    return (
      <div>
        <h1>Advanced Weather App</h1>
        <input
          type="text"
          value={city}
          onChange={this.handleChange}
          placeholder="Enter a city name"
        />
        <button onClick={this.fetchWeatherData} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get Weather'}
        </button>

        {error && <p className="error">{error}</p>}

        {weatherData && (
          <div>
            <h2>{weatherData.location.name}</h2>
            <p>Temperature: {weatherData.current.temp_c} °C</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
            <p>Condition: {weatherData.current.condition.text}</p>
          </div>
        )}
      </div>
    );
  }
}

// Renders the WeatherApp component to the DOM
ReactDOM.render(<WeatherApp />, document.getElementById('root'));