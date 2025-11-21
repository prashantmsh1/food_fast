import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
    title: string;
    handlePress: () => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
}

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-navy rounded-full min-h-[56px] flex flex-row justify-center items-center ${containerStyles} ${
                isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}>
            <Text className={`text-white font-quicksand-bold text-lg ${textStyles}`}>{title}</Text>

            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
