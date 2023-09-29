import { Control, FormState, UseFormHandleSubmit } from "react-hook-form";

export type TRegisterPJForm = {
  control: Control<ControlRegisterPJ, any>;
  formState: FormState<ControlRegisterPJ>;
  handleSubmit: UseFormHandleSubmit<ControlRegisterPJ, undefined>;
};

export type ControlRegisterPJ = {
  nomeOuRazaoSocial?: string;
  cnpj?: string;
  email?: string;
  telefone?: string;
  inscricaoEstadual?: string;
  endereco?: string;
  numero?: string;
  cnae?: string;
  dataAbertura?: string;
};
