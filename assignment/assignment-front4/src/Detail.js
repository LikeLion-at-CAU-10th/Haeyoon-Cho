import React from "react";
import styled from "styled-components";
import data from "./data/Thing.js";
import { useParams } from "react-router-dom";

const StyledDom = styled.div`
  display: flex;
  justify-content: center;
`;

const Detail = () => {
  const a = useParams();
  const id = parseInt(a.id); 
  const thing = data.products.filter((product) => product.id === id)[0];

  return (
    <>
      <StyledDom>
      </StyledDom>
    </>
  );
};

export default Detail;
