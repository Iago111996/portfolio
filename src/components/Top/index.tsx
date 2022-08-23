import { Container, Logos, Tel, Text, Wrapper } from "./styles";

import { AiFillPhone, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useTheme } from "styled-components";

export function Top() {
  const theme = useTheme();
  return (
    <Wrapper>
      <Container>
        <div>
          <a
            href="https://www.linkedin.com/in/iago-pinto-1b07aa208/"
            target="_black"
          >
            <Logos>
              <AiFillLinkedin size={24} />
            </Logos>
          </a>

          <a href="https://github.com/Iago111996" target="_black">
            <Logos>
              <AiFillGithub size={24} />
            </Logos>
          </a>
        </div>

        <div>
          <Logos>
            <AiFillPhone size={24} />
          </Logos>

          <Text>TELEFONE DE CONTATO</Text>
          
          <Tel>+34 624 147106 / +55 85 994164566</Tel>
        </div>
      </Container>
    </Wrapper>
  );
}
