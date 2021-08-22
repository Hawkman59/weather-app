import {WEATHER_API_KEY} from '@env';
import GetLocation from 'react-native-get-location'

class ApiHandler{

    static getWeatherDataForCoordinates(lat, lon){
        if(lat === null || lat === undefined || lon === null || lon === undefined ){
            return null
        }
        var url =  'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=metric&lang=de&exclude=minutely&appid=' + WEATHER_API_KEY
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static getLocation(){
        return GetLocation.getCurrentPosition({
                enableHighAccuracy: false,
                timeout: 15000,
                })
                .then(location => {
                    return location;
                })
                .catch(error => {
                    const { code, message } = error;
                    console.warn(code, message);
                })
    }

    static getLocationNameFromCoordinates(lat, lon){
        if(lat === null || lat === undefined || lon === null || lon === undefined ){
            return null
        }
        var url =  'http://api.openweathermap.org/geo/1.0/reverse?lat=' + lat + '&lon=' + lon + '&limit=1&appid=' + WEATHER_API_KEY
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static getCoordinatesFromLocationName(name){
        if(name === null || name === undefined){
            return null
        }
        var url =  'http://api.openweathermap.org/geo/1.0/direct?q=' + name + '&limit=1&appid=' + WEATHER_API_KEY
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default ApiHandler