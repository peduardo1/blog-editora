import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainContainer className="App">
        <h1>Bem vindo ao <br />Blog de Notícias!</h1>
    </MainContainer>
  );
}

export default Header;

//MAIN CONTAINER
const MainContainer = styled.header `
    background: url(../../images/header-bg.jpg) no-repeat center/cover;
    height:15rem;

    h1{
      transform: translate(-50%, -50%);
      color: #fff;
      font-weight: 900;
      position: absolute;
      top: 25%;
      left: 50%;
    }
`;