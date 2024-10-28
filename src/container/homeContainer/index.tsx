import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import HomeView from "../../views/HomeView";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const HomeContainer: React.FC = () => {
  const { user } = useAuth(); 
  const [inputValue, setInputValue] = useState("");

  const getStoredTodos = (): Todo[] => {
    const storedData = localStorage.getItem(`ToDoList_${user?.uid}`);
    return storedData ? JSON.parse(storedData) : [];
  };

  const [todos, setTodos] = useState<Todo[]>(getStoredTodos());

  useEffect(() => {
    // Only store todos if there's a logged-in user
    if (user) {
      localStorage.setItem(`ToDoList_${user.uid}`, JSON.stringify(todos));
    }
  }, [todos, user]);

 
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