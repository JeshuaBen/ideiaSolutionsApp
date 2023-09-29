import { z } from "zod";
import { validateCPF } from "../utils/validateCPF";

export const registryPfSchema = z.object({
  nome: z.string().min(3, "Nome é obrigatório"),
  cpf: z.string().refine((cpf) => validateCPF(cpf), {
    message: "CPF inválido",
  }),
  dataNascimento: z.string().min(8, "Data inválida"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  endereco: z.string().min(3, "Endereço inválido"),
  numero: z.string().min(1, "NÚmero inválido"),
});

export type RegistryPFData = z.infer<typeof registryPfSchema>;
