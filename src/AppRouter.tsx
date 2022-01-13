import { Routes, Route, Navigate } from 'react-router';
import React, { FC } from "react";
import MyTodos from './screens/MyTodos/MyTodos';
import TodoScreen from './screens/TodoScreen/TodoScreen';
import { useAppSelector } from './store/hooks';

const AppRouter: FC = () => {
  const currentTodos = useAppSelector(state => state.AppStore.currentTodos);
  return (
    <Routes>
      <Route
        path='/myTodos'
        element={<MyTodos />} />
      {
        currentTodos.todos.length > 0 ?
          <Route
            path={'/todo'}
            element={<TodoScreen />} /> :
          <Route
            path='/todo'
            element={<Navigate to='/myTodos' />} />
      }
      <Route
        path={'/todo'}
        element={<TodoScreen />} />
      <Route
        path='/*'
        element={<Navigate to='/myTodos' />} />
    </Routes>
  );
};

export default AppRouter;