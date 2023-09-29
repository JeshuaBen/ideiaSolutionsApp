import { useMemo } from "react";
import * as S from "./styles";
import { TButtonProps } from "./types";

const Button: React.FC<TButtonProps> = ({ children, text, style, ...rest }) => {
  return (
    <S.Container style={style} {...rest}>
      <S.IconWrapper>{children}</S.IconWrapper>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Button;
