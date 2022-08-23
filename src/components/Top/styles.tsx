import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 43%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const Container = styled.div`
  max-width: 1200px;
  height: 9rem;

  margin: 0 auto;

  padding-top: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Logos = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
  border: none;

  background-color: ${({ theme }) => theme.colors.shape};

  color: ${({ theme }) => theme.colors.primary};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Tel = styled.span`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 1.6rem;

  color: ${({ theme }) => theme.colors.shape};
`;

export const Text = styled.span`
  width: 90px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 0.8rem;

  line-height: 1.2rem;

  color: ${({ theme }) => theme.colors.shape};
`;
