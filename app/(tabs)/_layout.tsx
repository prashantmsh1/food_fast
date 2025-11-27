import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import "../global.css";

export default function _layout() {
    const isAuthenticated = true; // Replace with your authentication logic

    if (!isAuthenticated) return <Redirect href="/" />;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#EF2A39",
                tabBarInactiveTintColor: "#999",
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: "Quicksand-Medium",
                    marginTop: -5,
                },
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderTopColor: "#f0f0f0",
                    height: 70,
                    elevation: 0,
                    shadowOpacity: 0,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="menu"
                options={{
                    title: "Menu",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="restaurant-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    title: "Favorite",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="heart-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="cart-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    href: null, // Hide from tab bar
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    href: null, // Hide from tab bar
                }}
            />
        </Tabs>
    );
}
