import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface FormFieldProps {
    value: string;
    placeholder?: string;
    handleChangeText: (e: string) => void;
    otherStyles?: string;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    icon?: keyof typeof Ionicons.glyphMap;
    isPassword?: boolean;
}

const FormField = ({
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    keyboardType,
    icon,
    isPassword = false,
    ...props
}: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View
            className={`w-full h-14 px-4 bg-light-gray rounded-full flex flex-row items-center ${otherStyles}`}>
            {icon && <Ionicons name={icon} size={20} color="#9CA3AF" className="mr-3" />}

            <TextInput
                className="flex-1 text-navy font-quicksand-medium text-base ml-2"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
                onChangeText={handleChangeText}
                secureTextEntry={isPassword && !showPassword}
                keyboardType={keyboardType}
                {...props}
            />

            {isPassword && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                        name={!showPassword ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color="#9CA3AF"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default FormField;
