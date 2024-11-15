import React from 'react';
import { RegisterFields,InputFields } from '../../validation/schema';

interface RadioButtonProps {
  label: string;
  name: InputFields;
  value: string;
  register:  RegisterFields;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, register }) => (
  <label>
    <input type="radio" value={value} {...register(name)} />
    {label}
  </label>
);

export default RadioButton;
