import React from "react";
import DeleteButton from "../../base/DeleteButton";
import CheckBox from "../../base/CheckBox";

type ListItemProps = {
  id: string;
  text: string;
  checked: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

const ListItem: React.FC<ListItemProps> = ({ id, text, checked, onCheck, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <CheckBox checked={checked} onChange={onCheck} />
        <span className={`text-lg ${checked ? 'line-through text-gray-500' : ''}`}>
          {text}
        </span>
      </div>
      <DeleteButton onClick={onDelete} />
    </div>
  );
};

export default ListItem;