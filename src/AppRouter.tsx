import { Routes, Route, Navigate } from 'react-router';
import React, { FC } from "react";
import MyTodos from './screens/MyTodos/MyTodos';
import TodoScreen from './screens/TodoScreen/TodoScreen';

interface IProps { };

const AppRouter: FC<IProps> = () => {
  return (
    <Routes>
      <Route
        path='/myTodos'
        element={<MyTodos />} />
      <Route
        path='/todo'
        element={<TodoScreen />} />
      <Route
        path='/*'
        element={<Navigate to='/myTodos' />} />
    </Routes>
  );
};

export default AppRouter;