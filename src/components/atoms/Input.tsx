import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

// const Input: React.FC<InputProps> = ({ label, type = 'text', error, ...props }) => (
//     <div>
//       <label>{label}</label>
//       <input type={type} {...props} />
//       {error && <p style={{ color: 'red' }}>{error.message}</p>}
//     </div>
//   );

// FIX stupid bug from React Hook Form by allowing refs to be passed to the input element!
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => (
    <div>
      <label>{label}</label>
      <input ref={ref} {...props} />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  )
);

export default Input;
