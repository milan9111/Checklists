import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Task,
  TaskButton,
  TaskNumber,
  TaskCheckbox,
  TaskText,
} from "../styled/Task";
import { WrapperTasks } from "../styled/Wrappers";
import TaskModal from "./TaskModal";

const arr = [
  {
    id: 0,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    done: true,
  },
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    done: false,
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    done: false,
  },
];

const TaskList = () => {
  const onRemoveTask = (id: number) => {
    console.log(id);
  };

  const onChangeResult = (id: number) => {
    console.log(id);
  };

  const tasks = arr
    .sort((a, b) => +a.done - +b.done)
    .map((item, index) => {
      return (
        <Task
          component="li"
          key={item.id}
          sx={
            item.done
              ? { backgroundColor: "#00ff1d29" }
              : { backgroundColor: "" }
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
          <TaskButton onClick={() => onRemoveTask(item.id)}>
            <DeleteIcon />
          </TaskButton>
        </Task>
      );
    });

  return (
    <>
      <WrapperTasks component="ul">{tasks}</WrapperTasks>
      <TaskModal />
    </>
  );
};

export default TaskList;
