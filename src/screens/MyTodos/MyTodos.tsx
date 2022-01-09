import React, { FC } from "react";
import Container from "../../components/Container/Container";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import Icon from "../../components/Icon/Icon";

import styles from './MyTodos.module.css';
import TextInput from "../../components/TextInput/TextInput";
import { NavLink } from "react-router-dom";

const MyTodos: FC = () => {
  const reduxDispatch = useAppDispatch();
  const todosList = useAppSelector(state => state.AppStore.myTodosList);

  return (
    <div>
      <Container>
        <ul className={styles.todosList}>
          {todosList.map(todos =>
            <li
              key={todos.id}>
              <NavLink
                to={`/todo:${todos.id}`}
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
            handleChange={(e) => console.log(e.target.value)} />
        </div>
      </Container>
    </div>
  )
};

export default MyTodos;