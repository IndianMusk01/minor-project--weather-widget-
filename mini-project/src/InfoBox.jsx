import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './InfoBox.css';

export default function InfoBox() { 
    const INIT_URL ="https://images.unsplash.com/photo-1604424288891-7f0871867e09?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    let info ={
        city:"Lucknow",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        humidity:47,
        weather:"haze"
    };



    return(
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={INIT_URL}
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
                            <p>Max Temprature ={info.tempMin}&deg;C</p>
                            <p>Feels Like ={info.feelslike}&deg;C</p>
                             
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
        </div>
    );
}