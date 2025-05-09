import { createContext } from "react";
import { CartItem } from "../models/Product";

// Interface för CartContext
export interface ICartContext {
  cartVisible: boolean; // Håller koll på om varukorgen är synlig eller inte
  toggleCartVisibility: () => void; // Funktion för att växla mellan synlig och osynlig varukorg
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleDecrease: (item: CartItem) => void;
  handleIncrease: (item: CartItem) => void;
  handleRemove: (item: CartItem) => void;
  openCheckout: () => void;
  showCheckout: boolean;
  setShowCheckout: React.Dispatch<React.SetStateAction<boolean>>; 

  
}

// Skapa CartContext med standardvärden (vi börjar med en stängd varukorg)
export const CartContext = createContext<ICartContext>({
  cartVisible: false,
  toggleCartVisibility: () => {}, // Placeholder funktion som vi kommer att definiera senare
  cartItems: [],
  setCartItems: () => {},
  handleDecrease:  () => {},
  handleIncrease: () => {},
  handleRemove:  () => {},
  openCheckout:  () => {},
  showCheckout: false,
  setShowCheckout: () => {}, 
});
