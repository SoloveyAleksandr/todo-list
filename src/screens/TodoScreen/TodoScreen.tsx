import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Popup from "../../components/Popup/Popup";
import TextInput from "../../components/TextInput/TextInput";
import { addTodo, deleteTodo, deleteTodosList, saveCurrentState, setTodoIsDone } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { v4 as uuid } from 'uuid';

import styles from './TodoScreen.module.css';

const TodoScreen: FC = () => {
  const reduxDispatch = useAppDispatch();
  const currentTodos = useAppSelector(state => state.AppStore.currentTodos);
  const todosList = currentTodos.todos;
  const [popupIsActive, setActivePopup] = useState(false);
  const [addInputValue, setAddInputValue] = useState('');

  const id: string = uuid().slice(0, 8);

  const saveState = () => reduxDispatch(saveCurrentState());


  function setIsDone(index: number) {
    reduxDispatch(setTodoIsDone(index));
    saveState();
  }

  function handleDeleteTodo(index: number, id: string) {
    reduxDispatch(deleteTodo(id));
    saveState();
  }

  function deleteList() {
    reduxDispatch(deleteTodosList());
    setActivePopup(!popupIsActive);
  }

  function createTodo() {
    reduxDispatch(addTodo({
      id,
      title: addInputValue,
      isDone: false
    }))
    setAddInputValue('');
    reduxDispatch(saveState());
  }

  return (
    <div>
      <Header
        title={currentTodos.title}
        leftBtn={
          <NavLink to='/'>
            <DefaultBtn
              iconSize={12}
              iconName='arrow' />
          </NavLink>
        }
        rightBtn={
          <DefaultBtn
            iconSize={16}
            iconName='cart'
            handleClick={() => setActivePopup(!popupIsActive)} />
        } />

      <Popup
        isActive={popupIsActive}
        title={`Удалить список дел: ${currentTodos.title}?`}
        closeFunc={() => setActivePopup(!popupIsActive)}>
        <div className={styles.btnWrapper}>
          <NavLink to='/'>
            <DefaultBtn
              iconSize={12}
              iconName='select'
              handleClick={deleteList} />
          </NavLink>
          <div className={styles.cancelBtn}>
            <DefaultBtn
              iconSize={18}
              iconName='plus'
              handleClick={() => setActivePopup(!popupIsActive)} />
          </div>
        </div>
      </Popup>
      <Container>
        <ul className={styles.todosList}>
          {todosList.map((el, index) =>
            <li
              key={el.id}
              className={
                el.isDone ?
                  `${styles.listItem} ${styles.isdone}`
                  : styles.listItem
              }>
              <span>
                <Icon
                  icon='list'
                  size={16}
                  className={styles.itemIcon} />
                {el.title}</span>
              <DefaultBtn
                iconName={el.isDone ? 'cart' : 'select'}
                iconSize={12}
                handleClick={() => {
                  if (el.isDone) {
                    handleDeleteTodo(index, el.id);
                    return;
                  } else {
                    setIsDone(index);
                    return;
                  }
                }} />
            </li>
          )}
        </ul>

        <div className={styles.addInputWrapper}>
          <TextInput
            value={addInputValue}
            placeholder='Добавить'
            placeholderIcon={{
              icon: 'plus',
              size: 16
            }}
            button={
              <DefaultBtn
                iconName='plus'
                iconSize={16}
                handleClick={createTodo} />
            }
            handleChange={(e) => setAddInputValue(e.target.value)} />
        </div>
      </Container>
    </div>
  )
};

export default TodoScreen;