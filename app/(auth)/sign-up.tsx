import { Link, router } from "expo-router";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    // TODO: Implement sign up logic
    setTimeout(() => {
        setIsSubmitting(false);
        router.replace("/(tabs)/home");
    }, 1000);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <View className="items-center mb-6">
            <LottieView
                source={require("../../assets/animations/welcome.json")}
                autoPlay
                loop
                style={{ width: 150, height: 150 }}
              />
            <Text className="text-3xl text-dark-100 font-quicksand-bold mt-4">
              Sign Up
            </Text>
             <Text className="text-base text-gray-100 font-quicksand-medium text-center mt-2">
              Create an account to start ordering
            </Text>
          </View>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
            placeholder="Enter your username"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Enter your email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Enter your password"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

           <View className="flex-row justify-center items-center mt-6 gap-2">
            <View className="h-[1px] bg-gray-200 flex-1" />
            <Text className="text-gray-100 font-quicksand-medium">Or continue with</Text>
            <View className="h-[1px] bg-gray-200 flex-1" />
          </View>

           <CustomButton
            title="Google"
            handlePress={() => {}}
            containerStyles="mt-6 bg-white border-2 border-gray-200"
            textStyles="text-dark-100"
            icon={<Ionicons name="logo-google" size={24} color="black" />}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-quicksand-medium">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-quicksand-bold text-primary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
