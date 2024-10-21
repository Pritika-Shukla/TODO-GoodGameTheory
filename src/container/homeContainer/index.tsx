import React, { useState, useEffect } from "react";

import HomeView from "../../views/HomeView";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const HomeContainer: React.FC = () => {
  
  const [inputValue, setInputValue] = useState("");

  const getStoredTodos = (): Todo[] => {
    const storedData = localStorage.getItem("ToDoList");
    return storedData ? JSON.parse(storedData) : [];
  };

  const [todos, setTodos] = useState<Todo[]>(getStoredTodos());

  useEffect(() => {
    localStorage.setItem("ToDoList", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: new Date().getTime().toString(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };

  const handleDelete = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };



  return (
    <HomeView
      todos={todos}
      onDelete={handleDelete}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onToggle={handleToggle}
      inputValue={inputValue}
    />
  );
};

export default HomeContainer;