import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { NavBar } from "../../components/NavBar";
import { Portfolio } from "../../components/Portfolio";
import { Skills } from "../../components/Skills";
import { Top } from "../../components/Top";
import { Container, Wrapper } from "./styles";

export function Home() {
  return (
    <Container id="home">
      <header>
        <div className="position-one">
          <Top />

          <div className="wrapper">
            <NavBar
              idHome="#home"
              idAbout="#about"
              idContact="#contact"
              idPortfolio="#portfolio"
            />
          </div>

          <h1>
            Desenvolvendo soluções para <span>o amanhã</span>
          </h1>

          <div className="triangle"></div>
        </div>
      </header>

      <main>
        <Wrapper>
          <About />
        </Wrapper>

        <Skills />

        <Portfolio />

        <Contact />
      </main>

      <footer>
        <span>Copyright © 2022 Todos os direitos reservados</span>
      </footer>
    </Container>
  );
}
