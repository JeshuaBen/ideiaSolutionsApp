import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type TRegisterPFForm = {
  control: Control<ControlRegisterPF, any>;
  formState: FormState<ControlRegisterPF>;
  handleSubmit: UseFormHandleSubmit<ControlRegisterPF, undefined>;
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
