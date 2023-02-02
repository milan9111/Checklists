import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";

export interface TaskState {
  tasks: ITask[];
  filteredTasks: ITask[];
  modal: boolean;
  idRemoveTask: number;
  filterSearch: string;
  filterAll: boolean;
  filterDone: boolean;
}

const savedLocalStorage: string | null = localStorage.getItem("tasks");

const initialState: TaskState = {
  tasks: savedLocalStorage ? JSON.parse(savedLocalStorage) : [],
  filteredTasks: [],
  modal: false,
  idRemoveTask: 0,
  filterSearch: "",
  filterAll: true,
  filterDone: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<ITask>) => {
        state.tasks.unshift(action.payload);
        state.filterSearch = "";
      },
      prepare: (text: string) => {
        const id = Date.now();
        const done = false;
        const changedDate = 0;
        return { payload: { id, text, done, changedDate } };
      },
    },
    showModal(state) {
      state.modal = !state.modal;
    },
    setIdRemoveTask(state, action: PayloadAction<number>) {
      state.idRemoveTask = action.payload;
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
      state.filteredTasks = state.tasks.filter(
        (item) => item.id !== action.payload
      );
      state.filterSearch = "";
    },
    changeResult(state, action: PayloadAction<number>) {
      const changedTasks: ITask[] = state.tasks.map((item) => {
        return item.id === action.payload
          ? {
              ...item,
              done: !item.done,
              changedDate: item.done ? -Date.now() : Date.now(),
            }
          : item;
      });
      changedTasks.sort((a, b) => a.changedDate - b.changedDate);
      state.tasks = changedTasks;
      state.filteredTasks = state.filterDone
        ? changedTasks.filter((item) => item.done === true)
        : changedTasks;
      state.filterSearch = "";
    },
    searchTask(state, action: PayloadAction<string>) {
      state.filterSearch = action.payload;
      let filteredTasks = state.tasks.filter((item) =>
        item["text"].toLowerCase().includes(state.filterSearch.toLowerCase())
          ? item
          : false
      );
      filteredTasks = state.filterDone
        ? filteredTasks.filter((item) => item.done === true)
        : filteredTasks;
      state.filteredTasks = filteredTasks;
    },
    changeFilterAll(state) {
      state.filterAll = true;
      state.filterDone = false;
      state.filterSearch = "";
      state.filteredTasks = [];
    },
    changeFilterDone(state) {
      state.filterDone = true;
      state.filterAll = false;
      state.filterSearch = "";
      const filteredTasks = state.tasks.filter((item) => item.done === true);
      state.filteredTasks = filteredTasks;
    },
  },
});

export const {
  addTask,
  showModal,
  setIdRemoveTask,
  removeTask,
  changeResult,
  searchTask,
  changeFilterAll,
  changeFilterDone,
} = taskSlice.actions;

export default taskSlice.reducer;
