import { Container, Title } from "./styles";
import { SkillsLogo } from "../SkillsLogo";
import { useTheme } from "styled-components";

import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoSass,
} from "react-icons/io";

export function Skills() {
  const theme = useTheme();

  return (
    <Container>
      <Title>MINHAS SKILLS E POWER UP’S</Title>

      <div>
        <SkillsLogo color="#126AD0" title="HTML">
          <div>
            <IoLogoHtml5 size={56} color={theme.colors.shape} />
          </div>
        </SkillsLogo>

        <SkillsLogo color="#F57B0A" title="CSS">
          <div>
            <IoLogoCss3 size={56} color={theme.colors.shape} />
          </div>
        </SkillsLogo>

        <SkillsLogo color="#F53356" title="SASS">
          <div>
            <IoLogoSass size={56} color={theme.colors.shape} />
          </div>
        </SkillsLogo>

        <SkillsLogo color="#F5EC0A" title="Javascript">
          <div>
            <IoLogoJavascript size={56} color={theme.colors.shape} />
          </div>
        </SkillsLogo>

        <SkillsLogo color="#0f0f0f" title="React">
          <div>
            <img
              width={50}
              height={50}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="Logo do react."
            />
          </div>
        </SkillsLogo>

        <SkillsLogo color="#092B83" title="React-Native">
          <div>
            <img
              width={50}
              height={50}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="Logo do react."
            />
          </div>
        </SkillsLogo>

        <SkillsLogo color="#1A9BE4" title="Firebase">
          <div>
            <img
              width={60}
              height={60}
              src="./assets/fire.jpg"
              alt="Logo do firebase."
            />
          </div>
        </SkillsLogo>
      </div>
    </Container>
  );
}
