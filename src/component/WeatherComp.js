import React from "react";

const formatTime = (timestamp, timezoneOffset) => {
  const localTimestamp = (timestamp + timezoneOffset) * 1000;
  return new Date(localTimestamp).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  });
};

const formatWindDirection = (degrees) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(degrees / 45) % directions.length];
};

const WeatherComp = (props) => {
  return (
    <div className="weather-content">
      {props.city && props.country && (
        <div className="location-result">
          <span className="location-pin" aria-hidden="true">
            ●
          </span>
          <div>
            <span className="result-label">CURRENT CONDITIONS</span>
            <h2>
              {props.city}, {props.country}
            </h2>
          </div>
        </div>
      )}
      {props.temperature !== undefined && (
        <div className="temperature-card">
          <span className="metric-label">TEMPERATURE</span>
          <strong>{Math.round(props.temperature)}°</strong>
          <span className="temperature-condition">{props.description}</span>
          <div className="temperature-details">
            <span>Feels like {Math.round(props.feelsLike)}°</span>
            <span>H {Math.round(props.temperatureMax)}°</span>
            <span>L {Math.round(props.temperatureMin)}°</span>
          </div>
        </div>
      )}
      {(props.humidity !== undefined ||
        props.pressure !== undefined ||
        props.WindSpeed !== undefined ||
        props.windGust !== undefined ||
        props.windDirection !== undefined ||
        props.visibility !== undefined ||
        props.cloudCover !== undefined ||
        props.sunrise !== undefined ||
        props.sunset !== undefined) && (
        <div className="metric-grid">
          {props.humidity !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">◌</span>
              <span className="metric-label">HUMIDITY</span>
              <strong>{props.humidity}%</strong>
            </div>
          )}
          {props.pressure !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">⌁</span>
              <span className="metric-label">PRESSURE</span>
              <strong>
                {props.pressure} <small>mb</small>
              </strong>
            </div>
          )}
          {props.WindSpeed !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">↝</span>
              <span className="metric-label">WIND SPEED</span>
              <strong>
                {props.WindSpeed} <small>km/h</small>
              </strong>
            </div>
          )}
          {props.windGust !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">≋</span>
              <span className="metric-label">WIND GUST</span>
              <strong>
                {props.windGust} <small>km/h</small>
              </strong>
            </div>
          )}
          {props.windDirection !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">⌖</span>
              <span className="metric-label">WIND DIRECTION</span>
              <strong>
                {formatWindDirection(props.windDirection)}{" "}
                <small>{props.windDirection}°</small>
              </strong>
            </div>
          )}
          {props.visibility !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">⊙</span>
              <span className="metric-label">VISIBILITY</span>
              <strong>
                {(props.visibility / 1000).toFixed(1)} <small>km</small>
              </strong>
            </div>
          )}
          {props.cloudCover !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">☁</span>
              <span className="metric-label">CLOUD COVER</span>
              <strong>{props.cloudCover}%</strong>
            </div>
          )}
          {props.sunrise !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">☼</span>
              <span className="metric-label">SUNRISE</span>
              <strong>{formatTime(props.sunrise, props.timezone)}</strong>
            </div>
          )}
          {props.sunset !== undefined && (
            <div className="metric-card">
              <span className="metric-icon">◐</span>
              <span className="metric-label">SUNSET</span>
              <strong>{formatTime(props.sunset, props.timezone)}</strong>
            </div>
          )}
        </div>
      )}
      {props.error && <p className="error-message">{props.error}</p>}
    </div>
  );
};
export default WeatherComp;
