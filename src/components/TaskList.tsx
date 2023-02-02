import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import {
  changeResult,
  setIdRemoveTask,
  showModal,
} from "../store/reducers/TaskSlice";
import {
  Task,
  TaskButton,
  TaskNumber,
  TaskCheckbox,
  TaskText,
} from "../styled/Task";
import { WrapperEmptyTasks, WrapperTasks } from "../styled/Wrappers";
import TaskModal from "./TaskModal";

const TaskList = () => {
  const { tasks, filteredTasks, filterAll, filterSearch } = useAppSelector(
    (state) => state.taskReducer
  );
  const dispatch = useAppDispatch();

  const onOpenModal = (id: number) => {
    dispatch(setIdRemoveTask(id));
    dispatch(showModal());
  };

  const onChangeResult = (id: number) => {
    dispatch(changeResult(id));
  };

  const showTasks = !filterSearch && filterAll ? tasks : filteredTasks;

  const elemTasks = showTasks.map((item, index) => {
    return (
      <Task
        component="li"
        key={item.id}
        sx={
          item.done ? { backgroundColor: "#00ff1d29" } : { backgroundColor: "" }
        }
      >
        <TaskNumber component="p">{index + 1}.</TaskNumber>
        <TaskText
          component="p"
          sx={
            item.done
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {item.text}
        </TaskText>
        <TaskCheckbox
          onChange={() => onChangeResult(item.id)}
          checked={item.done}
          color="success"
        />
        <TaskButton onClick={() => onOpenModal(item.id)}>
          <DeleteIcon />
        </TaskButton>
      </Task>
    );
  });

  if (!showTasks.length) {
    return (
      <WrapperEmptyTasks component="p">There are not tasks!</WrapperEmptyTasks>
    );
  }

  return (
    <>
      <WrapperTasks component="ul">{elemTasks}</WrapperTasks>
      <TaskModal />
    </>
  );
};

export default TaskList;
