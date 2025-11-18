import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }
        setIsSubmitting(true);
        // TODO: Implement sign in logic
        setTimeout(() => {
            setIsSubmitting(false);
            router.replace("/(tabs)/home");
        }, 1000);
    };

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView>
                <View className="w-full flex justify-center min-h-[85vh] px-4 my-6">
                    <View className="items-center mb-6">
                        <LottieView
                            source={require("../../assets/animations/welcome.json")}
                            autoPlay
                            loop
                            style={{ width: 200, height: 200 }}
                        />
                        <Text className="mt-4 text-3xl text-dark-100 font-quicksand-bold">
                            Welcome Back!
                        </Text>
                        <Text className="mt-2 text-base text-center text-gray-100 font-quicksand-medium">
                            Sign in to continue your delicious journey
                        </Text>
                    </View>

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
                        title="Sign In"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="flex-row items-center justify-center gap-2 mt-6">
                        <View className="h-[1px] bg-gray-200 flex-1" />
                        <Text className="text-gray-100 font-quicksand-medium">
                            Or continue with
                        </Text>
                        <View className="h-[1px] bg-gray-200 flex-1" />
                    </View>

                    <CustomButton
                        title="Google"
                        handlePress={() => {}}
                        containerStyles="mt-6 bg-white border-2 border-gray-200"
                        textStyles="text-dark-100"
                        icon={<Ionicons name="logo-google" size={24} color="black" />}
                    />

                    <View className="flex-row justify-center gap-2 pt-5">
                        <Text className="text-lg text-gray-100 font-quicksand-medium">
                            Don't have account?
                        </Text>
                        <Link href="/sign-up" className="text-lg font-quicksand-bold text-primary">
                            Sign Up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
