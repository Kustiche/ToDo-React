import { useState } from "react";
import TaskEditing from "./TaskEditing";

export default function Tasks({ tasks, onClick, onDeletedClick, setTasks }) {
  const [index, setIndex] = useState("");
  const [editedNameTask, setEditedNameTask] = useState("");
  let listTasks = [];

  function changeIndex(e) {
    const taskIndex = e.target.closest(".todo__task").dataset.index;

    setIndex(Number(taskIndex));

    setEditedNameTask("");
  }

  function changeeditedNameTask(e) {
    setEditedNameTask(e.target.value);
  }

  function editingTask(e) {
    e.preventDefault();

    const task = tasks.find((task) => task.id === index);
    const taskName = editedNameTask === "" ? task.name : editedNameTask;

    setTasks(
      tasks.map((task) => {
        return task.id === index ? { ...task, name: editedNameTask === "" ? taskName : editedNameTask } : task;
      })
    );

    setEditedNameTask("");
    setIndex("");
  }

  listTasks = tasks.map((task) => {
    if (index === task.id) {
      return (
        <TaskEditing
          key={task.id}
          value={editedNameTask === "" ? task.name : editedNameTask}
          onSubmit={editingTask}
          onChange={changeeditedNameTask}
        />
      );
    } else {
      return (
        <div className="todo__task" key={task.id} data-index={task.id}>
          <button className="todo__check btn-reset" onClick={onClick}></button>
          <span className="todo__text">{task.name}</span>
          <div className="todo__functional">
            <button className="todo__btn-redaction btn-reset" onClick={changeIndex}>
              <img className="todo__img-redaction" src="img/edit-icon.png" alt="Редактировать"></img>
            </button>
            <button className="todo__btn-delete btn-reset" onClick={onDeletedClick}>
              <img className="todo__img-delete" src="img/delete-icon.png" alt="Удалить"></img>
            </button>
          </div>
        </div>
      );
    }
  });

  return <div className="todo__tasks">{listTasks}</div>;
}
