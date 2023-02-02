import React, { useEffect } from "react";
import { useAppSelector } from "./hooks/redux";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";

const App = () => {
  const { tasks } = useAppSelector((state) => state.taskReducer);

  useEffect(() => {
    window.onbeforeunload = () => {
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  }, [tasks]);

  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default App;
