export default function TaskEditing({ onSubmit, onChange, value }) {
  return (
    <form className="todo__form-editing form" method="post" onSubmit={onSubmit}>
      <div className="todo__inner todo__inner--after-dark">
        <label className="todo__label-task label todo__label-task--dark" htmlFor="editing-name">
          Имя задачи
        </label>
        <input
          className="todo__input-task input"
          name="editing-name"
          id="editing-name"
          type="text"
          placeholder="Редактирование..."
          required
          onChange={onChange}
          value={value}
        ></input>
        <button className="todo__check-mark btn-reset"></button>
      </div>
    </form>
  );
}
