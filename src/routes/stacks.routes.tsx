import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import RegisterPF from "../screens/RegisterPF";
import RegisterPJ from "../screens/RegisterPJ";
import Home from "../screens/Home";

export type RootStackParamList = {
  SignIn: undefined;
  RegisterPF: undefined;
  RegisterPJ: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="RegisterPF" component={RegisterPF} />
      <Screen name="RegisterPJ" component={RegisterPJ} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
