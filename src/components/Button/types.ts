import { ReactNode } from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

export type TButtonProps = TouchableOpacityProps & {
  children?: ReactNode;
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
