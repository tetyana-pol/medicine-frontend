import React, { useMemo, useState } from "react";

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const value = useMemo(() => ({ cart, setCart }), [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
