import styled from "styled-components";

export const BlogG = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
padding: 40px;
border-bottom: 10px solid black;
@media only screen and (max-width: 950px) {
 flex-direction: column;
    align-items: center;
    padding: 20px;
}
h3, p {
    padding: 12px;
    display: block;
    @media only screen and (max-width: 950px) {
    padding-top: 20px;
    text-align: center;
    }
}
.fotoAB{
   padding-top: 80px;
@media only screen and (max-width: 950px) {
    padding-top: 10px;
}
}
`
export const FotoA = styled.div`
width: 350px;
height: 450px;
border-radius: 20%;
padding: 20px; 
@media only screen and (max-width: 550px) {
    width: 250px;
    height: 350px;
    
}

`
