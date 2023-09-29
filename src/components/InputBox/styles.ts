import styled, { css } from "styled-components/native";

export const Container = styled.View`
  gap: 4px;
  margin-top: 5px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BLUE500};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  `};
`;

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE50};
  border-radius: 8px;
  padding: 6px 6px 6px 8px;
  width: 100%;
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    color: ${theme.COLORS.RED500};
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `};
`;
