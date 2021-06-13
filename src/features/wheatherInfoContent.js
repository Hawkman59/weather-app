import React, { useState, useEffect } from 'react';
import ApiHandler from '../app/apiHandler';
import { List, DataTable } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import Formatter from '../app/formatter';

const WeatherInfoContent = (props) => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const [expanded2, setExpanded2] = React.useState(false);

    const handlePress2 = () => setExpanded2(!expanded2);

    const [expanded3, setExpanded3] = React.useState(false);

    const handlePress3 = () => setExpanded3(!expanded3);

    const createDaysTable = ()=>{
        var days = []

        props.data.daily.forEach(day =>{
            days.push(
                <DataTable.Row key={day.dt}>
                    <DataTable.Cell>{Formatter.getNameOfDay(day.dt)}</DataTable.Cell>
                    <DataTable.Cell>{Formatter.formatTemp(day.temp.day)}</DataTable.Cell>
                    <DataTable.Cell>{day.weather[0].description}</DataTable.Cell>
                </DataTable.Row>)
        })
        
        return(
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Tag</DataTable.Title>
                    <DataTable.Title>Temperatur</DataTable.Title>
                    <DataTable.Title>Wetter</DataTable.Title>
                </DataTable.Header>
                {days}
            </DataTable>
        )
    }

    const createHoursTable = ()=>{
        var hours = []
        props.data.hourly.forEach(hour =>{
            
            hours.push(
                <DataTable.Row key={hour.dt}>
                    <DataTable.Cell>{Formatter.formatTime(hour.dt)}</DataTable.Cell>
                    <DataTable.Cell>{Formatter.formatTemp(hour.temp)}</DataTable.Cell>
                    <DataTable.Cell>{hour.weather[0].description}</DataTable.Cell>
                </DataTable.Row>)
        })
        
        return(
            <ScrollView>
                <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Stunde</DataTable.Title>
                    <DataTable.Title>Temperatur</DataTable.Title>
                    <DataTable.Title>Wetter</DataTable.Title>
                </DataTable.Header>
                {hours}
            </DataTable>
            </ScrollView>
            
        )
    }

  return (
    <View>
        <List.Section >
            <List.Accordion 
            title="Aktuelles Wetter"
            expanded={expanded}
            onPress={handlePress}>
                <List.Item title={props.data.current.temp + " °C"} />
                <List.Item title={props.data.current.weather[0].description} />
            </List.Accordion>

            <List.Accordion 
            title="Stündlich"
            expanded={expanded2}
            onPress={handlePress2}>
                {createHoursTable()}
            </List.Accordion>

            <List.Accordion 
            title="Täglich"
            expanded={expanded3}
            onPress={handlePress3}>
                {createDaysTable()}
            </List.Accordion>
        </List.Section>

    </View>
  );
}

export default WeatherInfoContent;