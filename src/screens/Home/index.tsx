import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import BaseLayout from "../../components/BaseLayout";
import * as S from "./styles";
import Logo from "../../assets/ideialogo.png";
import Button from "../../components/Button";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

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

      <S.Content>
        <Button text="Cadastrar como PF">
          <Ionicons name="person" size={24} color={theme.COLORS.GOLD} />
        </Button>
        <Button text="Cadastrar como PJ">
          <FontAwesome name="building" size={24} color={theme.COLORS.GOLD} />
        </Button>

        <S.Wrapper>
          <S.Text>Já é cadastrado?</S.Text>
          <S.Button>
            <S.Text
              style={{
                color: theme.COLORS.GOLD,
              }}
            >
              Faça login
            </S.Text>
          </S.Button>
        </S.Wrapper>
      </S.Content>
    </BaseLayout>
  );
};

export default Home;
