import { ContainerP, FotosImg, ImgF } from "./Perfil.style";
// import DayN from "../img/dayPerfil.jpeg";
// import Cerejeira from "../img/laranjeira.png";
// import React from "react";

function Perfil() {
  return (
    <>
    <ContainerP>
      
        <FotosImg>
          <ImgF src="src/img/dayPerfil.jpeg" />
          <div className="perfil">
            <h1>Daiany Noronha</h1>
            <h3>Professora Polivalente</h3>
            <div>
              <h6>
                Uma pessoa curiosa, proativa, que ama o que faz e sempre aberta
                a novas dinâmicas e conhecimentos,
                <p>
                  Realizo acompanhamento na prática docente no Fundamental 1,
                  observando planejamentos de aulas,
                  <br /> avaliações de aprendizagem, processos de alfabetização,
                  estudos para provas, <br />
                  acompanhamento de aulas remotas e a identificação de crianças
                  com algum tipo de dificuldade. <br />
                  Desperto as primeiras noções e práticas higiênicas e convívio
                  em grupos.
                </p>
              </h6>
              <p>Aberta para novas oportunidades!</p>
              <p>
                
                <strong>bora bater um papo?</strong>
              </p>
            </div>
          </div>
        </FotosImg>
        
    </ContainerP>
    </>
  );
}

export default Perfil;
