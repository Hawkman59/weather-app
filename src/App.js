import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import WeatherInfo from './features/wheatherInfo';

import ApiHandler from './app/apiHandler';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [location, setLocation] = useState(null);
  useEffect( async () => {
    if(location == null){
      var tmp = await ApiHandler.getLocation()
      setLocation(tmp)
    }
    
  },[location]);

  return (
      <PaperProvider>
        <View
          style={styles.container}>
          <WeatherInfo location={location}></WeatherInfo>
        </View>
      </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   },
});

export default App;
