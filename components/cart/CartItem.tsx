import { images } from "@/constants";
import { CartItem, useCartStore } from "@/store/cartStore";
import React from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

interface CartItemProps {
    title: string;
    price: number;
    image: ImageSourcePropType;
    quantity: number;
    item: CartItem;
}

const CartItemComponent = ({ title, price, image, quantity, item }: CartItemProps) => {
    const { addItem, removeItem } = useCartStore();
    return (
        <View className="flex-row items-center p-3 mb-4 bg-white shadow-sm rounded-2xl">
            <Image source={image} className="w-16 h-16 mr-4 rounded-full" resizeMode="contain" />
            <View className="flex-1">
                <Text className="mb-1 text-base text-black font-quicksand-bold">{title}</Text>
                <Text className="text-sm text-black font-quicksand-bold">${price.toFixed(2)}</Text>
            </View>
            <View className="flex-row items-center px-2 py-1 rounded-full bg-primary-green">
                <TouchableOpacity onPress={() => removeItem(item.id)} className="p-1">
                    <Image source={images.minus} className="w-6 " />
                </TouchableOpacity>
                <Text className="mx-2 text-gray-50 text-lg font-quicksand-bold">{quantity}</Text>
                <TouchableOpacity onPress={() => addItem(item)} className="p-1">
                    <Image source={images.plus} className=" size-6" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItemComponent;
