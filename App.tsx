import UserList from "./views/userList/userList";
import { StoreProvider } from "./redux/Provider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserDetail from "./views/userDetail/userDetail";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={UserList} />
          <Stack.Screen name="Detail" component={UserDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
