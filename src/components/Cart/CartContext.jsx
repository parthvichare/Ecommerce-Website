import React, { createContext, useState, useContext,useEffect } from 'react';

const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const[totalcart,setTotalcart]=useState(0)

    const [cartItems, setCartItems] = useState(() => {
        // Retrieve cart items from localStorage if available
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
    
    useEffect(() => {
        // Update localStorage whenever cartItems changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    const addItemToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1}
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeItemFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
    };

    const updateItemQuantity = (id, quantityChange) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + quantityChange } : item
            )
        );
    };

    const incrementItemQuantity = (productId) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    

    //Calculate Prices with Quantity of each Item
    const calculatePriceByQuantity = (item) => {
        const price = parseFloat(item.prices.displayprice.replace(/₹|,/g, ''));
        return price * item.quantity;
      };


    const decrementItemQuantity=(productId)=>{
         setCartItems((currentItems)=>
           currentItems.map((item)=>
                item.id === productId ? { ...item, quantity:item.quantity-1 }:item
           ).filter((item)=>item.quantity>0)
        );
    };

    const UpdateCartTotal = (items) => {
        const totalQuantity = items.reduce((total, item) => 
            total + item.quantity, 0
        );
        // Now you can use the totalQuantity value as needed, for example:
        setTotalcart(totalQuantity);
    };

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
          // Remove the currency symbol and convert to number
          const price = parseFloat(item.prices.displayprice.replace(/₹|,/g, ''));
          return total + (price * item.quantity);
        }, 0);
      };

    return (
        <CartContext.Provider 
        value={{ 
            cartItems,
            totalcart,
            setCartItems,
            addItemToCart,  
            removeItemFromCart,
            updateItemQuantity,
            incrementItemQuantity,
            decrementItemQuantity,
            UpdateCartTotal,
            calculateTotalPrice,
            calculatePriceByQuantity,
            }}>
            {children}
        </CartContext.Provider>
    );
};

// Define useCart hook after the provider
export const useCart = () => {
    return useContext(CartContext);
};

// Custom Hooks to avoid passing the entire context provider
export const useAddItemToCart = () => {
    const { addItemToCart } = useCart();
    return addItemToCart;
};

export const useRemoveItemFromCart = () => {
    const { removeItemFromCart } = useCart();
    return removeItemFromCart;
};

export const useUpdateItemQuantity = () => {
    const { updateItemQuantity } = useCart();
    return updateItemQuantity;
};

export const UseIncrementQuantity=()=>{
    const{incrementItemQuantity}=useCart()
    return incrementItemQuantity;
}

export const UseDecrementQuantity=()=>{
    const{decrementItemQuantity}=useCart()
    return decrementItemQuantity
}


export const useCartTotal=()=>{
    const{ UpdateCartTotal }=useCart()
    return  UpdateCartTotal
}

export const useTotalprice=()=>{
    const {calculateTotalPrice}=useCart()
    return calculateTotalPrice
}