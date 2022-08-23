import {
  WrapperContainer,
  Container,
  Left,
  Center,
  Rigth,
  WrapperImg,
} from "./styles";

export function About() {
  return (
    <WrapperContainer id="about">
      <Container>
        <Left>
          <h1>Citação</h1>

          <h2>
            <span>"</span>
            Existem duas maneiras de construir um projeto de software. Uma é
            fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo
            tão complicado que não existem falhas óbvias. <span>"</span>
          </h2>

          <section>
            <h1>- C.A.R. HOAR</h1>
          </section>

          <h1>OCUPAÇÕES ATUAIS</h1>

          <h2>Desenvolvendor Front end - Mobile</h2>
        </Left>

        <Center>
          <WrapperImg>
            <img src="./assets/iago.jpg" alt="imagm de perfil." />
          </WrapperImg>
        </Center>

        <Rigth>
          <h1>
            <span>Olá,</span> <br /> <br />
            Sou Iago Pinto, Desenvolvendor, entusiasta em UX. Com aprofundamento
            na área de front end e mobile, com quase 3 anos de experiência,
            possuo experiência de trabalho com git em equipes multidisciplinares
            e vários cursos voltados para essa função.
            <br />
            <br />
            Trabalho com desenvolvimento React e React-Native, mais a frennte
            mostro algunsprojetos que tive a oportunidade de trabalhar no
            decorrer desse tempo.
          </h1>
        </Rigth>
      </Container>
    </WrapperContainer>
  );
}
