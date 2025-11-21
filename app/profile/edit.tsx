import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = () => {
    const [name, setName] = useState("Pooja Kedia");
    const [phone, setPhone] = useState("+91(322) 344 58 34");
    const [address, setAddress] = useState("76, Muntpura scheme Jaipur");

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Header Image */}
                <View className="relative w-full h-64 mb-20">
                    <Image
                        source={require("../../assets/images/food/burger-cheese.png")}
                        className="w-full h-full bg-gray-900"
                        resizeMode="cover"
                    />

                    {/* Profile Photo Overlay */}
                    <View className="absolute bottom-0 transform translate-y-1/2 left-6">
                        <View className="relative">
                            <Image
                                source={require("../../assets/images/user-avatar.png")}
                                className="border-4 border-white rounded-full w-28 h-28"
                                resizeMode="cover"
                            />
                            {/* Camera Icon */}
                            <View className="absolute bottom-0 right-0 items-center justify-center rounded-full w-9 h-9 bg-primary-red">
                                <Ionicons name="camera" size={18} color="#fff" />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Form Fields */}
                <View className="px-6">
                    {/* Name Input */}
                    <View className="mb-4">
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            className="w-full px-5 py-4 text-base border border-gray-200 font-quicksand-medium text-navy rounded-2xl"
                            placeholder="Name"
                        />
                    </View>

                    {/* Phone Input */}
                    <View className="mb-4">
                        <TextInput
                            value={phone}
                            onChangeText={setPhone}
                            className="w-full px-5 py-4 text-base border border-gray-200 font-quicksand-medium text-navy rounded-2xl"
                            placeholder="Phone Number"
                            keyboardType="phone-pad"
                        />
                    </View>

                    {/* Address Input */}
                    <View className="mb-8">
                        <TextInput
                            value={address}
                            onChangeText={setAddress}
                            className="w-full px-5 py-4 text-base border border-gray-200 font-quicksand-medium text-navy rounded-2xl"
                            placeholder="Address"
                        />
                    </View>

                    {/* Save Button */}
                    <TouchableOpacity
                        onPress={() => {
                            // Save logic here
                            router.back();
                        }}
                        className="items-center justify-center w-full py-4 mb-8 shadow-lg rounded-2xl bg-primary-red shadow-red-200"
                        activeOpacity={0.8}>
                        <Text className="text-lg font-quicksand-bold text-white">SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditProfile;
