import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface ITodosList {
  id: string;
  title: string;
  todos: ITodo[];
}

export interface ITodo {
  id: string,
  title: string,
  isDone: boolean,
}

const currentTodos: ITodosList = {
  id: '',
  title: '',
  todos: [],
};

const myTodosList: ITodosList[] = [];

const AppStore = createSlice({
  name: 'AppStore',

  initialState: {
    currentTodos,
    myTodosList,
  },

  reducers: {
    setCurrentTodos(state, action: { payload: ITodosList }) {
      state.currentTodos = action.payload;
    },
    addNewTodosList(state, action: { payload: ITodosList }) {
      state.myTodosList.push(action.payload);
    },
    setTodoIsDone(state, action: { payload: number }) {
      state.currentTodos.todos[action.payload].isDone = true;
    },
    saveCurrentState(state) {
      state.myTodosList.map(todo => {
        if (todo.id === state.currentTodos.id) {
          todo.todos = state.currentTodos.todos;
        }
      })
    },
    deleteTodo(state, action: { payload: string }) {
      state.currentTodos.todos = state.currentTodos.todos.filter(todo => todo.id !== action.payload);
    },
    deleteTodosList(state) {
      state.myTodosList = state.myTodosList.filter(todos => todos.id !== state.currentTodos.id);
    },
    addTodo(state, action: { payload: ITodo }) {
      state.currentTodos.todos.push(action.payload);
    }
  },
});

export const {
  setCurrentTodos,
  addNewTodosList,
  setTodoIsDone,
  saveCurrentState,
  deleteTodo,
  deleteTodosList,
  addTodo,
} = AppStore.actions;

const store = configureStore({
  reducer: {
    AppStore: AppStore.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

