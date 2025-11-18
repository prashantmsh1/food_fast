import { Redirect, Slot } from "expo-router";
import React from "react";
import "../global.css";
export default function _layout() {
    const isAuthenticated = false; // Replace with your authentication logic

    if (!isAuthenticated) return <Redirect href="/(auth)/sign-in" />;
    return <Slot />;
}
