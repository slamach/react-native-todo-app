import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './AppStyles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
