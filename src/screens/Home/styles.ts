import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header {
    min-height: 500px;
    background-image: url("./assets/image-background.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    margin: 0 auto;

    position: relative;

    text-align: center;

    .triangle {
      border-left: 500px solid ${({ theme }) => theme.colors.black};
      border-right: 800px solid ${({ theme }) => theme.colors.black};
      border-top: 200px solid transparent;
    }

    .wrapper {
      display: flex;
      flex-direction: center;
      align-items: center;
      justify-content: space-between;
    }

    .position-one {
      min-width: 100%;
      min-height: 80vh;

      background-color: rgba(210, 19, 19, 0.7);
    }

    h1 {
      font-family: "DynaPuff";
      font-size: 1.5rem;
      font-weight: 400;

      margin-top: 3rem;

      color: ${({ theme }) => theme.colors.shape};

      span {
        display: block;

        font-size: 80px;

        color: ${({ theme }) => theme.colors.shape};
      }
    }
  }

  main {

    
  }

  footer {
    width: 100%;

    background-color: ${({ theme }) => theme.colors.black};

    padding-top: 2rem;
    padding-bottom: 3rem;

    border-top: 1px solid ${({ theme }) => theme.colors.gray_line};

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-family: ${({ theme }) => theme.fonts.medium};
      font-size: 0.8rem;

      color: ${({ theme }) => theme.colors.shape};

      padding-top: 1rem;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.black};
`;
