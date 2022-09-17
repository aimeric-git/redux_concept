import React from "react";
import "./App.css";
import PhoneComponent from "./components/PhoneComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import TvComponent from "./components/TvComponent";
import ComponetsContainer from "./components/CommentsContainer";


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React-Redux</h1>
        <PhoneComponent />
        <TvComponent />
      </div>
        <ComponetsContainer/>
    </Provider>
  );
};

export default App;
