import { useState, useCallback, createContext, useContext, type ReactNode } from 'react';
import type { CartItem } from '../types';

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'cartId' | 'quantity'>) => void;
  incrementItem: (cartId: string) => void;
  decrementItem: (cartId: string) => void;
  removeItem: (cartId: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

let idCounter = 0;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((item: Omit<CartItem, 'cartId' | 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === item.productId && i.optionLabel === item.optionLabel,
      );
      if (existing) {
        return prev.map((i) =>
          i.cartId === existing.cartId ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...item, cartId: `c${++idCounter}`, quantity: 1 }];
    });
  }, []);

  const incrementItem = useCallback((cartId: string) => {
    setItems((prev) =>
      prev.map((i) => (i.cartId === cartId ? { ...i, quantity: i.quantity + 1 } : i)),
    );
  }, []);

  const decrementItem = useCallback((cartId: string) => {
    setItems((prev) =>
      prev.flatMap((i) => {
        if (i.cartId !== cartId) return [i];
        if (i.quantity <= 1) return [];
        return [{ ...i, quantity: i.quantity - 1 }];
      }),
    );
  }, []);

  const removeItem = useCallback((cartId: string) => {
    setItems((prev) => prev.filter((i) => i.cartId !== cartId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        incrementItem,
        decrementItem,
        removeItem,
        clearCart,
        total,
        itemCount,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


