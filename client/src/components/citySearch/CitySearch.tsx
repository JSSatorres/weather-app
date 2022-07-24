import React, { SetStateAction, useState } from 'react'
import wheatherApi from '../../helper/wheaterApi'

interface SearchProps {
    cityNameData : (city:String)=>SetStateAction<Object>;
}

const CitySearch = ({cityNameData}:SearchProps) => {

    const [inputValue, setInputValue] = useState<String>("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
        console.log(inputValue);        
      }
    
      const handleClear = ()=>{
        setInputValue("")    
      }
    
      const handleSubmit = (e:React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        cityNameData(inputValue)       
        handleClear()        
      }

  return (
    <div>
        <h2>Search your city</h2>
         <input type="text" name='inputValue' onChange={handleChange} />
        <button type='submit' onClick={handleSubmit} > go!</button>
    </div>
  )
}

export default CitySearch