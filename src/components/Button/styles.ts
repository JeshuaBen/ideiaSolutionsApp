import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 8px;
  padding: 16px 10px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY100};
`;

export const IconWrapper = styled.View`
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.BLUE500};
  align-items: center;
  justify-content: center;
  padding: 0px 16px 0px 4px;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLUE500};
  `}
`;
