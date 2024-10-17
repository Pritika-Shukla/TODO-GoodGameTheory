import React from "react";
import ToDoContainer from "../../container/todoContainer";

const HomeView: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          To-Do List App
        </h1>
        <ToDoContainer />
      </div>
    </div>
  );
};

export default HomeView;
