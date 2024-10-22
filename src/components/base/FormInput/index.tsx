type FormInputProps = {
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;  
};

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onSubmit, 
}) => {
  return (
    <div className="flex-grow">
      <input
        type={type} // Pass the type prop
        name={name}
        placeholder={placeholder}
        className="w-full p-2 text-base border border-gray-300 rounded-l-full focus:outline-none focus:border-gray-700 transition-all duration-300"
        value={value}
        onChange={onChange}
        onKeyPress={(e) => {
          if (onSubmit && e.key === 'Enter') {
            onSubmit();
          }
        }}
      />
    </div>
  );
};

export default FormInput;
