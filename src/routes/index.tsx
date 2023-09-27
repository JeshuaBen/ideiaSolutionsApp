import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stacks.routes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
