import React from 'react';
import { List, DataTable, Card } from 'react-native-paper';
import { ScrollView, View, StyleSheet, Image} from 'react-native';
import { Text, Caption, Subheading } from 'react-native-paper';
import Formatter from '../app/formatter';

const WeatherForecast = (props) => {

    const styles = StyleSheet.create({
        dayRow: {
            minHeight: 50,
            flexDirection: "row",
            alignItems: "center"
        },
        dailyColumn: {
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

    const createDayEntry = (day) => {
        var weatherIconURL = "http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"

        return (
            <View key={day.dt} style={styles.dayRow}>
                <View style={{flex: 3}}>
                    <Subheading>{Formatter.getNameOfDay(day.dt)}</Subheading>
                </View>
                <View style={{flex: 2}}>
                    <Caption>{Formatter.formatPop(day.pop)}</Caption>
                </View>
                <View style={{flex: 3}}>
                    <Image source={{uri: weatherIconURL}}
                    style={styles.weatherIcon}
                    />
                </View>
                <View style={{flex: 4}}>
                <Text>{Formatter.formatTemp(day.temp.max) + " / " + Formatter.formatTemp(day.temp.min)}</Text>
                </View>
            </View>
        )
    }

    const createDaysView = ()=>{
        var days = []

        for(var i=0; i<7; i++){
            days.push(createDayEntry(props.data.daily[i]))
        } 
        
        return(
            <View style={styles.dailyColumn}>
                {days}
            </View>
            
        )
    }
    
  return (
    <Card>
        <Card.Content>
            {createDaysView()}
        </Card.Content>
    </Card>
  );
}

export default WeatherForecast;