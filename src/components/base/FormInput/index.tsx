type FormInputProps = {
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
  onSubmit?: () => void;
  className?: string; 
};

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onSubmit,
  onKeyPress,
  className, 
}) => {
  return (
    <div className="flex-grow">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
     
        className={`w-full p-2 text-base border border-gray-300 rounded-l-full focus:outline-none focus:border-gray-700 transition-all duration-300 ${className}`} 
      />
    </div>
  );
};

export default FormInput;
