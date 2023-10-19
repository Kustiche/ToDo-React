export default function CompletedTasks({ tasks, onClick, onDeletedClick }) {
  let listTasks = [];
  if (tasks.length !== undefined) {
    listTasks = tasks.map((task) => {
      return (
        <div className="todo__completed-task" key={task.id} data-index={task.id}>
          <button className="todo__check btn-reset todo__check--active" onClick={onClick}></button>
          <span className="todo__text">{task.name}</span>
          <button className="todo__btn-delete btn-reset" onClick={onDeletedClick}>
            <img className="todo__img-delete" src="img/delete-icon.png" alt="Удалить"></img>
          </button>
        </div>
      );
    });
  }

  return <div className="todo__completed-tasks">{listTasks}</div>;
}
