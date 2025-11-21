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
                <Text className="font-quicksand-bold text-xl text-black">Checkout</Text>
                <View className="relative">
                    <Image
                        source={images.bag}
                        className="w-6 h-6"
                        resizeMode="contain"
                        tintColor="black"
                    />
                    <View className="absolute -top-1 -right-1 bg-primary-green w-4 h-4 rounded-full items-center justify-center">
                        <Text className="text-white text-[10px] font-bold">02</Text>
                    </View>
                </View>
            </View>

            <ScrollView className="flex-1 px-5">
                <Text className="font-quicksand-bold text-lg text-black mb-4">Shipping to</Text>
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

                <Text className="font-quicksand-bold text-lg text-black mt-6 mb-4">
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

                <View className="mt-8 space-y-3 mb-8">
                    <View className="flex-row justify-between">
                        <Text className="font-quicksand-bold text-lg text-black">Sub total</Text>
                        <Text className="font-quicksand-bold text-lg text-black">$25.00</Text>
                    </View>
                    <View className="border-b border-dashed border-gray-300 my-2" />
                    <View className="flex-row justify-between">
                        <Text className="font-quicksand-bold text-lg text-black">Total</Text>
                        <Text className="font-quicksand-bold text-lg text-black">$25.00</Text>
                    </View>
                </View>
            </ScrollView>

            <View className="px-5 pb-8">
                <TouchableOpacity
                    className="bg-primary-green rounded-full py-4 items-center"
                    onPress={() => router.push("/")}>
                    <Text className="font-quicksand-bold text-white text-lg">Place to Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Checkout;
