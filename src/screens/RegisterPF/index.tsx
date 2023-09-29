import * as S from "./styles";
import BaseLayout from "../../components/BaseLayout";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components";

const RegisterPF = () => {
  const theme = useTheme();

  return (
    <BaseLayout
      style={{
        backgroundColor: theme.COLORS.GRAY100,
      }}
    >
      <S.HeaderContainer>
        <S.GoBackButton>
          <Entypo name="chevron-left" size={24} color="black" />
        </S.GoBackButton>
        <S.Title>Cadastrar Pessoa Física</S.Title>
      </S.HeaderContainer>
    </BaseLayout>
  );
};

export default RegisterPF;
