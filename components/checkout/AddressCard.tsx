import { images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface AddressCardProps {
    type: string;
    phone: string;
    address: string;
    isSelected: boolean;
}

const AddressCard = ({ type, phone, address, isSelected }: AddressCardProps) => {
    return (
        <TouchableOpacity
            className={`flex-row items-start p-4 mb-4 rounded-2xl bg-white shadow-sm border ${
                isSelected ? "border-primary-red" : "border-transparent"
            }`}>
            <View className="mr-4 mt-1">
                <View
                    className={`w-5 h-5 rounded-full border-2 items-center justify-center ${
                        isSelected ? "border-black" : "border-gray-300"
                    }`}>
                    {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-black" />}
                </View>
            </View>
            <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                    <Text className="font-quicksand-bold text-base text-black">{type}</Text>
                    <Image
                        source={images.pencil}
                        className="w-4 h-4"
                        resizeMode="contain"
                        tintColor="black"
                    />
                </View>
                <Text className="font-quicksand text-sm text-gray-500 mb-1">{phone}</Text>
                <Text className="font-quicksand text-sm text-gray-500">{address}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default AddressCard;
