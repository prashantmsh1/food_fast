import IngredientItem from "@/components/product/IngredientItem";
import Header from "@/components/ui/Header";
import { images } from "@/constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProductDetail = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    // Mock data
    const product = {
        title: "Fresh Pizza",
        price: 10.49,
        rating: 4.5,
        calories: "348Kcal",
        description:
            "Mozzarella cheese, premium pepperoni, fresh garlic, olive oil, California white wine and fresh basil.",
        image: images.pizzaOne,
        ingredients: [
            { name: "Black Pasta", image: images.mushrooms },
            { name: "Shrimp", image: images.onions },
            { name: "Tomato", image: images.tomatoes },
        ],
    };

    return (
        <View className="flex-1 bg-primary-green">
            <Header
                leftIcon={images.arrowBack}
                rightIcon={images.star}
                rightIconColor="#EF2A39"
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
                    <Text className="font-quicksand-bold text-2xl text-black mb-2">
                        {product.title}
                    </Text>
                    <View className="flex-row items-center space-x-4 mb-4">
                        <View className="flex-row items-center">
                            <Image
                                source={images.star}
                                className="w-4 h-4 mr-1"
                                tintColor="#FF9C01"
                            />
                            <Text className="font-quicksand-bold text-black">{product.rating}</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Image
                                source={images.star} // Placeholder for fire/calories
                                className="w-4 h-4 mr-1"
                                tintColor="#FF9C01"
                            />
                            <Text className="font-quicksand text-gray-500">{product.calories}</Text>
                        </View>
                    </View>

                    <Text className="font-quicksand-bold text-3xl text-black mb-6">
                        ${product.price}
                    </Text>

                    <View className="flex-row items-center bg-primary-green rounded-full px-4 py-2">
                        <TouchableOpacity>
                            <Image source={images.minus} className="w-4 h-4" tintColor="white" />
                        </TouchableOpacity>
                        <Text className="font-quicksand-bold text-white text-xl mx-6">2</Text>
                        <TouchableOpacity>
                            <Image source={images.plus} className="w-4 h-4" tintColor="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text className="font-quicksand-bold text-lg text-black mb-3">Ingredients</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                    {product.ingredients.map((ing, index) => (
                        <IngredientItem key={index} name={ing.name} image={ing.image} />
                    ))}
                </ScrollView>

                <Text className="font-quicksand text-gray-400 text-xs mb-4" numberOfLines={2}>
                    {product.description}
                </Text>

                <TouchableOpacity
                    className="bg-primary-green rounded-full py-4 items-center flex-row justify-center mt-auto"
                    onPress={() => router.push("/cart")}>
                    <Image source={images.bag} className="w-5 h-5 mr-2" tintColor="white" />
                    <Text className="font-quicksand-bold text-white text-lg">Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductDetail;
