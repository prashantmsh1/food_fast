import React from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

interface PaymentOptionProps {
    label: string;
    icon?: ImageSourcePropType;
    isSelected: boolean;
}

const PaymentOption = ({ label, icon, isSelected }: PaymentOptionProps) => {
    return (
        <TouchableOpacity className="flex-row items-center py-3">
            <View className="w-8 h-8 items-center justify-center mr-4">
                {icon ? (
                    <Image source={icon} className="w-6 h-6" resizeMode="contain" />
                ) : (
                    <View className="w-6 h-6 bg-gray-200 rounded-full" />
                )}
            </View>
            <Text className="flex-1 font-quicksand-bold text-base text-black">{label}</Text>
            <View
                className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
                    isSelected ? "border-black" : "border-gray-300"
                }`}>
                {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-black" />}
            </View>
        </TouchableOpacity>
    );
};

export default PaymentOption;
