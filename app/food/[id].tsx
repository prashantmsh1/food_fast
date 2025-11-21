import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const burgers = [
    {
        id: "1",
        title: "Cheeseburger",
        subtitle: "Wendy's Burger",
        rating: 4.9,
        image: require("../../assets/images/food/burger-cheese.png"),
        price: 8.99,
        description:
            "The Cheeseburger is a classic favorite, featuring a juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomato, and pickles on a toasted sesame seed bun.",
        spicy: 0.2,
    },
    {
        id: "2",
        title: "Hamburger",
        subtitle: "Veggie Burger",
        rating: 4.8,
        image: require("../../assets/images/food/burger-veggie.png"),
        price: 9.99,
        description:
            "Enjoy our delicious Hamburger Veggie Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes, and tangy pickles.",
        spicy: 0.1,
    },
    {
        id: "3",
        title: "Hamburger",
        subtitle: "Chicken Burger",
        rating: 4.6,
        image: require("../../assets/images/food/burger-chicken.png"),
        price: 10.99,
        description:
            "Our Chicken Burger features a crispy, golden-brown chicken breast fillet, topped with fresh lettuce and creamy mayonnaise, all served on a soft, toasted bun.",
        spicy: 0.5,
    },
    {
        id: "4",
        title: "Hamburger",
        subtitle: "Fried Chicken Burger",
        rating: 4.5,
        image: require("../../assets/images/food/burger-chicken.png"),
        price: 11.49,
        description:
            "Indulge in the Fried Chicken Burger, with a spicy, crunchy coating, served with coleslaw and pickles for that perfect balance of heat and flavor.",
        spicy: 0.8,
    },
];

const FoodInfo = () => {
    const { id } = useLocalSearchParams();
    const item = burgers.find((b) => b.id === id) || burgers[0];
    const [portion, setPortion] = useState(1);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="flex-row items-center justify-between px-6 py-4">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Image */}
                <View
                    className="items-center justify-center my-4 shadow-xl shadow-black/20"
                    style={{ elevation: 10 }}>
                    <Image
                        source={item.image}
                        className=""
                        style={{ width: 412, height: 412 }}
                        resizeMode="contain"
                    />
                </View>

                {/* Content */}
                <View className="px-6">
                    <Text className="mb-2 text-3xl font-quicksand-bold text-navy">
                        {item.title}
                    </Text>
                    <Text className="mb-4 text-xl text-gray-500 font-quicksand-medium">
                        {item.subtitle}
                    </Text>

                    <View className="flex-row items-center mb-6">
                        <Ionicons name="star" size={18} color="#FF9C01" />
                        <Text className="ml-2 text-base font-quicksand-bold text-navy">
                            {item.rating}
                        </Text>
                        <Text className="mx-2 text-gray-300">•</Text>
                        <Text className="text-base text-gray-500 font-quicksand-medium">
                            14 mins
                        </Text>
                    </View>

                    <Text className="mb-8 text-base leading-6 text-gray-500 font-quicksand-medium">
                        {item.description}
                    </Text>

                    {/* Spicy Slider (Visual) */}
                    <View className="flex-row items-center justify-between mb-8">
                        <Text className="text-base font-quicksand-bold text-navy">Spicy</Text>
                        <View className="relative flex-1 h-2 mx-4 bg-gray-100 rounded-full">
                            <View
                                className="absolute top-0 left-0 h-2 rounded-full bg-primary-red"
                                style={{ width: `${item.spicy * 100}%` }}
                            />
                            <View
                                className="w-4 h-4 bg-primary-red rounded-full absolute top-[-4px] border-2 border-white shadow-sm"
                                style={{
                                    left: `${item.spicy * 100}%`,
                                    transform: [{ translateX: -8 }],
                                }}
                            />
                        </View>
                        <View className="absolute flex-row justify-between w-full top-4 px-14">
                            <Text className="text-xs text-green-500 font-quicksand-bold">Mild</Text>
                            <Text className="text-xs text-primary-red font-quicksand-bold">
                                Hot
                            </Text>
                        </View>
                    </View>

                    {/* Portion & Price */}
                    <View className="flex flex-row items-center justify-between mb-8">
                        <View>
                            {/* <Text className="text-base font-quicksand-bold text-navy">Portion</Text> */}
                            <View className="flex-row items-center">
                                <TouchableOpacity
                                    onPress={() => setPortion(Math.max(1, portion - 1))}
                                    className="items-center justify-center w-10 h-10 bg-primary-red rounded-xl">
                                    <Ionicons name="remove" size={24} color="#fff" />
                                </TouchableOpacity>
                                <Text className="mx-4 text-xl font-quicksand-bold text-navy">
                                    {portion}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => setPortion(portion + 1)}
                                    className="items-center justify-center w-10 h-10 bg-primary-red rounded-xl">
                                    <Ionicons name="add" size={24} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View className="p-2 px-4 shadow-lg bg-primary-red rounded-2xl shadow-red-200">
                            <Text className="text-xl text-white font-quicksand-bold">
                                ${(item.price * portion).toFixed(2)}
                            </Text>
                        </View>
                    </View>

                    {/* Order Button */}
                    <TouchableOpacity className="items-center w-full py-5 mb-8 shadow-lg bg-navy rounded-3xl shadow-blue-900/20">
                        <Text className="text-lg text-white font-quicksand-bold">ORDER NOW</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FoodInfo;
