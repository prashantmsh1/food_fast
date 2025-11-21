import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import cn from "clsx";
import { useRouter } from "expo-router";
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-white-100">
            <FlatList
                ListHeaderComponent={() => (
                    <View className="flex-row w-full px-5 my-5 flex-between">
                        <View className=" flex-start">
                            <Text className="">Deliver To</Text>
                            <TouchableOpacity className=" flex-center flex-row gap-x-1 mt-0.5">
                                <Text className=" small-bold text-primary">Croatia</Text>
                                <Image
                                    source={images.arrowDown}
                                    className=" size-4"
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <CartButton />
                    </View>
                )}
                data={offers}
                renderItem={({ item, index }) => {
                    const isEven = index % 2 === 0;
                    return (
                        <View className="px-4 ">
                            <Pressable
                                // key={index}
                                className={cn(
                                    "offer-card ",
                                    isEven ? " flex-row-reverse" : " flex-row"
                                )}
                                style={{
                                    backgroundColor: item.color,
                                }}
                                onPress={() => router.push("/product/1")}>
                                {({ pressed }) => (
                                    <Fragment>
                                        <View className="w-2/5">
                                            <Image
                                                source={item.image}
                                                className=" size-full"
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <View
                                            className={cn(
                                                "offer-card_info flex-1 ",
                                                isEven ? " pl-10" : " pr-10"
                                            )}>
                                            <Text className="leading-tight shrink h1-bold text-white-100">
                                                {item.title}
                                            </Text>
                                            <Image
                                                className=" size-10"
                                                resizeMode="contain"
                                                source={images.arrowRight}
                                                tintColor={"#fffffff"}
                                            />
                                        </View>
                                    </Fragment>
                                )}
                            </Pressable>
                        </View>
                    );
                }}
                style={{ flex: 1 }}
                contentContainerClassName=" pb-28"
                keyExtractor={(_, index) => index.toString()}
            />
        </SafeAreaView>
    );
}
