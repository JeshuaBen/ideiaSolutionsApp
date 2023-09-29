import * as S from "./styles";
import { TRegisteredUserCard } from "./types";

const RegisteredUserCard = ({ data }: TRegisteredUserCard) => {
  console.log(data);

  return (
    <S.Container>
      <S.Title>{data.nome}</S.Title>
      <S.Separator />
      <S.Wrapper>
        <S.HighlightWord>Documento:</S.HighlightWord>
        <S.Value>{data.cpf}</S.Value>
      </S.Wrapper>
    </S.Container>
  );
};

export default RegisteredUserCard;
