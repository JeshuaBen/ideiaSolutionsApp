import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type TButtonProps = {
  children: ReactNode;
  text: string;
  style?: StyleProp<ViewStyle>;
};
