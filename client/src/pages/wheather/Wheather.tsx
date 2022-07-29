import React, { useState } from 'react'
import CitySearch from '../../components/citySearch'
import ShowCityWheather from '../../components/showCityWheather'
import wheatherApi from '../../helper/wheaterApi'

import"./wheather.scss"

interface cityData{
  name:String,
  country:String,
  state:String,
  lon:Number,
  lat:Number,
}

//FIXME:  the inital state always return 

const INITIAL_STATE = ({
  name: "",
  country: "",
  state: "",
  lon: 0,
  lat: 0,
})
 

const Wheather = () => {
  const [city, setCity] = useState<Array<cityData>>([INITIAL_STATE])
 
  const cityNameData =  async(newCity:String)=>{
    const wheatherData =  await wheatherApi(newCity);
    console.log("el wheterewdfdfsdf",wheatherData);
    
    setCity(wheatherData) 
    console.log(city);       
  }

  return (
    <div className='wheather__container'>
      <div className='wheather__container__searchCity'>
        <CitySearch cityNameData={cityNameData}/>
      </div>
      <div className='wheather__container__showCities'>
        <ShowCityWheather city={city}/>
      </div>  
      <div className='wheather__container__result'>
        the result
      </div>
    </div>
  )
}

export default Wheather