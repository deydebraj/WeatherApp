import React from 'react';
import Titles from './component/Titles';
import Form from  './component/Form';
import WeatherComp from './component/WeatherComp';

const API_KEY = "787b31a6c8c25e5f3fdf943da2f1c58d";

class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    WindSpeed: undefined, 
    error: undefined
  }
//function starts here
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;

      const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);

      const data = await api_call.json();
//if the user dose'nt enter a value but press the button
      if(city && country){
         console.log(data)

          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            description: data.weather[0].description,
            WindSpeed: data.wind.speed,
            error:""
          })
      } else{
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          pressure: undefined,
          description: undefined,
          WindSpeed: undefined,
          error: "Please enter the City and Country."
        })
      }
     
  }



  render(){
    return(
    <div>
        <div  className="page-title">
            <Titles />
          <div> 
              <Form getWeather={this.getWeather}/>
        
            <div className="weather-output">
                <WeatherComp 
                  temperature = {this.state.temperature}
                  city = {this.state.city}
                  country = {this.state.country}
                  humidity = {this.state.humidity}
                  pressure = {this.state.pressure}
                  description = {this.state.description}
                  WindSpeed = {this.state.WindSpeed}
                  error = {this.state.error}
                />
            </div>
          
          </div>
        </div>
    </div>
    )}
}

export default App;
