import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"



export default function InfoBox({info}) {

    const INIT_url='https://images.unsplash.com/photo-1763742497687-e2d8be3a5233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'

    const HOT_url='https://images.unsplash.com/photo-1547235001-d703406d3f17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzZXJ0fGVufDB8fDB8fHww'
    const COLD_url='https://images.unsplash.com/photo-1579847641267-5445b760b991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGR8ZW58MHx8MHx8fDA%3D'
    const RAIN_url='https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D'

    return (
        <>
        <div className="info-box">
        
        <div className="card-container">
     <Card sx={{ maxWidth: 450 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_url:info.temp>25?HOT_url:info.temp<15?COLD_url:INIT_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
         <div>Temprature={info.temp}&deg;C</div>
         <div>Feelslike={info.feelslike}&deg;C</div>
         <div>Humidity={info.humidity}</div>
         <div>TempMin={info.tempMin}&deg;C</div>
         <div>TempMax={info.tempMax}&deg;C</div>

        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
        </>
    )
}   