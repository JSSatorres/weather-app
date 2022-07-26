import React from 'react'


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
    <div>
      
      {city.map((oneCity,index)=>{
        return(
          <div key={index}>
            <h4> {oneCity.name}</h4>
            <h5> {oneCity.country}</h5>
            <h5> {oneCity.state}</h5>
            <button onClick={()=>console.log(index)}>look wheather</button>
          </div>
        ) 
      })}
    </div>
  )
}

export default ShowCityWheather