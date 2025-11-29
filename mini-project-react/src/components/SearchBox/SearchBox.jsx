import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateinfo}) {

    let [city, setCity] = useState('');
    let[error,setError]=useState(false);
    const API_URL='http://api.openweathermap.org/data/2.5/weather'
    const API_KEY='3b9fe8c6c7cdf7f17598de31e0318d8a'

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse=await response.json()
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            description:jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;

        }
        
    }


    let handleCityChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async(e) => {
        try{
            e.preventDefault();
        console.log(city);
        setCity('');
        let newinfo=await getWeatherInfo();
        updateinfo(newinfo);
        }
        catch(err){
            setError(true);

        }
        
    }


    return (
        <div className='searchbox'>
           
            <form action="" onSubmit={handleSubmit}>
                 <TextField
                  required id="city" 
                  label="Outlined" 
                  variant="outlined" 
                  value={city} 
                  onChange={handleCityChange}
                   />
                 <br /><br />
                 <Button 
                 variant="contained" 
                 endIcon={<SendIcon />} 
                 type='submit'> 
                 Send
                 </Button>
                 {
                     error&&<h3 style={{color:"red"}}>City not found</h3>
                 }

            </form>
        </div>
    );
}