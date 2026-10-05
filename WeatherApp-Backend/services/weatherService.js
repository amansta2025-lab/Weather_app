import axios from 'axios';
const getCurrentWeather = async (latitude,longitude) => {
    const url="https://api.open-meteo.com/v1/forecast";
    const response = await axios.get(url,{
        params: {
            latitude: latitude,
            longitude: longitude,
            current:"temperature_2m,"+
            "relative_humidity_2m,"+
            "apparent_temperature,"+
            "precipitation,"+
            "weather_code,"+
            "wind_speed_10m",
            
            daily:"sunrise,sunset",
            timezone:"auto"
        }
    });
    return response.data;
}
export default getCurrentWeather;

export async function getWeather(latitude, longitude) {
    let response;
    try{
        if(latitude == undefined || longitude == undefined){
            response = { code:400, success:false,message:"Latitude and Longitude Required" };
        } else {
           const weatherData = await getCurrentWeather(latitude, longitude);
           response = { code:200, success:true, data:weatherData };

        }

    }catch(e){
        response={ code:500, message:e.message };

    }
    return response;

}
