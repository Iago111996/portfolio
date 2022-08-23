import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    li a {
      font-family: ${({ theme }) => theme.fonts.medium};
      font-size: 1.8rem;

      color: ${({ theme }) => theme.colors.shape};

      text-decoration: none;
      transition: all .7s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;
