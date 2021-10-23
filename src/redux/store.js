import {  configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import counterReducer from './counter/counter-reducer';
import contactsReducer from './phonebook/phonebook-reducer';
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'contact',
    storage,
    blacklist: ['filter'],
  };
// const rootReducer =  combineReducers({
//     contacts: persistReducer(persistConfig, contactsReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const rootReducer =combineReducers({
//     counter: counterReducer,
//     contacts: contactsReducer
// });

// const store = createStore(rootReducer, composeWithDevTools());

console.log(getDefaultMiddleware());

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
}), logger];

const store = configureStore({
    reducer: {
        contacts: persistReducer(persistConfig, contactsReducer),
    },
    middleware: middleware,
    devTools: process.env.NODE_ENV === 'development', 

});

const persistor = persistStore(store);

export  {store, persistor};