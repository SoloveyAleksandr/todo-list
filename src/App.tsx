import Header from "./components/Header/Header";
import { useLocation } from 'react-router-dom';

import './App.css';
import './iconMoonStyles.css';
import Icon from "./components/Icon/Icon";
import DefaultBtn from "./components/DefaultBtn/DefaultBtn";
import AppRouter from "./AppRouter";
import Popup from "./components/Popup/Popup";
import TextInput from "./components/TextInput/TextInput";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const reduxDispatch = useAppDispatch();
  const state = useAppSelector(state => state.AppStore);

  const [popupIsActive, setActivePopup] = useState(false);

  return (
    <div className="App">
      <Header
        title='Мой список дел'
        rightBtn={
          <DefaultBtn
            iconName='plus'
            iconSize={18}
            handleClick={() => setActivePopup(true)} />}
      />

      <Popup
        isActive={popupIsActive}
        title='Удалить список купить в магазине?'
        closeFunc={() => setActivePopup(false)}
        children={
          <TextInput
            placeholder='Добавить'
            handleChange={(e) => console.log(e.target.value)}
            button={
              <DefaultBtn
                iconName='plus'
                iconSize={16}
                handleClick={(e) => console.log(e.target)} />
            }
          />
        }
      />

      <AppRouter />
    </div>
  );
}

export default App;
