import { format } from 'path';
import React from 'react';
import './App-style.tsx';
import useForm from './components/Form/useForm'
import Input from './components/Input/input'
import Lista from './components/List/list';
import request from './components/Request/request';
import { Card, TituloBox, Titulo, Form, Button} from './App-style';


function App() {
  const cep = useForm();
  const [response, setResponse] = React.useState<any>([]);

  async function handleSubmit(event: any) {
    event.preventDefault();
    if (cep.validate()) {
      const data = await request.get(cep.value)
      setResponse(formatResponse(data));
      console.log(response);
    }
  }

  function formatResponse(response: {}){
    const asArray = Object.entries(response);
    const filtered = asArray.filter((key) => key[1] !== '' && key[0] !== 'cep');
    if(filtered[0][0] === 'erro'){
      filtered[0][0] = 'CEP não encontrado';
      filtered[0][1] = 'Certifique-se de que digitou corretamente';
    }
    //console.log(filtered);
    return filtered;
  }
  return (
    <Card>
      <TituloBox><Titulo>INFORMA CEP</Titulo></TituloBox>
      <Form onSubmit={handleSubmit}>
        <Input
          id="cep"
          type="text"
          placeholder="00000-000"
          {...cep} />
        <Button>CONSULTAR</Button>
      </Form>
      <Lista response={response}/>
    </Card>
  );
};

export default App;
