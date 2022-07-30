import React, { useState } from 'react'
import CitySearch from '../../components/citySearch'
import ShowCityWheather from '../../components/showCityWheather'
import wheatherApi from '../../helper/wheaterApi'

import"./wheather.scss"

interface cityData{
  name:string,
  country:string,
  state:string,
  lon:number,
  lat:number,
}

interface cityResult{
  name:string, 
}


const Wheather = () => {
  const [city, setCity] = useState<Array<cityData>>([])
  const [cityData, setCityData] = useState<cityResult>({name:""})
 
  const cityNameData =  async(newCity:string)=>{
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
      {(cityData.name==="")
        ? <div className='wheather__container__showCities'>
          <ShowCityWheather city={city}/>
          </div> 
        : <div className='wheather__container__result'>
          the result
          </div>
      } 
    </div>
  )
}

export default Wheather