import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GoBackButton = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE500};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Title = styled.Text`
  text-align: center;
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLUE500};
  `};
`;
