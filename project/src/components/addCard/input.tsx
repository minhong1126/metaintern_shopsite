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
  width: 100%; // 필요에 따라 너비 조정
`;

interface InputProps {
  name: string;
  type: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  maxLength?: number; // 추가된 부분
}

const Input: React.FC<InputProps> = ({ name, type, value, onChange, placeholder, className, maxLength }) => {
  return (
    <StyledInput
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      maxLength={maxLength} // 추가된 부분
    />
  );
};

export default Input;
