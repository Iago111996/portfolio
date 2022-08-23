import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: -6rem;

  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 1.2rem;

  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 2rem;
`;
