# wheather-app
Simple weather app based on React Native.

Weather Data is fetched from OpenWeatherMap
City and Country Data is fetched from https://countriesnow.space/

You need to create a .env file with the following Value in order to get the API calls working:
```
WEATHER_API_KEY=<Your OpenWeatherMap API Key>
```

Debugging over WLAN:
```
adb pair HOST:PORT CODE

adb connect HOST:PORT
```

Start App:
```
npm run start
```

For first launch, connect your device with USB and execute follwing command to install the app for the first time
```
npx react-native run-android
```

Read Console Log
```
adb logcat *:S ReactNative:V ReactNativeJS:V
```