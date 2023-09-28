import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import BaseLayout from "../../components/BaseLayout";
import * as S from "./styles";
import Logo from "../../assets/ideialogo.png";

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <BaseLayout
      style={{
        backgroundColor: theme.COLORS.BLUE500,
      }}
    >
      <StatusBar hidden />
      <S.HeaderWrapper>
        <S.LogoImage source={Logo} />
        <S.Title>OLÁ USUÁRIO! 👋</S.Title>
        <S.Description>
          Por favor selecione a sua categoria e faça seu cadastro.
        </S.Description>
      </S.HeaderWrapper>
    </BaseLayout>
  );
};

export default Home;
