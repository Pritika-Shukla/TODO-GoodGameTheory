import React from "react";

type FormButtonProps = {
  onClick: () => void;
};

const FormButton: React.FC<FormButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      id="add-todo"
      className="p-2 px-5 text-base bg-gray-700 text-white rounded-r-full border-none cursor-pointer hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
    >
      Add
    </button>
  );
};

export default FormButton;
