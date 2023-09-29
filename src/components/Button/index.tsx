import { useMemo } from "react";
import * as S from "./styles";
import { TButtonProps } from "./types";

const Button: React.FC<TButtonProps> = ({ children, text, style }) => {
  return (
    <S.Container style={style}>
      <S.IconWrapper>{children}</S.IconWrapper>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Button;
