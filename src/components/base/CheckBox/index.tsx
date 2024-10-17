import React from "react";

type CheckBoxProps = {
  checked: boolean;
  onChange: () => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="form-checkbox h-5 w-5 text-gray-600 transition duration-150 ease-in-out"
    />
  );
};

export default CheckBox;
