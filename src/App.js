import React from "react";
import "./App.css";
import PhoneComponent from "./components/PhoneComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React-Redux</h1>
        <PhoneComponent />
      </div>
    </Provider>
  );
};

export default App;
