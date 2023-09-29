import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/stacks.routes";

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
