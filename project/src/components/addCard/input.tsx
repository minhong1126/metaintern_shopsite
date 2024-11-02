import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #ECEBF1;
  height: 45px;
  border-radius: 7px;
  justify-content: center;
  text-align: center;
  margin-bottom: 19px;
  margin-top: 3px;
`;

interface InputProps {
  name: string;
  type: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  maxLength: number;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  maxLength,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= maxLength) {
      onChange(e);
    }
  };

  return (
    <StyledInput
      name={name}
      type={type}
      value={value}
      onChange={handleChange} 
      placeholder={placeholder}
      maxLength={maxLength} 
    />
  );
};

export default Input;
