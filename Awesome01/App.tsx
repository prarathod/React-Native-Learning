import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

function App(): JSX.Element {
  const [name, setName] = useState(0);
  const Clicked = () => {
    setName(name + 1);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>{`Hello Prajwal ${name}`}</Text>
        <Text>Hello Prajwal</Text>
        <Text>Hello Prajwal</Text>
        <Text>Hello Prajwal</Text>
        <Text>Hello Prajwal</Text>
        <Button onPress={Clicked} title="Click Me" />
      </View>
    </SafeAreaView>
  );
}

export default App;
