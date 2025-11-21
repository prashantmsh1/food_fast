import { images } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
    title?: string;
    leftIcon?: ImageSourcePropType;
    rightIcon?: ImageSourcePropType;
    onLeftPress?: () => void;
    onRightPress?: () => void;
    rightIconColor?: string;
    bgColor?: string;
    textColor?: string;
}

const Header = ({
    title,
    leftIcon = images.arrowBack,
    rightIcon,
    onLeftPress,
    onRightPress,
    rightIconColor,
    bgColor = "transparent",
    textColor = "black",
}: HeaderProps) => {
    const router = useRouter();

    const handleLeftPress = onLeftPress || (() => router.back());

    return (
        <View className={`flex-row items-center justify-between px-5 py-4 ${bgColor}`}>
            <TouchableOpacity
                onPress={handleLeftPress}
                className="w-10 h-10 items-center justify-center">
                <Image source={leftIcon} className="w-5 h-5" resizeMode="contain" />
            </TouchableOpacity>

            {title && (
                <Text className={`font-quicksand-bold text-xl text-${textColor}`}>{title}</Text>
            )}

            <TouchableOpacity
                onPress={onRightPress}
                className="w-10 h-10 items-center justify-center"
                disabled={!rightIcon}>
                {rightIcon && (
                    <Image
                        source={rightIcon}
                        className="w-5 h-5"
                        resizeMode="contain"
                        tintColor={rightIconColor}
                    />
                )}
            </TouchableOpacity>
        </View>
    );
};

export default Header;
