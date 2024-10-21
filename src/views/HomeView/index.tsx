import React from 'react';
import Form from "../../components/custom/Form";
import ListItem from "../../components/custom/ListItem";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type HomeViewProps = {
  todos: Todo[];
  inputValue: string;
  onDelete: (id: string) => void;
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggle: (id: string) => void;
};

const HomeView: React.FC<HomeViewProps> = ({
  todos,
  onDelete,
  onSubmit,
  onChange,
  onToggle,
  inputValue,
}) => {
  return (
    <>
     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
     <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">

      <div>
        <Form
          value={inputValue}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              checked={todo.completed}
              onCheck={() => onToggle(todo.id)}
              onDelete={() => onDelete(todo.id)}
            />
          ))}
        </ul>
      </div>
      </div>
      </div>
    </>
  );
};

export default HomeView;