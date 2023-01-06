import styled from "styled-components";

export const FotosImg = styled.div`
    margin: 5px;
    padding-top: 40px;
    width: 100%;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
     @media only screen and (max-width: 750px) {
   display:block;
  }
  .perfil {
    margin: 0px;
    padding: 0px;
       /* background-color: rgb(0,0,0);*/
  background-color: rgba(0,0,0, 0.1); 
  border-radius: 5%;
  }
`
export const ImgF = styled.img`
width: 250px;
height: 250px;
border: 3px solid green; 
border-radius: 50%;
margin: 20px;
`
export const ContainerP = styled.div`
display: flex;
padding: 40px;
border-bottom: 10px solid black;

/* border-bottom: 50px solid green; */
@media only screen and (max-width: 445px) {
   padding-top: 50px;
  }

`
