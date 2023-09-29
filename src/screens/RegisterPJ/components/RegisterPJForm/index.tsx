import * as S from "./styles";
import { ControlRegisterPJ, TRegisterPJForm } from "./types";
import { Controller } from "react-hook-form";
import InputBox from "../../../../components/InputBox";
import Button from "../../../../components/Button";
import { useTheme } from "styled-components";

const RegisterPJForm = ({
  control,
  formState,
  handleSubmit,
}: TRegisterPJForm) => {
  const theme = useTheme();

  const onSubmitValues = (data: ControlRegisterPJ) => {};

  return (
    <>
      <S.Content showsVerticalScrollIndicator={false}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputBox
              label="Nome/Razão Social"
              fullWidth
              onChangeText={onChange}
              value={value}
              errors={formState.errors.nomeOuRazaoSocial?.message}
              onBlur={onBlur}
            />
          )}
          name="nomeOuRazaoSocial"
          defaultValue=""
        />

        <S.InputWrapper>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="CNPJ"
                onChangeText={onChange}
                value={value}
                errors={formState.errors.cnpj?.message}
                onBlur={onBlur}
              />
            )}
            name="cnpj"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="Inscrição Estadual"
                onChangeText={onChange}
                value={value}
                errors={formState.errors.inscricaoEstadual?.message}
                onBlur={onBlur}
              />
            )}
            name="inscricaoEstadual"
            defaultValue=""
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="CNAE"
                onChangeText={onChange}
                value={value}
                errors={formState.errors.cnae?.message}
                onBlur={onBlur}
              />
            )}
            name="cnae"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="Data de Abertura"
                onChangeText={onChange}
                value={value}
                errors={formState.errors.dataAbertura?.message}
                onBlur={onBlur}
              />
            )}
            name="dataAbertura"
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
        <S.InputWrapper>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="Endereço"
                onChangeText={onChange}
                variant1
                value={value}
                errors={formState.errors.endereco?.message}
                onBlur={onBlur}
              />
            )}
            name="endereco"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputBox
                label="Nº"
                onChangeText={onChange}
                variant2
                value={value}
                errors={formState.errors.numero?.message}
                onBlur={onBlur}
              />
            )}
            name="numero"
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

export default RegisterPJForm;
