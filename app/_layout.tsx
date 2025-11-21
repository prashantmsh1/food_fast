import { useFonts } from "expo-font";
import { Redirect, Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";

import "./global.css";

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
        "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
        "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
        "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
        "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    });

    useEffect(() => {
        if (error) {
            console.error("Error loading fonts:", error);
        }

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [error, fontsLoaded]);
    const isAuthenticated = true;
    if (!isAuthenticated) return <Redirect href="/" />;
    return (
        // <Stack
        //     screenOptions={{
        //         headerShown: false,
        //     }}
        // />
        <Slot />
    );
}
