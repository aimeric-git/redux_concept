import React from "react";
import "./App.css";
import PhoneComponent from "./components/PhoneComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import TvComponent from "./components/TvComponent";


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React-Redux</h1>
        <PhoneComponent />
        <TvComponent />
      </div>
    </Provider>
  );
};

export default App;
