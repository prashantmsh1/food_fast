import { images } from "@/constants";
import React from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

interface CartItemProps {
    title: string;
    price: number;
    image: ImageSourcePropType;
    quantity: number;
}

const CartItem = ({ title, price, image, quantity }: CartItemProps) => {
    return (
        <View className="flex-row items-center bg-white p-3 mb-4 rounded-2xl shadow-sm">
            <Image source={image} className="w-16 h-16 rounded-full mr-4" resizeMode="contain" />
            <View className="flex-1">
                <Text className="font-quicksand-bold text-base text-black mb-1">{title}</Text>
                <Text className="font-quicksand-bold text-sm text-black">${price.toFixed(2)}</Text>
            </View>
            <View className="flex-row items-center bg-primary-green rounded-full px-2 py-1">
                <TouchableOpacity className="p-1">
                    <Image source={images.minus} className="w-3 h-3" tintColor="white" />
                </TouchableOpacity>
                <Text className="font-quicksand-bold text-white text-sm mx-2">{quantity}</Text>
                <TouchableOpacity className="p-1">
                    <Image source={images.plus} className="w-3 h-3" tintColor="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;
