import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [country, setCountry] = useState()


  useEffect(()=>{
    const URL='https://restcountries.com/v2/name/venezuela' 
    axios.get(URL)
      .then(res => {setCountry(res.data[0])})
      .catch(err => console.log(err.message))
  },[])
  
console.log(country)
  return (
    <div className="App">
      <div className="Card">
        <h1>{country?.name}</h1>
        <img src={country?.flags.png} alt="" />
      <div className="Card__info">
        <ul>
          <li><b>Time Zone:</b> {country?.timezones}</li>
          <li><b>Population: </b> {country?.population}</li>
          <li><b>Language: </b>{country?.languages[0].nativeName}</li>
          <li><b>Capital:</b> {country?.capital}</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default App
