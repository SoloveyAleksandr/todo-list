import React, { FC, useState } from "react";
import Container from "../../components/Container/Container";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import Icon from "../../components/Icon/Icon";
import { v4 as uuid } from 'uuid';

import styles from './MyTodos.module.css';
import TextInput from "../../components/TextInput/TextInput";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Popup from "../../components/Popup/Popup";
import { addNewTodosList, setCurrentTodos } from "../../store";

const MyTodos: FC = () => {
  const reduxDispatch = useAppDispatch();
  const todosList = useAppSelector(state => state.AppStore.myTodosList);
  const [popupIsActive, setActivPopup] = useState(false);
  const [addInputValue, setAddInputValue] = useState<string>('');
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const id: string = uuid().slice(0, 8);

  function addTodos() {
    reduxDispatch(addNewTodosList({
      id: id,
      title: addInputValue,
      todos: [],
    }))
  }

  return (
    <div>

      <Header
        title='Мой список дел'
        rightBtn={
          <DefaultBtn
            iconName='plus'
            iconSize={16}
            handleClick={() => setActivPopup(!popupIsActive)} />
        } />

      <Popup
        isActive={popupIsActive}
        title='Добавить новое дело:'
        closeFunc={() => setActivPopup(!popupIsActive)}>
        <TextInput
          value={addInputValue}
          placeholder='Добавить'
          handleChange={(e) => setAddInputValue(e.target.value)}
          button={
            <DefaultBtn
              iconName='plus'
              iconSize={16}
              handleClick={() => {
                addTodos();
                setActivPopup(!popupIsActive);
              }} />
          } />
      </Popup>

      <Container>
        <ul className={styles.todosList}>
          {todosList.map(todos =>
            <li
              key={todos.id}
              onClick={() => reduxDispatch(setCurrentTodos({
                id: todos.id,
                title: todos.title,
                todos: todos.todos,
              }))}>
              <NavLink
                to={'/todo'}
                className={styles.itemLink}>
                <div className={styles.listItem}>
                  <span>
                    <Icon
                      icon='list'
                      size={16}
                      className={styles.itemIcon} />
                    {todos.title}</span>
                  <DefaultBtn
                    iconName='edit'
                    iconSize={16} />
                </div>
              </NavLink>
            </li>
          )}
        </ul>
        <div className={styles.searchWrapper}>
          <TextInput
            value={searchInputValue}
            placeholder='Поиск'
            placeholderIcon={{
              icon: 'search',
              size: 16
            }}
            button={
              <DefaultBtn
                iconName='search'
                iconSize={16} />
            }
            handleChange={(e) => setSearchInputValue(e.target.value)} />
        </div>
      </Container>

    </div>
  )
};

export default MyTodos;