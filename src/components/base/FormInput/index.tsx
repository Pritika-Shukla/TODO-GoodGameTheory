import React, { useState, useEffect } from "react";

type FormInputProps = {
  addTodo: (text: string) => void;
  submitTrigger: number;
};

const FormInput: React.FC<FormInputProps> = ({ addTodo, submitTrigger }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (submitTrigger > 0) {
      handleSubmit();
    }
  }, [submitTrigger]);

  const handleSubmit = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div className="flex-grow">
      <input
        type="text"
        id="new-todo"
        placeholder="Add a new task"
        className="w-full p-2 text-base border border-gray-300 rounded-l-full focus:outline-none focus:border-gray-700 transition-all duration-300"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      />
    </div>
  );
};

export default FormInput;
