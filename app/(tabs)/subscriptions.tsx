import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subscriptions = () => {
  return (
    <View
      style={styles.container}
      testID="subscriptions-screen"
      accessible={true}
      accessibilityRole="header"
      accessibilityLabel="Subscriptions screen"
    >
      <Text
        style={styles.title}
        testID="subscriptions-title"
        accessibilityRole="text"
      >
        subscriptions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Subscriptions;
