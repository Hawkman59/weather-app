import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  useColorScheme,
  ScrollView,
  RefreshControl
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import WeatherInfo from './features/weatherInfo';

import ApiHandler from './app/apiHandler';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [location, setLocation] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    var tmp = await ApiHandler.getLocation()
    setLocation(tmp)
    setRefreshing(false)
  }, []);

  useEffect( async () => {
    if(location == null){
      var tmp = await ApiHandler.getLocation()
      setLocation(tmp)
    }
    
  },[location]);

  return (
      <PaperProvider>
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
          <WeatherInfo location={location} refresh={refreshing}></WeatherInfo>
        </ScrollView>
      </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
   },
});

export default App;
