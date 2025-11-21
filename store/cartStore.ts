import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Ingredient {
    name: string;
    image: any;
}

export interface CartItem {
    id: string;
    title: string;
    subtitle: string;
    rating: number;
    image?: any;
    price: number;
    description?: string;
    spicy: number;
    quantity: number;
    ingredients?: Ingredient[];
}

export interface CartState {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "quantity">) => void;
    removeItem: (itemId: string) => void;
    clearCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((i) => i.id === item.id);

                if (existingItem) {
                    set({
                        items: currentItems.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    });
                } else {
                    set({ items: [...currentItems, { ...item, quantity: 1 }] });
                }
            },
            removeItem: (itemId) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((i) => i.id === itemId);

                if (existingItem && existingItem.quantity > 1) {
                    set({
                        items: currentItems.map((i) =>
                            i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
                        ),
                    });
                } else {
                    set({
                        items: currentItems.filter((i) => i.id !== itemId),
                    });
                }
            },
            clearCart: () => set({ items: [] }),
            totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
            totalPrice: () =>
                get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
