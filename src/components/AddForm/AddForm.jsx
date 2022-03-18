import { useState } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Text,
  Platform,
} from 'react-native';
import { styles } from './AddFormStyles';
import AddIcon from '../../assets/addIcon.svg';

const AddForm = (props) => {
  const [currentValue, setCurrentValue] = useState('');

  const submitForm = () => {
    if (currentValue !== '') {
      props.addTodo(currentValue);
      setCurrentValue('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.addFormContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        style={styles.inputField}
        value={currentValue}
        onChangeText={setCurrentValue}
        placeholder="I want to do..."
        onSubmitEditing={submitForm}
      />
      <Pressable style={styles.addButton} onPress={submitForm}>
        <AddIcon height={18} />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default AddForm;
