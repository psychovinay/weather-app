import React from 'react'
import './WeatherApp.css'
import SearchBox from '../SearchBox/SearchBox'
import InfoBox from '../InfoBox/InfoBox'
import { useState } from 'react'

export default function WeatherApp() {

    const[weatherInfo, setWeatherInfo]=useState({
         city:"Delhi",
        feelslike:24.84,
        temp:25,
        tempMin:24,
        tempMax:25,
        humidity:47,
        description:"haze"
    })

    let updateinfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }


    return (
        <>
        <div className="app">
            <h1>WeatherApp</h1>
            <SearchBox updateinfo={updateinfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
            
        </>
    )
}