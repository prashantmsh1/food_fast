import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { images } from "../constants";

const CartButton = () => {
    const totalItems = 4; // Example item count
    // const totalItems = useCartStore((state) => state.totalItems());
    return (
        <TouchableOpacity
            onPress={() => {
                router.push("/cart");
            }}
            className=" cart-btn">
            <Image source={images.bag} className="size-5" resizeMode="contain" />
            {/* <Text className=" cart-btn_count">{totalItems}</Text> */}
            {totalItems > 0 && (
                <View className=" cart-badge">
                    <Text className=" small-bold">{totalItems}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default CartButton;
