import { Container, Description, Tecnology } from "./styles";

interface CardProps {
  link?: string;
  title: string;
  tecnology: string[];
  description: string;
}

export function Card({ link, title, tecnology, description }: CardProps) {
  return (
    <Container link={link}>
      <h1>{title}</h1>

      <div className="section-flex">
        {tecnology.map((tec) => {
          return (
            <Tecnology>
              <span>{tec}</span>
            </Tecnology>
          );
        })}
      </div>

      <Description>
        <span>{description}</span>
      </Description>
    </Container>
  );
}
