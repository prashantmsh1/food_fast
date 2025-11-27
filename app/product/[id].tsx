import IngredientItem from "@/components/product/IngredientItem";
import Header from "@/components/ui/Header";
import { images } from "@/constants";
import { useCartStore } from "@/store/cartStore";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
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
        ingredients: [
            { name: "Black Pasta", image: images.mushrooms },
            { name: "Shrimp", image: images.onions },
            { name: "Tomato", image: images.tomatoes },
        ],
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
        ingredients: [
            { name: "Black Pasta", image: images.mushrooms },
            { name: "Shrimp", image: images.onions },
            { name: "Tomato", image: images.tomatoes },
        ],
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
        ingredients: [
            { name: "Black Pasta", image: images.mushrooms },
            { name: "Shrimp", image: images.onions },
            { name: "Tomato", image: images.tomatoes },
        ],
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
        ingredients: [
            { name: "Black Pasta", image: images.mushrooms },
            { name: "Shrimp", image: images.onions },
            { name: "Tomato", image: images.tomatoes },
        ],
    },
];
const ProductDetail = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { addItem, items, removeItem } = useCartStore();

    // Mock data

    const item = burgers.find((b) => b.id === id) || burgers[0];

    const product = {
        id: item.id,
        subtitle: item.subtitle,
        spicy: item.spicy,
        title: item.title,
        price: item.price,
        rating: item.rating,
        calories: "348Kcal",
        description: item.description,
        image: item.image,
        ingredients: item.ingredients,
    };

    return (
        <SafeAreaView className="flex-1 bg-primary-green">
            <Header
                leftIcon={images.arrowBack}
                rightIcon={images.star}
                rightIconColor="#EF2A39"
                bgColor="white"
                onLeftPress={() => router.back()}
            />

            <View className="h-[35%] items-center justify-center z-0">
                <Image
                    source={product.image}
                    className="w-64 h-64 rounded-full"
                    resizeMode="contain"
                />
            </View>

            <View className="flex-1 bg-white rounded-t-[40px] px-6 pt-10 pb-6 mt-[-20px]">
                <View className="items-center mb-6">
                    <Text className="mb-2 text-2xl text-black font-quicksand-bold">
                        {product.title}
                    </Text>
                    <View className="flex-row items-center mb-4 space-x-4">
                        <View className="flex-row items-center">
                            <Image
                                source={images.star}
                                className="w-4 h-4 mr-1"
                                tintColor="#FF9C01"
                            />
                            <Text className="text-black font-quicksand-bold">{product.rating}</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Image
                                source={images.star} // Placeholder for fire/calories
                                className="w-4 h-4 mr-1"
                                tintColor="#FF9C01"
                            />
                            <Text className="text-gray-500 font-quicksand">{product.calories}</Text>
                        </View>
                    </View>

                    <Text className="mb-6 text-3xl text-black font-quicksand-bold">
                        ${product.price}
                    </Text>

                    <View className="flex-row items-center px-4 py-2 rounded-full w-36 bg-primary-green">
                        <TouchableOpacity onPress={() => removeItem(product.id)}>
                            <Image source={images.minus} className="w-6 " />
                        </TouchableOpacity>
                        <Text className="mx-6 text-xl text-white font-quicksand-bold">
                            {items.find((item) => item.id === id)?.quantity || 0}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                if (items.find((item) => item.id === id)?.quantity === 10) {
                                    return;
                                }
                                addItem(product);
                            }}>
                            <Image source={images.plus} className=" size-6" />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text className="mb-3 text-lg text-black font-quicksand-bold">Ingredients</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                    {product.ingredients.map((ing, index) => (
                        <IngredientItem key={index} name={ing.name} image={ing.image} />
                    ))}
                </ScrollView>

                <Text className="mb-4 text-xs text-gray-400 font-quicksand" numberOfLines={2}>
                    {product.description}
                </Text>

                <TouchableOpacity
                    className="flex-row items-center justify-center py-4 mt-auto rounded-full bg-primary-green"
                    onPress={() => router.push("/cart")}>
                    <Image source={images.bag} className="w-5 h-5 mr-2" tintColor="white" />
                    <Text className="text-lg text-white font-quicksand-bold">Go to Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProductDetail;
