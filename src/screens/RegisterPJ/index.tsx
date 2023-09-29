import * as S from "./styles";
import BaseLayout from "../../components/BaseLayout";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegistryPJData,
  registryPJSchema,
} from "../../validations/registryPJSchema";
import RegisterPJForm from "./components/RegisterPJForm";
import { RegistryPjScreenProps } from "./types";

const RegisterPJ = ({ navigation }: RegistryPjScreenProps) => {
  const { control, register, formState, handleSubmit } =
    useForm<RegistryPJData>({
      resolver: zodResolver(registryPJSchema),
    });

  const theme = useTheme();

  return (
    <BaseLayout
      style={{
        backgroundColor: theme.COLORS.GRAY100,
      }}
    >
      <S.HeaderContainer>
        <S.GoBackButton onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={24} color={theme.COLORS.BLUE500} />
        </S.GoBackButton>
        <S.Title>Cadastrar Pessoa Física</S.Title>
      </S.HeaderContainer>

      <RegisterPJForm
        control={control}
        formState={formState}
        handleSubmit={handleSubmit}
      />
    </BaseLayout>
  );
};

export default RegisterPJ;
