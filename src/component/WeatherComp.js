import React from 'react'

const WeatherComp = (props) => {
        return(
            //if  props.something is true then display the p tag
            <div>
                {props.city &&  props.country && <p>Location: {props.city}, {props.country}</p>}
                {props.temperature && <p>Temperature: {props.temperature}</p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.pressure && <p>Pressure: {props.pressure}</p>}
                {props.description && <p>Condition: {props.description}</p>}
                {props.WindSpeed && <p>Wind Speed: {props.WindSpeed}</p>}
                {props.error && <p>{props.error}</p>}
            </div>
        )
}
export default WeatherComp