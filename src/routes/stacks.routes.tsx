import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
  Favorites: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};