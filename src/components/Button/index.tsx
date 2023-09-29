import * as S from "./styles";
import { TButtonProps } from "./types";

const Button: React.FC<TButtonProps> = ({
  children,
  text,
  style,
  textStyle,
  ...rest
}) => {
  return (
    <S.Container style={style} {...rest}>
      {children && <S.IconWrapper>{children}</S.IconWrapper>}
      <S.Text style={textStyle}>{text}</S.Text>
    </S.Container>
  );
};

export default Button;
