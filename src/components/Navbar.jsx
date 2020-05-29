import React from "react";
import Styled from "styled-components";
import ColorPizza from "../Styles/Color";

const NavbarStyled = Styled.div`
   background-color:${ColorPizza};
   padding:20px;
   position:fixed:
   width:100px;
`;

const LogoStyled = Styled.div`
  color:white;
  font-size:20px;
`;

function Navbar() {
  return (
    <div>
      <NavbarStyled>
        {" "}
        <LogoStyled>
          {" "}
          <img src="./img/PZ_Pizza.png" alt="Logo 🍕" />{" "}
        </LogoStyled>{" "}
      </NavbarStyled>
    </div>
  );
}

export default Navbar;
