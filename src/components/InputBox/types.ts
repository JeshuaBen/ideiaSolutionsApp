import { TextInputProps } from "react-native";

export type TInputBox = TextInputProps & {
  fullWidth?: boolean;
  label: string;
  errors: string;
  variant1?: boolean;
  variant2?: boolean;
};
