import React, { useState, useEffect } from 'react';
import ApiHandler from '../app/apiHandler';
import { ActivityIndicator, Paragraph } from 'react-native-paper';
import WeatherToday from './weatherToday';
import WeatherForecast from './weatherForecast';

const WeatherInfo = (props) => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(async () => {
    if(props != null && props.location != null && (data == null || props.refresh === true)){
      var tmp = await ApiHandler.getWeatherDataForCoordinates(props.location.latitude,props.location.longitude)
      var tmp2 = await ApiHandler.getLocationNameFromCoordinates(props.location.latitude,props.location.longitude)
      setData(tmp)
      setCity(tmp2)
    }
  }, [props]);
 

  return (
    <React.Fragment>
      {data == null && 
        <ActivityIndicator animating={true} />
      }

      {(data != null && data.current != null)  && 
        <WeatherToday data={data} city={city}></WeatherToday>
      }

      {(data != null && data.current != null)  && 
        <WeatherForecast data={data}></WeatherForecast>
      }

      {(data != null && data.cod != 200) && 
        <Paragraph>{data.message}</Paragraph>
      }
    </React.Fragment>
  );
}

export default WeatherInfo;