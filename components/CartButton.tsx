import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { images } from "../constants";
import { useCartStore } from "../store/cartStore";

const CartButton = () => {
    const totalItems = useCartStore((state) => state.totalItems());
    return (
        <TouchableOpacity
            onPress={() => {
                router.push("/cart");
            }}
            className=" cart-btn">
            <Image source={images.bag} className="size-5" resizeMode="contain" />
            {totalItems > 0 && (
                <View className=" cart-badge">
                    <Text className=" small-bold text-gray-50">{totalItems}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default CartButton;
