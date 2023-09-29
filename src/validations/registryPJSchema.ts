import { z } from "zod";
import { validateCNPJ } from "../utils/validateCNPJ";

export const registryPJSchema = z.object({
  nomeOuRazaoSocial: z.string().min(3, "Nome é obrigatório"),
  cnpj: z.string().refine((cnpj) => validateCNPJ(cnpj), {
    message: "CNPJ inválido",
  }),
  email: z.string().email("Email é  obrigatório"),
  telefone: z.string().min(10, "Telefone é  obrigatório"),
  inscricaoEstadual: z.string(),
  endereco: z.string().min(3, "Endereço é  obrigatório"),
  numero: z.string().min(1, "Obrigatório"),
  cnae: z.string().min(3, "CNAE é  obrigatório"),
  dataAbertura: z.string().min(8, "Data é obrigatária"),
});
export type RegistryPJData = z.infer<typeof registryPJSchema>;
