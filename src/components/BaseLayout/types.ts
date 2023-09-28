import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native/types";

export type TBaseLayout = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};
