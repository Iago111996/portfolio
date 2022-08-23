import styled from "styled-components";

interface ContentProps {
  color: string;
}

export const Container = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div<ContentProps>`
  width: 80px;
  height: 80px;

  background-color: ${({ color }) => color};

  margin-bottom: .4rem;

  border-radius: 8px;
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.primary};
`;
