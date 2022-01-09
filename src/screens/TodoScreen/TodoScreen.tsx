import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import Icon from "../../components/Icon/Icon";
import { useAppSelector } from "../../store/hooks";

import styles from './TodoScreen.module.css';

const TodoScreen: FC = () => {
  const myTodos = useAppSelector(state => state.AppStore.myTodosList);
  const currentPath = useLocation().pathname.slice(6);
  const currentTodo = myTodos.find(el => el.id === currentPath);
  const todosList = currentTodo?.todos.slice().sort((a, b) => a.isDone ? 1 : -1);

  return (
    <Container>
      <ul className={styles.todosList}>
        {todosList?.map(el =>
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
              iconSize={12} />
          </li>
        )}
      </ul>
    </Container>
  )
};

export default TodoScreen;