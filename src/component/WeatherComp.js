import React from 'react'

const WeatherComp = (props) => {
        return(
            //if  props.something is true then display the p tag
            <div>
                {props.city &&  props.country && <p>Location: {props.city}, {props.country}</p>}
                {props.temperature && <p>Temperature: {props.temperature}'c</p>}
                {props.humidity && <p>Humidity: {props.humidity}%</p>}
<<<<<<< HEAD
                {props.pressure && <p>Pressure: {props.pressure} mb</p>}
                {props.description && <p>Condition: {props.description}</p>}
                {props.WindSpeed && <p>Wind Speed: {props.WindSpeed} km/hr</p>}
=======
                {props.pressure && <p>Pressure: {props.pressure}mb</p>}
                {props.description && <p>Condition: {props.description}</p>}
                {props.WindSpeed && <p>Wind Speed: {props.WindSpeed}km/hr</p>}
>>>>>>> cb64de7291deddb38021458b1143df795e4beccb
                {props.error && <p>{props.error}</p>}
            </div>
        )
}
export default WeatherComp
