import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

export const store = configureStore({
  reducer: {
    // app: persistReducer(persistConfig, appReducer),
    app: appReducer,
  },
});
// export const persistor = persistStore(store);
