import { View, Text } from "react-native";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View accessible={true}>
      <Text
        accessibilityRole="header"
        accessibilityLabel="Sign in to your account"
      >
        SignIn
      </Text>
      <Link
        href="/(auth)/sign-up"
        accessibilityRole="link"
        accessibilityLabel="Create account, navigates to sign up"
      >
        Create Account
      </Link>
    </View>
  );
};

export default SignIn;
