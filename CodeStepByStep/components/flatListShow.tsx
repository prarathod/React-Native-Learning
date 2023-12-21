import React, {useState} from 'react';
import {Text, View, FlatList, TextInput, Button} from 'react-native';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newVal, setNewVal] = useState('');
  const addTodo = () => {
    setTodos([...todos, newVal]);
  };

  return (
    <View>
      <TextInput
        placeholder="enter todo"
        value={newVal}
        onChangeText={text => setNewVal(text)}
      />
      <Button title="add" onPress={addTodo} />

      <FlatList
        data={todos}
        renderItem={({item}) => {
          <Text>{item}</Text>;
        }}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default Todo;
