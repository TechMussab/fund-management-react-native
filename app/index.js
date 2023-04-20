import { StyleSheet, Text, View } from "react-native";
import BottomNavigation from "../components/common/bottomNav/BottomNavigation";

import screens from '../components/common/routes';





const App = () => {
  return <BottomNavigation screenList = {screens}/>;
  }
  
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
