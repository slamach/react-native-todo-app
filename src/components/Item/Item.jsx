import { View, Text, Button } from 'react-native';

const Item = (props) => {
  return (
    <View>
      <Button
        title={props.state === 'todo' ? '[ ]' : '[X]'}
        onPress={() => props.changeTodoState(props.id)}
      />
      <Text>{props.text}</Text>
    </View>
  );
};

export default Item;
