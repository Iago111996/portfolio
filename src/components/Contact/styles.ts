import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 100%;

  margin-top: 8rem;

  background-color: ${({ theme }) => theme.colors.black};

  border-top: 8px solid ${({ theme }) => theme.colors.secundary};
`;

export const Container = styled.section`
  max-width: 1200px;

  padding-bottom: 2rem;
  padding-top: 3rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .section-flex {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .mesage {
      width: 100%;

      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    input {
      width: 48%;
      height: 40px;

      padding: 1rem;

      border-radius: 16px;
      border: 1px solid ${({ theme }) => theme.colors.gray_line};

      outline: none;

      font-family: ${({ theme }) => theme.fonts.regular};
      font-size: 1.2rem;

      color: ${({ theme }) => theme.colors.text};
    }

    textarea {
      width: 100%;
      height: 150px;

      padding: 1rem;

      border-radius: 16px;
      border: 1px solid ${({ theme }) => theme.colors.gray_line};

      outline: none;

      font-family: ${({ theme }) => theme.fonts.regular};
      font-size: 1.2rem;

      color: ${({ theme }) => theme.colors.text};
    }

    button {
      width: 30%;
      height: 40px;

      background-color: ${({ theme }) => theme.colors.secundary};

      border: none;
      border-radius: 16px;

      font-family: ${({ theme }) => theme.fonts.bold};
      font-size: 1.2rem;

      color: ${({ theme }) => theme.colors.shape};

      cursor: pointer;
    }
  }
`;

export const Bar = styled.div`
  width: 60px;
  height: 0.2rem;

  background-color: ${({ theme }) => theme.colors.secundary};

  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 3rem;

  color: ${({ theme }) => theme.colors.shape};

  padding: 2rem 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Left = styled.div`
  width: 30%;

  padding-right: .5rem;

  text-align: left;

  h1 {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.shape};

    padding-bottom: 1.5rem;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.shape};

    padding: 0.5rem 0;

    display: flex;
    align-items: center;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.shape};

    padding: 0.5rem 0;

    display: flex;
    flex-direction: center;
    align-items: center;
    text-decoration: none;
  }
`;

export const Rigth = styled.div`
  width: 70%;

  text-align: right;

  img {
    width: 90%;
    height: 300px;

    object-fit: cover;
  }
`;
