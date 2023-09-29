import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { RootStackParamList } from "../../../../routes/stacks.routes";

export type TRegisterPFForm = {
  control: Control<ControlRegisterPF, any>;
  formState: FormState<ControlRegisterPF>;
  handleSubmit: UseFormHandleSubmit<ControlRegisterPF, undefined>;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "RegisterPF",
    undefined
  >;
};

export type ControlRegisterPF = {
  nome?: string;
  cpf?: string;
  dataNascimento?: string;
  email?: string;
  telefone?: string;
  endereco?: string;
  numero?: string;
};
