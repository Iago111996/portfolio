import {
  Bar,
  Container,
  Left,
  Rigth,
  Title,
  Wrapper,
  WrapperContainer,
} from "./styles";

import { AiFillPhone, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

import emailjs from "@emailjs/browser";

export function Contact() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gudk5xw",
        "template_uquxhud",
        e.target as HTMLFormElement,
        "3ix9Cb9LkvBG8I00H"
      )
      .then((res) => {
        alert("El email fue enviado!");
        // @ts-ignore: Unreachable code error
        e.target[0].value = "";
        // @ts-ignore: Unreachable code error
        e.target[1].value = "";
        // @ts-ignore: Unreachable code error
        e.target[2].value = "";
        // @ts-ignore: Unreachable code error
        e.target[3].value = "";
      })
      .catch((error) => alert("su email no pudo ser enviado!"));
  }

  return (
    <WrapperContainer id="contact">
      <Container>
        <Title>Fale comigo</Title>
        <Bar />

        <Wrapper>
          <Left>
            <h1>Rua Teixeira Lopes, 1039, 4460-834 Custóias, Porto, Putugal</h1>

            <h2>
              <AiFillPhone size={16} style={{ marginRight: 8 }} />
              +34 631 89 16 04
            </h2>
            <h2>
              <IoMdMail size={16} style={{ marginRight: 8 }} />{" "}
              iago111996@gmail.com
            </h2>
            <a
              href="https://www.linkedin.com/in/iago-pinto-1b07aa208/"
              target="_black"
            >
              <AiFillLinkedin size={16} style={{ marginRight: 8 }} /> Linkedin
            </a>
            <a href="https://github.com/Iago111996" target="_black">
              <AiFillGithub size={16} style={{ marginRight: 8 }} /> Github
            </a>
          </Left>

          <Rigth>
            <form onSubmit={(e) => sendEmail(e)}>
              <div className="section-flex">
                <input type="text" placeholder="Nome" name="user_name" required />
                <input type="email" placeholder="Email" name="user_email" required />
              </div>

              <div className="section-flex">
                <textarea
                  className="mesage"
                  placeholder="Escreva sua mensgem aqui!"
                  name="user_message"
                  required
                />
              </div>

              <button>Enviar Email</button>
            </form>
          </Rigth>
        </Wrapper>
      </Container>
    </WrapperContainer>
  );
}
