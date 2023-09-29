import { Alert, Platform } from "react-native";
import * as S from "./styles";
import { ControlRegisterPF, TRegisterPFForm } from "./types";
import { Controller } from "react-hook-form";
import InputBox from "../../../../components/InputBox";
import Button from "../../../../components/Button";
import { useTheme } from "styled-components";
import { registerPF } from "../../../../storage/registryPF/registerPF";
import { useNavigation } from "@react-navigation/native";
import { RegistryPjScreenProps } from "../../../RegisterPJ/types";

const RegisterPfForm = ({
  control,
  formState,
  handleSubmit,
}: TRegisterPFForm) => {
  const navigation = useNavigation<RegistryPjScreenProps>();

  const theme = useTheme();

  const onSubmitValues = async (data: ControlRegisterPF) => {
    try {
      await registerPF(data);
      navigation.navigation.navigate("Home");
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <>
      <S.Content showsVerticalScrollIndicator={false}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputBox
              label="Nome"
              fullWidth
              onChangeText={onChange}
              value={value}
              errors={formState.errors.nome?.message}
              onBlur={onBlur}
            />
          )}
          name="nome"
          defaultValue=""
        />

        <S.InputWrapper>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="CPF"
                onChangeText={onChange}
                value={value}
                errors={formState.errors.cpf?.message}
                onBlur={onBlur}
              />
            )}
            name="cpf"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="Data de Nascimento"
                onChangeText={onChange}
                value={value}
                errors={formState.errors.dataNascimento?.message}
                onBlur={onBlur}
              />
            )}
            name="dataNascimento"
            defaultValue=""
          />
        </S.InputWrapper>

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputBox
              label="Email"
              onChangeText={onChange}
              fullWidth
              value={value}
              errors={formState.errors.email?.message}
              onBlur={onBlur}
            />
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputBox
              label="Endereço"
              onChangeText={onChange}
              fullWidth
              value={value}
              errors={formState.errors.endereco?.message}
              onBlur={onBlur}
            />
          )}
          name="endereco"
          defaultValue=""
        />

        <S.InputWrapper>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="Número"
                onChangeText={onChange}
                value={value}
                errors={formState.errors.numero?.message}
                onBlur={onBlur}
              />
            )}
            name="numero"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="Telefone"
                onChangeText={onChange}
                value={value}
                errors={formState.errors.telefone?.message}
                onBlur={onBlur}
              />
            )}
            name="telefone"
            defaultValue=""
          />
        </S.InputWrapper>

        <Button
          text="CADASTRAR"
          style={{
            backgroundColor: theme.COLORS.BLUE500,
            width: "100%",
            marginTop: formState.errors ? 60 : 90,
          }}
          textStyle={{
            color: theme.COLORS.WHITE,
            fontFamily: theme.FONT_FAMILY.SEMI_BOLD,
          }}
          onPress={handleSubmit(onSubmitValues)}
        />
      </S.Content>
    </>
  );
};

export default RegisterPfForm;
