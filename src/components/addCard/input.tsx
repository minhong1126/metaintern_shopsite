import React from 'react';
import './input.css';

// input.tsx
// 카드 정보 입력 시의 input 태그입니다.
// 이름, 종류, 값, 입력 최대 길이, 가로 길이, 변경 시 함수를 prop로 받습니다.
// 값이 입력되었을 때 변수 타입, 최대 길이를 확인해 오류를 사전 방지합니다.
// 가로 넓이가 각각 달라 classname으로 조절하기에는 무리가 있어 공통적인 css 속성들은 input.css로 담아 관리하고 가로 넓이만 classname으로 지정했습니다.

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
