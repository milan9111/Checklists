import React, { ChangeEvent } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  changeFilterAll,
  changeFilterDone,
  searchTask,
} from "../store/reducers/TaskSlice";
import { Field } from "../styled/Forms";
import { FilterCheckbox } from "../styled/Forms";
import { TaskCheckbox } from "../styled/Task";
import { WrapperCheckboxes, WrapperSearch } from "../styled/Wrappers";

const TaskSearch = () => {
  const { filterAll, filterDone, filterSearch } = useAppSelector(
    (state) => state.taskReducer
  );
  const dispatch = useAppDispatch();

  const onSearchTasks = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {  
    dispatch(searchTask(e.target.value));
  };

  const onChangeAll = () => {
    dispatch(changeFilterAll());
  };

  const onChangeDone = () => {
    dispatch(changeFilterDone());
  };

  return (
    <WrapperSearch component="div">
      <Field
        id="search"
        variant="outlined"
        placeholder="Search"
        onChange={(e) => {
          onSearchTasks(e);
        }}
        value={filterSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <WrapperCheckboxes component="div">
        <FilterCheckbox
          label="All"
          control={
            <TaskCheckbox
              onChange={() => onChangeAll()}
              color="success"
              checked={filterAll}
            />
          }
        />
        <FilterCheckbox
          label="Done"
          control={
            <TaskCheckbox
              onChange={() => onChangeDone()}
              color="success"
              checked={filterDone}
            />
          }
        />
      </WrapperCheckboxes>
    </WrapperSearch>
  );
};

export default TaskSearch;
