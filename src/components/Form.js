export default function Form({ value, onSubmit, onChange }) {
  return (
    <form className="todo__form form" method="post" onSubmit={onSubmit}>
      <div className="todo__inner">
        <label className="todo__label-task label" htmlFor="name">
          Имя новой задачи
        </label>
        <input
          className="todo__input-task input"
          name="name"
          id="name"
          type="text"
          placeholder="Задача..."
          required
          onChange={onChange}
          value={value}
        ></input>
        <button className="todo__btn btn-reset"></button>
      </div>
    </form>
  );
}
