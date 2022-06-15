import styled from 'styled-components';

export const Card = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  max-width: 600px;
  margin: 100px auto;
  border: 1px solid #f2f2f2;
  box-shadow: 2px 2px 2px #f2f2f2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TituloBox = styled.span`
  display: flex;
  height: 100px;
  align-items: center;
`;
export const Titulo = styled.h1`
    flex: 1;
    text-align: center;
    color: black;
    font-family: "Roboto", sans-serif;
`;
export const Form = styled.form`
  background: white;
  padding: 0px 35px 35px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.button`
  color: white;
  font-weight: bold;
  font-size: 1em;
  width: 384px;
  height: 45px;
  background: #000000;
  border-radius: 6px;
  border: 1px solid #000000;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: white;
    color: black;

  }
`;