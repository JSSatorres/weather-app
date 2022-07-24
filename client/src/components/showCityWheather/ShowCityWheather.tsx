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

        {/* <h3>name{city.name}</h3> */}
       {/*  <h4>country  {city.country}</h4> */}
       {/*  <h5>actual time: {city.observation_time}</h5> */}

       {/*  <p>temperature{city.temperature}</p>  */}
      {/*   <image>{city.weather_icons}</image>
 */}
    </div>
  )
}

export default ShowCityWheather