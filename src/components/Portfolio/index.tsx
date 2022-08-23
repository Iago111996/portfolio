import { Aside, Wrapper, Container } from "./styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../Card";

export function Portfolio() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container id="portfolio">
      <Aside>
        <h1>Portfólio</h1>

        <h2>CONHEÇA AS SOLUÇÕES CRIADAS E DESENVOLVIDAS PARA CLIENTES</h2>
      </Aside>

      <Wrapper>
        <Carousel responsive={responsive}>
          <div className="Atendare-App">
            <Card
              title="Atendare App"
              tecnology={["React-Native", "Expo", "Firebase"]}
              description="Aplicativo desenvolvido para uma empresa de CRM, pensado para ajudar a equipe de campo a fazer o acompanhamento de clientes."
            />
          </div>

          <div className="Clubbi">
            <Card
              title="Clubbi"
              tecnology={["Fullet"]}
              description="Esta aplicativo é esclusivo para motoristas, mostrava o que deveria ser recolhido e a rota de onde eria a entrega"
            />
          </div>

          <div className="Ola-mamae">
            <Card
              title="Olá Mamãe"
              tecnology={["React-Native", "Expo", "Firebase", "OAuth"]}
              description="Aplicativo desenvolvido para o acompanhamento da gravidez, além de marcar as datas importantes para a mamãe ele também entrega mensagens diárias com dicas e conteúdo para ajudar no decorrer do processo."
            />
          </div>

          <div className="Rentx">
            <Card
              title="RentX"
              tecnology={["React-Native", "Expo", "Async-Storage"]}
              description="A função desse aplicativo era o aluguel de carros, você podia escolher o seu aoutomóvel e as datas referentes para o seu aluguel"
            />
          </div>

          <div className="App-Noz">
            <Card
              title="App Noz"
              tecnology={["React"]}
              description="Uma página de login para capitação de dados"
            />
          </div>

          <div className="IpFinance">
            <Card
              title="IpFinance"
              tecnology={["React", "DotNet", "C#", "MySQL"]}
              description="Uma página para o controle de finanças."
            />
          </div>

          <Card
            title="Carpiteria Fehasen"
            tecnology={["React"]}
            description="Lading Page para apresentação do negócio da empresa e contatos"
          />
        </Carousel>
      </Wrapper>
    </Container>
  );
}
