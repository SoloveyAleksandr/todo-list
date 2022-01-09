import { Routes, Route, Navigate } from 'react-router';
import React, { FC } from "react";
import MyTodos from './screens/MyTodos/MyTodos';
import TodoScreen from './screens/TodoScreen/TodoScreen';
import { useAppSelector } from './store/hooks';

const AppRouter: FC = () => {
  const todosList = useAppSelector(state => state.AppStore.myTodosList);

  return (
    <Routes>
      <Route
        path='/myTodos'
        element={<MyTodos />} />
      <Route
        path={`/todo:${todosList.forEach(el => el.id)}`}
        element={<TodoScreen />} />
      <Route
        path='/*'
        element={<Navigate to='/myTodos' />} />
    </Routes>
  );
};

export default AppRouter;