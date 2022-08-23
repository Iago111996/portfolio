import styled from "styled-components";

interface Props {
  link?: string;
}

export const Container = styled.div<Props>`
  height: 60vh;

  padding: 2rem;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  h1 {
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 1.4rem;

    color: ${({ theme }) => theme.colors.shape};

    margin-bottom: 1.5rem;
  }

  .section-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
  }
`;

export const Tecnology = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};

  margin-bottom: 2rem;

  padding: 0.5rem;

  border-radius: 6px;

  span {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.8rem;

    color: ${({ theme }) => theme.colors.shape};
  }
`;

export const Description = styled.div`
  padding: 1rem;

  border-radius: 6px;
  border: solid 1px ${({ theme }) => theme.colors.gray_line};

  span {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.8rem;

    color: ${({ theme }) => theme.colors.shape};
  }
`;
