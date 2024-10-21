type FormInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const FormInput: React.FC<FormInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <div className="flex-grow">
      <input
        type="text"
        id="new-todo"
        placeholder="Add a new task"
        className="w-full p-2 text-base border border-gray-300 rounded-l-full focus:outline-none focus:border-gray-700 transition-all duration-300"
        value={value}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
      />
    </div>
  );
};

export default FormInput;