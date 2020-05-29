import React from "react";
import Styled from "styled-components";

const PosterStyled = Styled.div`
  height: 200px;
  background-image: url(img/poster.png);
  background-position: center;
  background-size: cover;
  filter: contrast(75%);

`;

function Poster() {
  return <PosterStyled />;
}

export default Poster;
