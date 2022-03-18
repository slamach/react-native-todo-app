import { View, Text, Pressable } from 'react-native';
import { styles } from './ItemStyles';
import TrashIcon from '../../assets/trashIcon.svg';
import CheckboxUnchecked from '../../assets/checkboxUnchecked.svg';
import CheckboxChecked from '../../assets/checkboxChecked.svg';

const Item = (props) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.itemCheckbox}
        onPress={() => props.changeTodoState(props.id)}
        hitSlop={10}
      >
        {props.state === 'todo' ? (
          <CheckboxUnchecked height={20} />
        ) : (
          <CheckboxChecked style={styles.itemCheckboxCheckedIcon} height={20} />
        )}
      </Pressable>
      <Text
        style={[
          styles.itemText,
          props.state === 'done' && styles.itemTextChecked,
        ]}
      >
        {props.text}
      </Text>
      <Pressable
        style={[
          styles.trashButton,
          props.state === 'done' && styles.trashButtonDone,
        ]}
        onPress={() => props.trashTodo(props.id)}
        hitSlop={10}
      >
        <TrashIcon height={20} />
      </Pressable>
    </View>
  );
};

export default Item;
