import React, { useState } from "react";
import FormInput from "../../components/base/FormInput";
import FormButton from "../../components/base/FormButton";
import TodoListContainer from "../todoListContainer";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const ToDoContainer: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [submitTrigger, setSubmitTrigger] = useState(0);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleButtonClick = () => {
    setSubmitTrigger((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex mb-4">
        <FormInput addTodo={addTodo} submitTrigger={submitTrigger} />
        <FormButton onClick={handleButtonClick} />
      </div>
      <TodoListContainer
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default ToDoContainer;
