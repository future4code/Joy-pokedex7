import React from "react";
import styled from "styled-components";
import logo from "../assents/Logo.png";

const Header = ({ buttonFunction, pageName }) => {


  const Header = styled.header`
      height: 18vh;
      background: linear-gradient(45deg, #0d30a8, #d7f9c1);
      display: flex;
      align-items: center;
      color: white;
      position: relative;
      h1 {
        margin-left: 38vw;
        
      }
      img {
        height: 15vh;
        width: 20vw;
      }
  `

  const Button = styled.button`
      margin: 0 10px 0 10px;
      background: #0d30a8;
      border-radius: 999px;
      box-shadow: #0d30a8 0 10px 20px -10px;
      box-sizing: border-box;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 8px 30px;
  
      
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
      <h1>{pageName}</h1>
      <img src={logo} alt="" />
      {/* <Button onClick={buttonFunction}>
        {ButtonText()}
      </Button> */}

    </Header>
  )
}

export default Header