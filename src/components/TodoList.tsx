import React from "react";
import { ITodo } from "../interfaces/interfaces";

interface TodoListProps {
  todos: ITodo[];
  //или так или так
  onToggle(id: number): void;
  onRemove: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };
  if (todos.length === 0) {
    return <p className="center">Пока дел нет</p>;
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={onToggle.bind(null, todo.id)}
                onClick={() => console.log(todo.completed)}
                checked={todo.completed}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
