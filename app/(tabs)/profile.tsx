import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MenuItemProps {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    onPress?: () => void;
    showArrow?: boolean;
}

const MenuItem = ({ icon, title, onPress, showArrow = true }: MenuItemProps) => (
    <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center justify-between p-4 mb-3 bg-white border border-gray-100 rounded-2xl"
        activeOpacity={0.7}>
        <View className="flex-row items-center">
            <Ionicons name={icon} size={22} color="#666" />
            <Text className="ml-4 text-base font-quicksand-semibold text-navy">{title}</Text>
        </View>
        {showArrow && <Ionicons name="chevron-forward" size={20} color="#ccc" />}
    </TouchableOpacity>
);

const Profile = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="flex-row items-center justify-between px-6 py-4">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text className="text-xl font-quicksand-bold text-navy">Profile</Text>
                    <TouchableOpacity onPress={() => router.push("/profile/edit")}>
                        <Ionicons name="create-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Profile Info */}
                <View className="items-center px-6 py-6">
                    <Image
                        source={require("../../assets/images/user-avatar.png")}
                        className="mb-4 border-4 border-gray-100 rounded-full w-28 h-28"
                        resizeMode="cover"
                    />
                    <Text className="mb-1 text-2xl font-quicksand-bold text-navy">Pooja Kedia</Text>
                    <View className="flex-row items-center">
                        <Ionicons name="location-outline" size={14} color="#999" />
                        <Text className="ml-1 text-sm text-gray-500 font-quicksand-medium">
                            76, Muntpura scheme...
                        </Text>
                    </View>
                </View>

                {/* Top Section - Payments & Address */}
                <View className="px-6 mb-6">
                    <MenuItem
                        icon="card-outline"
                        title="Payments Methods"
                        onPress={() => console.log("Payments")}
                    />
                    <MenuItem
                        icon="location-outline"
                        title="Address"
                        onPress={() => console.log("Address")}
                    />
                </View>

                {/* Main Menu Section */}
                <View className="px-6 mb-6">
                    <MenuItem
                        icon="heart-outline"
                        title="Favorite Order"
                        onPress={() => router.push("/(tabs)/favorites")}
                    />
                    <MenuItem
                        icon="receipt-outline"
                        title="My Order"
                        onPress={() => console.log("My Order")}
                    />
                    <MenuItem
                        icon="globe-outline"
                        title="Language"
                        onPress={() => console.log("Language")}
                    />
                    <MenuItem
                        icon="settings-outline"
                        title="Settings"
                        onPress={() => console.log("Settings")}
                    />
                    <MenuItem
                        icon="notifications-outline"
                        title="Notification"
                        onPress={() => console.log("Notification")}
                    />
                </View>

                {/* Log Out */}
                <View className="px-6 mb-8">
                    <TouchableOpacity
                        onPress={() => console.log("Log Out")}
                        className="flex-row items-center p-4 bg-white border border-gray-100 rounded-2xl"
                        activeOpacity={0.7}>
                        <Ionicons name="log-out-outline" size={22} color="#666" />
                        <Text className="ml-4 text-base font-quicksand-semibold text-navy">
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
