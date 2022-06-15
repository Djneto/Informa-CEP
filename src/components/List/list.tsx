import React from 'react';
import { Li, Ul } from './list-style';


const Lista = ({ response }: any) => {
  return(<Ul>{response.map((item: any, index: number) => 
    <Li 
    key={index}>
      {item[0].toUpperCase()}: {item[1].toUpperCase()}
      </Li>)}
  </Ul>);
}

export default Lista