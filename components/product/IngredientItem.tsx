import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface IngredientItemProps {
    name: string;
    image: ImageSourcePropType;
}

const IngredientItem = ({ name, image }: IngredientItemProps) => {
    return (
        <View className="flex flex-row items-center flex-1 h-8 px-4 mr-3 border border-gray-300 rounded-full shadow-sm bg-gray-50 ">
            <Image source={image} className="mr-2 size-8" resizeMode="contain" />
            <Text className="text-lg black text- font-quicksand-bold">{name}</Text>
        </View>
    );
};

export default IngredientItem;
