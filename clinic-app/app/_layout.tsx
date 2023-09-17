import { Children } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

const Layout = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return <View style={styles as StyleProp<ViewStyle>}></View>;
};

export default Layout;
