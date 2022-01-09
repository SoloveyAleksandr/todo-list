import { configureStore, createSlice } from '@reduxjs/toolkit';

interface ITodosList {
  id: string;
  title: string;
  todos: ITodo[];
}

interface ITodo {
  id: string,
  title: string,
  isDone: boolean,
}

interface IActivePage {
  title: string;
}

const activePageTitle: IActivePage = {
  title: 'Мой список дел',
};

const myTodosList: ITodosList[] = [
  {
    id: '123fwe34',
    title: 'Купить в магазине',
    todos: [
      {
        id: 'dsf4fs3',
        title: 'салат',
        isDone: false,
      },
      {
        id: '345b43',
        title: 'салат',
        isDone: true,
      },
      {
        id: 'b87654b',
        title: 'салат',
        isDone: false,
      }
    ]
  },
  {
    id: '32f34r',
    title: 'Прочесть',
    todos: [
      {
        id: '423с4в',
        title: 'Война и мир',
        isDone: false,
      }
    ]
  },
  {
    id: '325v345v',
    title: 'Посмотреть',
    todos: [
      {
        id: '3243457452',
        title: 'Люди в черном',
        isDone: false,
      }
    ]
  }
];

const AppStore = createSlice({
  name: 'AppStore',

  initialState: {
    activePageTitle,
    myTodosList,
  },

  reducers: {
    setActivePageName(state, action) {
      state.activePageTitle = action.payload;
    }
  },
});

export const {
  setActivePageName,
} = AppStore.actions;

const store = configureStore({
  reducer: {
    AppStore: AppStore.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

