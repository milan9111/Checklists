import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Field } from "../styled/Forms";
import { FilterCheckbox } from "../styled/Forms";
import { TaskCheckbox } from "../styled/Task";
import { WrapperCheckboxes, WrapperSearch } from "../styled/Wrappers";

const TaskSearch = () => {
  return (
    <WrapperSearch component="div">
      <Field
        id="search"
        variant="outlined"
        placeholder="Search"
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
              onChange={() => {}}
              color="success"
              // checked={item.done}
            />
          }
        />
        <FilterCheckbox
          label="Done"
          control={
            <TaskCheckbox
              onChange={() => {}}
              color="success"
              // checked={item.done}
            />
          }
        />
      </WrapperCheckboxes>
    </WrapperSearch>
  );
};

export default TaskSearch;
