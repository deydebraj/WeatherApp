import React from "react";

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
        </div>
      )}
      {(props.humidity !== undefined ||
        props.pressure !== undefined ||
        props.WindSpeed !== undefined) && (
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
        </div>
      )}
      {props.error && <p className="error-message">{props.error}</p>}
    </div>
  );
};
export default WeatherComp;
