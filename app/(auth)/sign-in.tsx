import { Link, Redirect, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const isAuthenticated = true;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }
        setIsSubmitting(true);
        // TODO: Implement sign in logic
        setTimeout(() => {
            setIsSubmitting(false);
            router.replace("/(tabs)");
        }, 1000);
    };

    if (isAuthenticated) {
        return <Redirect href={"/"} />;
    }

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="w-full flex justify-center min-h-[85vh] px-6 my-6">
                    <View className="items-center mb-10">
                        <Image
                            source={require("../../assets/images/auth-login.png")}
                            resizeMode="contain"
                            className="w-[280px] h-[280px]"
                        />
                    </View>

                    <View className="mb-8">
                        <Text className="mb-2 text-3xl text-navy font-quicksand-bold">Login</Text>
                        <Text className="text-base text-gray-100 font-quicksand-medium">
                            Please Sign in to continue.
                        </Text>
                    </View>

                    <FormField
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mb-4"
                        keyboardType="email-address"
                        placeholder="Username"
                        icon="person-outline"
                    />

                    <FormField
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mb-4"
                        placeholder="Password"
                        icon="lock-closed-outline"
                        isPassword
                    />

                    <View className="flex-row items-center justify-between mb-8">
                        <Text className="text-sm text-navy font-quicksand-medium">
                            Reminder me nexttime
                        </Text>
                        <Switch
                            trackColor={{ false: "#E5E7EB", true: "#131e31" }}
                            thumbColor={rememberMe ? "#ffffff" : "#f4f3f4"}
                            ios_backgroundColor="#E5E7EB"
                            onValueChange={() => setRememberMe(!rememberMe)}
                            value={rememberMe}
                        />
                    </View>

                    <CustomButton
                        title="Sign In"
                        handlePress={submit}
                        containerStyles="mb-6"
                        isLoading={isSubmitting}
                    />

                    <View className="flex-row justify-center gap-1">
                        <Text className="text-base text-gray-100 font-quicksand-medium">
                            Don't have account?
                        </Text>
                        <Link href="/sign-up" className="text-base font-quicksand-bold text-navy">
                            Sign Up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
