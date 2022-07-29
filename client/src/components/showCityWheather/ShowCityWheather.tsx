import React from 'react'
import "./showCityWheather.scss"


/* 
interface SearchProps {
   city:cityData
} */

interface cityData{
  name:String,
  country:String,
  state:String,
  lon:Number,
  lat:Number,
  }

  interface cities {
    city: Array<cityData> 
  }
  //TODO: controll to the city doesnt found in the apì

const ShowCityWheather = ({city}:cities) => {

  return (
    <div className='ShowCityWheatheContainer'>
       <h3 className='ShowCityWheatheContainer__name'> {city[0].name}</h3>
      {(city[0].name==="")
      ?<div className='noCity'><h3>Add a city</h3></div>
      :city.map((oneCity,index)=>{
        return(
          <div className= 'ShowCityWheatheContainer__div' key={index}>
           
            <h5 className='ShowCityWheatheContainer__div__country'> {oneCity.country}</h5>
            <h5 className='ShowCityWheatheContainer__div__state'> {oneCity.state}</h5>
            <button className="ShowCityWheatheContainer__div__button" onClick={()=>console.log(index)}>select</button>
          </div>
        ) 
      })}
    </div>
  )
}

export default ShowCityWheather