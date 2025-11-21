import CartItem from "@/components/cart/CartItem";
import Header from "@/components/ui/Header";
import { images } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
    const router = useRouter();

    // Mock data
    const cartItems = [
        { id: 1, title: "Beef Pizza", price: 12.0, image: images.pizzaOne, quantity: 2 },
        { id: 2, title: "Egg Burger", price: 11.0, image: images.burgerOne, quantity: 2 },
        { id: 3, title: "Cucumber Salad", price: 12.0, image: images.salad, quantity: 2 },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white">
            <Header
                title="Cart"
                leftIcon={images.arrowBack}
                onLeftPress={() => router.back()}
                rightIcon={images.plus} // Using plus as 'x' close icon placeholder if needed, or just omit
                // rightIcon style needed to rotate if using plus as close
            />

            <ScrollView className="flex-1 px-5 pt-2">
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                    />
                ))}

                <View className="flex-row items-center bg-white border border-gray-100 rounded-full px-4 py-2 mt-4 mb-6 shadow-sm">
                    <Image source={images.search} className="w-5 h-5 mr-2" tintColor="#CDCDE0" />
                    <TextInput
                        placeholder="Promo Code"
                        className="flex-1 font-quicksand text-base text-black"
                        placeholderTextColor="#CDCDE0"
                    />
                    <TouchableOpacity className="bg-primary-red rounded-full px-6 py-2">
                        <Text className="font-quicksand-bold text-white">Apply</Text>
                    </TouchableOpacity>
                </View>

                <View className="space-y-3 mb-8">
                    <View className="flex-row justify-between">
                        <Text className="font-quicksand-bold text-black">Subtotal</Text>
                        <Text className="font-quicksand-bold text-black">$70.00</Text>
                    </View>
                    <View className="flex-row justify-between border-b border-gray-100 pb-3">
                        <Text className="font-quicksand-bold text-black">Delivery</Text>
                        <Text className="font-quicksand-bold text-black">$3.50</Text>
                    </View>
                    <View className="flex-row justify-between pt-2">
                        <Text className="font-quicksand-bold text-lg text-black">Total</Text>
                        <Text className="font-quicksand-bold text-lg text-black">$73.50</Text>
                    </View>
                </View>
            </ScrollView>

            <View className="px-5 pb-8">
                <TouchableOpacity
                    className="bg-primary-green rounded-full py-4 items-center"
                    onPress={() => router.push("/checkout")}>
                    <Text className="font-quicksand-bold text-white text-lg">CHECK OUT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Cart;
