import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddForm = (props) => {
  const [currentValue, setCurrentValue] = useState('');

  const submitForm = () => {
    if (currentValue !== '') {
      props.addTodo(currentValue);
      setCurrentValue('');
    }
  };

  return (
    <View>
      <TextInput
        value={currentValue}
        onChangeText={setCurrentValue}
        placeholder="Your task..."
      />
      <Button title="Add" onPress={submitForm} />
    </View>
  );
};

export default AddForm;
