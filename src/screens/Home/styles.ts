import styled, { css } from "styled-components/native";

export const HeaderWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
`;

export const LogoImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XLG}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.WHITE};
    text-align: center;
    line-height: 30px;
    margin-top: 48px;
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    color: ${theme.COLORS.GRAY500};
    text-align: center;
    line-height: 20px;
    margin-top: 16px;
  `};
`;
