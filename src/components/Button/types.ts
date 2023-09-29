import { ReactNode } from "react";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type TButtonProps = TouchableOpacityProps & {
  children: ReactNode;
  text: string;
  style?: StyleProp<ViewStyle>;
};
