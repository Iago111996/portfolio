import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;

  margin: 0 auto;

  padding: 6rem 0;
  padding-bottom: 10rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperContainer = styled.div`
  width: 100%;
`;

export const Left = styled.div`
  width: 35%;

  h1 {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 18px;

    color: ${({ theme }) => theme.colors.secundary};

    text-transform: uppercase;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;

    color: ${({ theme }) => theme.colors.shape};

    padding: 1.5rem 0;

    span {
      font-family: ${({ theme }) => theme.fonts.medium};
      font-size: 24px;

      color: ${({ theme }) => theme.colors.secundary};
    }
  }

  section {
    text-align: right;
  }
`;

export const WrapperImg = styled.div`
  width: 170px;
  height: 170px;

  background-color: ${({ theme }) => theme.colors.gray_line};

  padding: .1rem;

  border-radius: 50%;
  border-bottom: solid 6px ${({ theme }) => theme.colors.secundary};
  border-top: solid 6px ${({ theme }) => theme.colors.secundary};
  border-left: solid 6px ${({ theme }) => theme.colors.title};
  border-right: solid 6px ${({ theme }) => theme.colors.title};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;

    object-fit: cover;

    border: solid 1px ${({ theme }) => theme.colors.title};
  }
`;

export const Center = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Rigth = styled.div`
  width: 35%;

  h1 {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;

    color: ${({ theme }) => theme.colors.shape};

    line-height: 1.2rem;

    span {
      font-family: ${({ theme }) => theme.fonts.bold};
      font-size: 24px;

      color: ${({ theme }) => theme.colors.secundary};
    }
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 2rem;

  color: ${({ theme }) => theme.colors.primary};

  padding: 1.5rem 0;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

export const Text = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors.primary};

  text-align: left;
`;
