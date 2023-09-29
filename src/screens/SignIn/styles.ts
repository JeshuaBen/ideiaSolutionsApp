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
    color: ${theme.COLORS.GRAY600};
    text-align: center;
    line-height: 20px;
    margin-top: 16px;
  `};
`;

export const Content = styled.View`
  flex: 1;
  gap: 24px;
  margin-top: 16px;
  align-items: center;
`;

export const Wrapper = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY600};
  gap: 4px;
  margin-top: 36px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    color: ${theme.COLORS.GRAY600};
    text-align: center;
  `};
`;

export const Button = styled.TouchableOpacity`
  border: 0;
  padding: 0;
`;
