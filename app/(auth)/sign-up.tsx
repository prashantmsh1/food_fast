import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        mobile: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const submit = async () => {
        if (!form.username || !form.mobile || !form.password) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }
        setIsSubmitting(true);
        // TODO: Implement sign up logic
        setTimeout(() => {
            setIsSubmitting(false);
            router.replace("/(tabs)");
        }, 1000);
    };

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="w-full flex justify-center min-h-[85vh] px-6 my-6">
                    <View className="items-center mb-10">
                        <Image
                            source={require("../../assets/images/auth-register.png")}
                            resizeMode="contain"
                            className="w-[280px] h-[280px]"
                        />
                    </View>

                    <View className="mb-8">
                        <Text className="mb-2 text-3xl text-navy font-quicksand-bold">
                            Register
                        </Text>
                        <Text className="text-base text-gray-100 font-quicksand-medium">
                            Please register to login.
                        </Text>
                    </View>

                    <FormField
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mb-4"
                        placeholder="Username"
                        icon="person-outline"
                    />

                    <FormField
                        value={form.mobile}
                        handleChangeText={(e) => setForm({ ...form, mobile: e })}
                        otherStyles="mb-4"
                        keyboardType="phone-pad"
                        placeholder="Mobile Number"
                        icon="call-outline"
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
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="mb-6"
                        isLoading={isSubmitting}
                    />

                    <View className="flex-row justify-center gap-1">
                        <Text className="text-base text-gray-100 font-quicksand-medium">
                            Already have account?
                        </Text>
                        <Link href="/sign-in" className="text-base font-quicksand-bold text-navy">
                            Sign In
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
