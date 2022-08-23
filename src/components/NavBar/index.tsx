import { Container } from "./styles";

interface NavBarProps {
  idHome: string;
  idAbout: string;
  idContact: string;
  idPortfolio: string
}

export function NavBar({ idHome, idAbout, idContact, idPortfolio }: NavBarProps) {
  return (
    <Container>
      <ul>
        <li>
          <a href={idHome}>Home</a>
        </li>
        <li>
          <a href={idAbout}>Quem sou</a>
        </li>
        <li>
          <img src="./assets/logo.png" alt="Logo da página." />
        </li>
        <li>
          <a href={idPortfolio}>Portifólio</a>
        </li>
        <li>
          <a href={idContact}>Fale comigo</a>
        </li>
      </ul>
    </Container>
  );
}
