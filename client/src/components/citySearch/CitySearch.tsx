import React, { SetStateAction, useState } from 'react'
import wheatherApi from '../../helper/wheaterApi'
import "./citySearch.scss";

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
        setInputValue("")         
      }

  return (
    <div className='citySearchContainer'>
        <h2 className='citySearchContainer__title'>Search your city</h2>
        <input 
          type="text" 
          name='inputValue' 
          onChange={handleChange}
          className="citySearchContainer__input" 
          autoComplete="off" 
          //TODO:clear input
        />
        <button 
          type='submit' 
          onClick={handleSubmit} 
          className="citySearchContainer__button" 
          >go!
        </button>
    </div>
  )
}

export default CitySearch