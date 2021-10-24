import { persistStore, persistReducer } from 'redux-persist'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts';
import {authReducer} from './auth'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools:process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);
 

