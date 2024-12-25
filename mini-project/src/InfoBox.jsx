import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './InfoBox.css';

export default function InfoBox({info}) { 
    const HOT_URL ="https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    return(
        <div className="InfoBox">
             {/* <h1>Weather Info - {info.weather}</h1>  */}
                <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2"  color= 'text.secondary' component={"span"}>
                            <p>Temprature ={info.temp}&deg;C</p>
                            <p>Humidity ={info.humidity}%</p>
                            <p>Min Temprature ={info.tempMin}&deg;C</p>
                            <p>Max Temprature ={info.tempMax}&deg;C</p>
                            <p>Feels Like ={info.feelslike}&deg;C</p>
                             
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>

    );
    
}