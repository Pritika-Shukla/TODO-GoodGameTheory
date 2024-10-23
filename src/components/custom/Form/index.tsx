import React from 'react';
import FormInput from '../../base/FormInput';
import FormButton from '../../base/FormButton';

type FormProps = {
  value: string;
  onKeyPress: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const Form: React.FC<FormProps> = ({ 
  value, 
  onChange, 
  onSubmit, 
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(); 
    }
  };

  return (
    <div className="flex my-5">
      <FormInput 
        value={value}
        placeholder='Add a new task'
        onChange={onChange}
        onKeyPress={handleKeyPress} 
        type='text' 
      />
      <FormButton onClick={onSubmit}>Add</FormButton> 
    </div>
  );
};

export default Form;
