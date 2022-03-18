import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import AddForm from './AddForm/AddFormContainer';
import { styles } from './AppStyles';
import Item from './Item/ItemContainer';

const App = (props) => {
  const todoTasks = props.todos.filter((item) => item.state === 'todo');
  const completedTasks = props.todos.filter((item) => item.state === 'done');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Inbox</Text>
      <Text>To Do</Text>
      {todoTasks.length !== 0 ? (
        <FlatList
          data={todoTasks}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No to do tasks</Text>
      )}
      <Text>Completed</Text>
      {completedTasks.length !== 0 ? (
        <FlatList
          data={completedTasks}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No completed tasks</Text>
      )}
      <AddForm />
    </View>
  );
};

export default App;
