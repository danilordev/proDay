import styled from "styled-components"

export const Faixa = styled.img`
width: 100%;
height: 50%;
border-bottom: 10px solid black;
@media only screen and (max-width: 640px) {
   height: 200px;
  }
  @media only screen and (max-width: 450px) {
   display:none;
  }
`