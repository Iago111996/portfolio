import { ReactNode } from "react";
import { Container, Content, Title } from "./styled";

interface SkillsLogoProps {
  title: string;
  color: string;
  children: ReactNode;
}

export function SkillsLogo({ title, color, children }: SkillsLogoProps) {
  return (
    <Container>
      <Content color={color}>{children}</Content>

      <Title>{title}</Title>
    </Container>
  );
}
