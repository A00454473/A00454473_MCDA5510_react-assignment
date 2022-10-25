import { useEffect, useState } from 'react';

import './App.css';
import city_img from './assets/city.jpg';
import mild from './assets/mild.png';
import sunny from './assets/sunny.png';
import cold from './assets/cold.png';

function City() {

  const [tempInC, setTempInC] = useState(0)
  const [temp, setTemp] = useState(0)
  const [tempMetric, setTempMetric] = useState("c")

  useEffect(() => {
    const lat = 19.0821978;
    const long = 72.7411;
    const apikey = "2c5185fab3b5ff0aa2373859889fd6e0";
    const url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+apikey

    fetch(url)
            .then(response => {
                return response.json()
            })
            .then(response => {
                // console.log(response.main.temp);
                const res = response.main.temp.toFixed(2) - 273.15
                setTempInC(res)
                setTemp(res)
            });
  },[])

  return (
    <div className="App ">
      <img className="city_img" src={city_img} alt="Mumbai"/>
      <h1>I'm from Mumbai, India</h1>

      <p>
        City of Mumbai is located at the west coast of India. 
        <br/>
        It is one of the biggest city and the financial capital of India.
      </p>

      <br/>

      <h1>Weather in Mumbai</h1>
      <div className="weather">
        {tempInC <= 10 ? <img src={cold} alt="cold"/> : tempInC > 10 && tempInC <= 20 ? <img src={mild} alt="mild"/> : <img src={sunny} alt="sunny"/>}
        <p>
          <b>Temperature: </b> 
          {tempMetric === "c" ? temp.toFixed(2) : ((temp.toFixed(2)*9)/5) + 32} {tempMetric === "c" ? "C" : "F"}
        </p>
        {tempMetric === "c" ? <h3 onClick={() => setTempMetric("f")}>Switch to F</h3> : <h3 onClick={() => setTempMetric("c")}>Switch to C</h3>}
        
      </div>
    </div>
  );
}

export default City;
