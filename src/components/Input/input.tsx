import React from 'react';
import { Entrada, Error } from './input-style';

type props = {
  id: string;
  value: string;
  type: string;
  onChange: ({target}: any) => void;
  error: string | null;
  onBlur: () => void;
  placeholder: string;
}

const Input = ({
  id,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}: props) => {
  return (
    <>
      <Entrada
        autoComplete="off"
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      <Error>{error && <p>{error}</p>}</Error>
    </>
  );
};

export default Input;
