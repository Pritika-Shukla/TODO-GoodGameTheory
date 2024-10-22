import React from "react";

type FormButtonProps = {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode; // Add 'children' to props
};

const FormButton: React.FC<FormButtonProps> = ({
  onClick,
  type = "button",
  disabled = false,
  children, // Destructure 'children'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      id="form-button"
      className={`p-2 px-5 text-base rounded-r-full border-none cursor-pointer 
      ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-gray-700 text-white hover:bg-gray-800 hover:-translate-y-1"} 
      transition-all duration-300`}
      disabled={disabled}
    >
      {children} {/* Render children */}
    </button>
  );
};

export default FormButton;
