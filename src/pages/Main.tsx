import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskSearch from "../components/TaskSearch";
import { Title } from "../styled/Title";

const Main: React.FC = () => {
  return (
    <>
      <Title component="h1">Checklists</Title>
      <TaskForm />
      <TaskSearch />
      <TaskList />
    </>
  );
};

export default Main;
