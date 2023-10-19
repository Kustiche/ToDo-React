import { useEffect, useState } from "react";
import CompletedTasks from "./CompletedTasks";
import Form from "./Form";
import Tasks from "./Tasks";

export default function Main() {
  const [nameTask, setNameTask] = useState(JSON.parse(localStorage.getItem("nameTask")) ?? "");
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) ?? []);
  const [taskId, setTaskId] = useState(JSON.parse(localStorage.getItem("taskId")) ?? 0);
  const [completedTasks, setCompletedTasks] = useState(JSON.parse(localStorage.getItem("completedTasks")) ?? []);

  useEffect(() => {
    localStorage.setItem("nameTask", JSON.stringify(nameTask));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    localStorage.setItem("taskId", JSON.stringify(taskId));
  }, [nameTask, tasks, taskId, completedTasks]);

  function changeNameNewTask(e) {
    setNameTask(e.target.value);
  }

  function addTask(e) {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        id: taskId,
        name: nameTask,
      },
    ]);

    setTaskId(taskId + 1);
    setNameTask("");
  }

  function transferReadyTasks(e) {
    const taskIndex = e.target.closest(".todo__task").dataset.index;

    setTasks(
      tasks.filter((task) => {
        return task.id !== Number(taskIndex);
      })
    );

    setCompletedTasks([...completedTasks, tasks.find((task) => task.id === Number(taskIndex))]);
  }

  function transferUnfinishedTasks(e) {
    const taskIndex = e.target.closest(".todo__completed-task").dataset.index;

    setCompletedTasks(
      completedTasks.filter((task) => {
        return task.id !== Number(taskIndex);
      })
    );

    setTasks([...tasks, completedTasks.find((task) => task.id === Number(taskIndex))]);
  }

  function deletedCompletedTask(e) {
    const taskIndex = e.target.closest(".todo__completed-task").dataset.index;

    setCompletedTasks(
      completedTasks.filter((task) => {
        return task.id !== Number(taskIndex);
      })
    );
  }

  function deletedTask(e) {
    const taskIndex = e.target.closest(".todo__task").dataset.index;

    setTasks(
      tasks.filter((task) => {
        return task.id !== Number(taskIndex);
      })
    );
  }

  return (
    <section className="todo">
      <div className="todo__container container">
        <div className="todo__wrap">
          <h1 className="todo__title">ToDo</h1>
          <Form value={nameTask} onSubmit={addTask} onChange={changeNameNewTask} />
          <span className="todo__output">Нужно сделать {`(${tasks.length})`}</span>
          <Tasks tasks={tasks} onClick={transferReadyTasks} onDeletedClick={deletedTask} setTasks={setTasks} />
          <span className="todo__output">Готово {`(${completedTasks.length})`}</span>
          <CompletedTasks
            tasks={completedTasks}
            onClick={transferUnfinishedTasks}
            onDeletedClick={deletedCompletedTask}
          />
        </div>
      </div>
    </section>
  );
}
