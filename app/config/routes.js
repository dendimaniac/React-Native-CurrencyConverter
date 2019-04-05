import { StatusBar } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";
import Options from "../screens/Options";
import Themes from "../screens/Themes";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: "Options"
      }
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: "Themes"
      }
    }
  },
  {
    headerMode: "screen"
  }
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeStack
    },
    CurrencyList: {
      screen: CurrencyListStack
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    // cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
