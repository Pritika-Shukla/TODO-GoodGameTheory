import React from 'react';
import CheckBox from '../../components/base/CheckBox';
import DeleteButton from '../../components/base/DeleteButton';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListContainerProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoListContainer: React.FC<TodoListContainerProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2 w-full">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
          <CheckBox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={`flex-grow ml-3 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
          <DeleteButton onClick={() => deleteTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoListContainer;