import React, { useState, useEffect } from 'react';
import ApiHandler from '../app/apiHandler';
import { ActivityIndicator, Button, Card, Title, Paragraph } from 'react-native-paper';
import WeatherInfoContent from './wheatherInfoContent';

const WeatherInfo = (props) => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    if(props != null && props.location != null && data == null){
      var tmp = await ApiHandler.getWeatherDataForCoordinates(props.location.latitude,props.location.longitude)
      setData(tmp)
    }
  }, [props]);
 

  return (
    <Card>
        <Card.Title title="Wetter"/>
        <Card.Content>
          {data == null && 
            <ActivityIndicator animating={true} />
          }

          {(data != null && data.current != null)  && 
            <WeatherInfoContent data={data}></WeatherInfoContent>
          }

          {(data != null && data.cod != 200) && 
            <Paragraph>{data.message}</Paragraph>
          }
            
        </Card.Content>
  </Card>
  );
}

export default WeatherInfo;