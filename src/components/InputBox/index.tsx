import * as S from "./styles";
import { TInputBox } from "./types";

const InputBox = ({
  label,
  fullWidth = false,
  errors,
  variant1,
  variant2,
  ...rest
}: TInputBox) => {
  return (
    <S.Container
      style={{
        width: fullWidth ? "98%" : variant1 ? "75%" : variant2 ? "19%" : "47%",
      }}
    >
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />

      {errors?.length > 1 && <S.Error>{errors}</S.Error>}
    </S.Container>
  );
};

export default InputBox;
