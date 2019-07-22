import React from 'react'

const Form = (props) => {
        return(
            <form onSubmit={props.getWeather}>
                <input type='text' name='city' placeholder='city name' required></input>
                <input type='text' name='country' placeholder='country name' required></input>
                <br></br>
                <button>Get Weather</button>
            </form>
        )        
}

export default Form