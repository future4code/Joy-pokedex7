import React from "react";
import styled from "styled-components";
import logo from "../assents/Logo.png";

const Header = ({buttonFunction, pageName}) => {

 
  const Header = styled.header`
      height: 15vh;
      background-color:#ffc222;
      display: flex;
      align-items: center;
      color: white;
      position: relative;
      h1 {
        margin-left: 38vw;
        
      }
      img {
        height: 12vh;
        width: 13vw;
      }
  `
  
  const Button = styled.button`
      margin: 0 10px 0 10px;
      background: #bf0000;
      border-radius: 999px;
      box-shadow: #bf0000 0 10px 20px -10px;
      box-sizing: border-box;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 8px 30px;
  
      }
  `

  const ButtonText = () => {
    switch (pageName) {
      case "PokeLista":
        return "Pokédex";
      case "Pokédex":
        return "PokeLista";
      default:
        return "Voltar";
    }
  };

  return (
    <Header>
      <Button onClick={buttonFunction}>
        {ButtonText()}
      </Button>
      <h1>{pageName}</h1>
      <img src={logo} alt="" />
    </Header>
  )
}

export default Header