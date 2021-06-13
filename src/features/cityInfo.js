import React, { useState } from 'react';
import { Button, View, TextInput } from 'react-native';

const CityInfo = (props) => {
  const [text, setText] = useState('');
  
  return (
    <View style={{padding: 10}}>
      <TextInput
        placeholder="Search for City"
        onChangeText={text => setText(text)}
        defaultValue={text}
      >

      </TextInput>
      <Button
        onPress={() => {
          alert(text);
        }}
        title="Press Me"
      />
    </View>
  );
}

export default CityInfo;