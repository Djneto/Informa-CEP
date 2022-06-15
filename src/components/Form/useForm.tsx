import React from 'react';

const cep = {
  regex: /^[0-9]{5}-[0-9]{3}$/,
  message: 'Cep inválido!',
  infoRequest: 'Informe um CEP!'
}

const useForm = () => {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);
  
  function validate(value: string) {
    if (value.length === 0) {
      console.log(value);
      setError(cep.infoRequest);
      return false;
    } else if (!cep.regex.test(value) || value === '00000-000') {
      setError(cep.message);
      return false;
    } else {
      setError(null)
      return true;
    }
  }

  function onChange({target}: any) {
    if (error || error === cep.infoRequest){
      validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm