import * as S from "./styles";
import BaseLayout from "../../components/BaseLayout";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegistryPFData,
  registryPfSchema,
} from "../../validations/registryPfSchema";
import RegisterPfForm from "./components/RegisterPfForm";
import { RegisterPFScreenProps } from "./types";

const RegisterPF = ({ navigation }: RegisterPFScreenProps) => {
  const { control, register, formState, handleSubmit } =
    useForm<RegistryPFData>({
      resolver: zodResolver(registryPfSchema),
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

      <RegisterPfForm
        control={control}
        formState={formState}
        handleSubmit={handleSubmit}
      />
    </BaseLayout>
  );
};

export default RegisterPF;
