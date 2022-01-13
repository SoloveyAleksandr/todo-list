import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import { deleteTodo, saveCurrentState, setTodoIsDone } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import styles from './TodoScreen.module.css';

const TodoScreen: FC = () => {
  const reduxDispatch = useAppDispatch();
  const currentTodos = useAppSelector(state => state.AppStore.currentTodos);
  const todosList = currentTodos.todos;

  const saveState = () => reduxDispatch(saveCurrentState());


  function setIsDone(index: number) {
    reduxDispatch(setTodoIsDone(index));
    saveState();
  }

  function handleDeleteTodo(index: number, id: string) {
    reduxDispatch(deleteTodo(id));
    saveState();
  }

  return (
    <div>
      <Header
        title={currentTodos.title} />
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
      </Container>
    </div>
  )
};

export default TodoScreen;