import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { myAction, myAction2 } from "./redux/actions";
import { Provider } from "react-redux";

console.log(store);
console.log(store.getState());



ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     
        <App />
        
        </PersistGate>
      </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
