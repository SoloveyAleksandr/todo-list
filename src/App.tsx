import Header from "./components/Header/Header";
import { useLocation } from 'react-router-dom';

import './App.css';
import './iconMoonStyles.css';
import Icon from "./components/Icon/Icon";
import DefaultBtn from "./components/DefaultBtn/DefaultBtn";
import AppRouter from "./AppRouter";
import Popup from "./components/Popup/Popup";
import TextInput from "./components/TextInput/TextInput";

function App() {
  console.log(useLocation());
  return (
    <div className="App">
      <Header
        title='Мой список дел'
        rightBtn={
          <DefaultBtn
            iconName='plus'
            iconSize={18} />}
      />

      <Popup
        title='Удалить список купить в магазине?'
        children={
          <TextInput
            placeholder='Добавить'
            placeholderIcon={{
              size: 16,
              icon: 'search',
            }}
            button={{
              iconName: 'plus',
              iconSize: 16,
            }}
            handleChange={(e) => console.log(e.target.value)}
          />
        }
      />

      <AppRouter />
    </div>
  );
}

export default App;
