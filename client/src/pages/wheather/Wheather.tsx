import React, { useState } from 'react'
import CitySearch from '../../components/citySearch'
import ShowCityWheather from '../../components/showCityWheather'
import wheatherApi from '../../helper/wheaterApi'

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
    <div>
     <CitySearch cityNameData={cityNameData}/>
     <ShowCityWheather city={city}/>
    </div>
  )
}

export default Wheather