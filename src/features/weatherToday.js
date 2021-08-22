import React from 'react';
import { Card,Title, Caption, Subheading } from 'react-native-paper';
import { ScrollView, View, StyleSheet, Image} from 'react-native';
import Formatter from '../app/formatter';

const WeatherToday = (props) => {

    const styles = StyleSheet.create({
        containerRow: {
            minHeight: 60,
            flexDirection: "row",
            alignItems: "center"
        },
        containerColumn: {
            flexDirection: "column",
            alignItems: "flex-end"
        },
        hourlyColumn: {
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
        },
        currentTempText: {
          fontSize: 100
        },
        weatherIcon: {
            width: 50,
            height: 50
        },
        weatherIconHour: {
            width: 30,
            height: 30
        }
      });

    const createCurrentWeather = () => {
        var weatherIconURL = "http://openweathermap.org/img/wn/" + props.data.current.weather[0].icon + "@2x.png"

        return(
            <View key="current-temp" style={styles.containerRow}>
                <View style={{flex: 1}}>
                    <Image source={{uri: weatherIconURL}}
                    style={styles.weatherIcon}
                    />
                </View>
                <View style={{flex: 2}}>
                    <Title>{Formatter.formatTemp(props.data.current.temp)}</Title>
                </View>
                <View style={{flex: 3}}>
                    <View style={styles.containerColumn}>
                        <Caption>{props.data.current.weather[0].description}</Caption>
                        <Caption>{Formatter.formatTemp(props.data.daily[0].temp.max) + " / " + Formatter.formatTemp(props.data.daily[0].temp.min)}</Caption>
                        <Caption>{"Gefühlt wie: " + Formatter.formatTemp(props.data.current.feels_like)}</Caption>
                    </View>
                </View>
            </View>
        )
    }

    const createHourEntry = (hour) => {
        var weatherIconURL = "http://openweathermap.org/img/wn/" + hour.weather[0].icon + "@2x.png"

        return (
            <View key={hour.dt} style={styles.hourlyColumn}>
                <Caption style={{width: 35}} numberOfLines={1}>{Formatter.formatTime(hour.dt)}</Caption>
                <Image source={{uri: weatherIconURL}}
                        style={styles.weatherIconHour}
                />
                <Subheading>{Formatter.formatTemp(hour.temp)}</Subheading>
                <Caption>{Formatter.formatPop(hour.pop)}</Caption>
            </View>
        )
    }

    const createHoursView = ()=>{
        var hours = []

        for(var i=0; i<24; i++){
            hours.push(createHourEntry(props.data.hourly[i]))
        } 
        
        return(
            <ScrollView horizontal={true}>
                {hours}
            </ScrollView>
            
        )
    }
  return (
    <Card style={{marginBottom: 20}}>
        <Card.Title title={props.city === null ? "" : props.city[0].name} subtitle={Formatter.formatDate(props.data.current.dt)}/>
        <Card.Content>
            {createCurrentWeather()}
            {createHoursView()}
        </Card.Content>
    </Card>
  );
}

export default WeatherToday;