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
  className,
  maxLength,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Check the length against maxLength
    if (inputValue.length <= maxLength) {
      onChange(e);
    }
  };

  return (
    <StyledInput
      name={name}
      type={type}
      value={value}
      onChange={handleChange} // Use the new handleChange
      placeholder={placeholder}
      className={className}
      maxLength={maxLength} // Still useful for browser validation
    />
  );
};

export default Input;
