import AddressCard from "@/components/checkout/AddressCard";
import PaymentOption from "@/components/checkout/PaymentOption";
import { images } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Checkout = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row items-center justify-between px-5 py-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={images.arrowBack} className="w-5 h-5" resizeMode="contain" />
                </TouchableOpacity>
                <Text className="text-xl text-black font-quicksand-bold">Checkout</Text>
                <View className="relative">
                    <Image
                        source={images.bag}
                        className="w-6 h-6"
                        resizeMode="contain"
                        tintColor="black"
                    />
                    <View className="absolute items-center justify-center w-4 h-4 rounded-full -top-1 -right-1 bg-primary-green">
                        <Text className="text-white text-[10px] font-bold">02</Text>
                    </View>
                </View>
            </View>

            <ScrollView className="flex-1 px-5">
                <Text className="mb-4 text-lg text-black font-quicksand-bold">Shipping to</Text>
                <AddressCard
                    type="Home"
                    phone="(875) 876-785"
                    address="Sadia Villa, Habiganj"
                    isSelected={true}
                />
                <AddressCard
                    type="Office"
                    phone="(217) 555-0113"
                    address="6391 Elgin St. Habiganj"
                    isSelected={false}
                />

                <Text className="mt-6 mb-4 text-lg text-black font-quicksand-bold">
                    Payment Method
                </Text>
                <PaymentOption
                    label="Credit card"
                    // icon={images.creditCard}
                    isSelected={true}
                />
                <PaymentOption
                    label="Paypal"
                    // icon={images.paypal}
                    isSelected={false}
                />
                <PaymentOption
                    label="Google pay"
                    // icon={images.googlePay}
                    isSelected={false}
                />
                <PaymentOption
                    label="Apple Pay"
                    // icon={images.applePay}
                    isSelected={false}
                />

                <View className="mt-8 mb-8 space-y-3">
                    <View className="flex-row justify-between">
                        <Text className="text-lg text-black font-quicksand-bold">Sub total</Text>
                        <Text className="text-lg text-black font-quicksand-bold">$25.00</Text>
                    </View>
                    <View className="my-2 border-b border-gray-300 border-dashed" />
                    <View className="flex-row justify-between">
                        <Text className="text-lg text-black font-quicksand-bold">Total</Text>
                        <Text className="text-lg text-black font-quicksand-bold">$25.00</Text>
                    </View>
                </View>
            </ScrollView>

            <View className="px-5 pb-8">
                <TouchableOpacity
                    className="items-center py-4 rounded-full bg-primary-green"
                    onPress={() => router.push("/")}>
                    <Text className="text-lg text-white font-quicksand-bold">Place to Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Checkout;
