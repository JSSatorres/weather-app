
interface cityInfo {
    lon:Number,
    lat:Number,
    name:String,
    country:String,
    state:String
}

const wheatherApi = async (city:String)=>{

    const api_key =  process.env.REACT_APP_APITOKEN;
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${api_key}`

    

    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data);

    if (data.length===0) {
        return {msg:"this city does not exist"}
    }
    
    const allMatchCities = data.map((city:cityInfo)=>{
        const{lon, lat, name, country, state} = city
        return {lon, lat, name, country, state}
    })

    console.log(allMatchCities);
    
   return  allMatchCities
   /*  const {country ,name}=data.location 
    const {weather_icons,observation_time, temperature}= data.current    
    const cleanData = {country,name,weather_icons,observation_time,temperature} 
    return cleanData   */
}

export default wheatherApi