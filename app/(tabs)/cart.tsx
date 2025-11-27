import CartItemComponent from "@/components/cart/CartItem";
import Header from "@/components/ui/Header";
import { images } from "@/constants";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
    const router = useRouter();
    const { items } = useCartStore();
    // Mock data
    const cartItems = items;

    const subTotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);

    const deliveryFee = 3.5;
    const total = useMemo(() => {
        return subTotal + deliveryFee;
    }, [subTotal, deliveryFee]);
    return (
        <SafeAreaView className="flex-1 bg-white">
            <Header
                title="Cart"
                leftIcon={images.arrowBack}
                onLeftPress={() => router.back()}
                rightIcon={images.plus}
                textColor="white"
                onRightPress={() => router.push("/menu")}
                bgColor="white"
                rightIconColor="white"
            />

            <ScrollView className="flex-1 px-5 pt-2">
                {cartItems.map((item) => (
                    <CartItemComponent
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                        item={item}
                    />
                ))}

                <View className="flex-row items-center px-4 py-2 mt-4 mb-6 bg-white border border-gray-100 rounded-full shadow-sm">
                    <Image source={images.search} className="w-5 h-5 mr-2" tintColor="#CDCDE0" />
                    <TextInput
                        placeholder="Promo Code"
                        className="flex-1 text-base text-black font-quicksand"
                        placeholderTextColor="#CDCDE0"
                    />
                    <TouchableOpacity className="px-6 py-2 rounded-full bg-primary-red">
                        <Text className="text-white font-quicksand-bold">Apply</Text>
                    </TouchableOpacity>
                </View>

                <View className="mb-8 space-y-3">
                    <View className="flex-row justify-between">
                        <Text className="text-black font-quicksand-bold">Subtotal</Text>
                        <Text className="text-black font-quicksand-bold">
                            ${subTotal.toFixed(2)}
                        </Text>
                    </View>
                    <View className="flex-row justify-between pb-3 border-b border-gray-100">
                        <Text className="text-black font-quicksand-bold">Delivery</Text>
                        <Text className="text-black font-quicksand-bold">
                            ${deliveryFee.toFixed(2)}
                        </Text>
                    </View>
                    <View className="flex-row justify-between pt-2">
                        <Text className="text-lg text-black font-quicksand-bold">Total</Text>
                        <Text className="text-lg text-black font-quicksand-bold">
                            ${total.toFixed(2)}
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View className="px-5 pb-8">
                <TouchableOpacity
                    className="items-center py-4 rounded-full bg-primary-green"
                    onPress={() => router.push("/checkout")}>
                    <Text className="text-lg text-white font-quicksand-bold">CHECK OUT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Cart;
