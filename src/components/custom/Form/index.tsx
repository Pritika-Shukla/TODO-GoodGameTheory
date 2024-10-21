import React from 'react';
import FormInput from '../../base/FormInput';
import FormButton from '../../base/FormButton';

type FormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const Form: React.FC<FormProps> = ({ 
  value, 
  onChange, 
  onSubmit, 
}) => {
  return (
    <div className="flex my-5">
      <FormInput 
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <FormButton onClick={onSubmit} />
    </div>
  );
};

export default Form;