import React from 'react';
import './input.css';

interface InputProps {
  name: string;
  type: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength: number;
  className?: string; 
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  maxLength,
  className, 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= maxLength) {
      onChange(e);
    }
  };

  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`default-input-styles ${className}`} 
    />
  );
};

export default Input;
