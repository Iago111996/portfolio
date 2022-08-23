import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 4rem;

  display: flex;
  align-items: center;

  .Atendare-App {
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("./assets/atendare-app.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: 200px;
  }

  .Clubbi {
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("./assets/clubbi.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: 200px;
  }

  .Ola-mamae {
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("./assets/ola-mamae.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: 200px;
  }

  .Rentx {
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("./assets/rentx.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: 200px;
  }

  .IpFinance {
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("./assets/ipfinace.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: 200px;
  }

  .App-Noz {
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("./assets/appnoz.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: 400px;
  }
`;

export const Aside = styled.aside`
  width: 20%;
  height: 60vh;

  background-color: ${({ theme }) => theme.colors.secundary};

  padding: 3rem 2rem;

  h1 {
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 3rem;

    color: ${({ theme }) => theme.colors.shape};

    margin-bottom: 2rem;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.shape};

    line-height: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
`;
