import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = ["All", "Combos", "Sliders", "Classics"];

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
        image: require("../../assets/images/food/burger-chicken.png"), // Reusing chicken image for now
        price: 11.49,
        description:
            "Indulge in the Fried Chicken Burger, with a spicy, crunchy coating, served with coleslaw and pickles for that perfect balance of heat and flavor.",
        spicy: 0.8,
    },
];

const Home = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="p-6" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="flex-row items-center justify-between mb-6">
                    <View>
                        <Text className="text-3xl font-quicksand-bold text-primary-red">
                            FoodGo
                        </Text>
                        <Text className="text-gray-500 font-quicksand-medium">
                            Order your favourite food!
                        </Text>
                    </View>
                    <Image
                        source={require("../../assets/images/user-avatar.png")}
                        // className="w-12 h-12 rounded-full"
                        resizeMode="contain"
                        style={{ width: 128, height: 128 }}
                    />
                </View>

                {/* Search Bar */}
                <View className="flex-row items-center mb-6 space-x-4">
                    <View className="flex-row items-center flex-1 px-4 bg-white border border-gray-100 shadow-sm rounded-2xl h-14">
                        <Ionicons name="search-outline" size={24} color="#000" />
                        <TextInput
                            className="flex-1 ml-3 text-base font-quicksand-medium"
                            placeholder="Search"
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>
                    <TouchableOpacity className="items-center justify-center shadow-lg w-14 h-14 bg-primary-red rounded-2xl shadow-red-200">
                        <Ionicons name="options-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Categories */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8">
                    {categories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full  mr-3 ${
                                activeCategory === category
                                    ? "bg-primary-red"
                                    : "bg-gray-50 border border-gray-200 font-quicksand-bold  text-gray-950"
                            }`}>
                            <Text
                                className={`font-quicksand-bold ${
                                    activeCategory === category ? "text-white" : "text-gray-500"
                                }`}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Food Grid */}
                <View className="flex flex-row flex-wrap justify-between flex-1 w-full ">
                    {burgers.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() =>
                                router.push({ pathname: "/product/[id]", params: { id: item.id } })
                            }
                            className="items-center p-4 bg-white border shadow-sm rounded-3xl border-gray-50"
                            style={{ elevation: 2 }}>
                            <Image
                                source={item.image}
                                className="w-32 h-32 mb-2"
                                style={{ width: 128, height: 128 }}
                                resizeMode="contain"
                            />
                            <View className="w-full">
                                <Text
                                    className="mb-1 text-lg font-quicksand-bold text-navy"
                                    numberOfLines={1}>
                                    {item.title}
                                </Text>
                                <Text className="mb-2 text-xs text-gray-400 font-quicksand-medium">
                                    {item.subtitle}
                                </Text>
                                <View className="flex-row items-center justify-between">
                                    <View className="flex-row items-center">
                                        <Ionicons name="star" size={14} color="#FF9C01" />
                                        <Text className="ml-1 font-quicksand-bold text-navy">
                                            {item.rating}
                                        </Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Ionicons name="heart-outline" size={20} color="#EF2A39" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
