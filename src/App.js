import React from "react";
import c from './App.module.scss';
import MainButton from "./components/MainButton/MainButton";
import Popup from "./components/Popup/Popup";
import CalculateState from "./context/calc/CalculationState";
import PopupState from "./context/pop/PopupState";

function App() {
  return (
    <PopupState>
      <CalculateState>
        <div className={c.App}>
          <MainButton />
          <Popup />
        </div>
      </CalculateState>
    </PopupState>
  );
}

export default App;
