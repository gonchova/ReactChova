import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cantItems, setCantItems] = useState(0);

    const addtoCart = (articulo)=> {
        
        setCantItems(cantItems+1);
        
        setCart((cart) =>
            {
                const bExiste = cart.find( item => item.id === articulo.id);
                
                if (bExiste)
                    return cart.map (item => item.id === articulo.id ? {...item, cantidad: item.cantidad+1 } : item);

                return [...cart, {...articulo, cantidad: 1}];
                
            }
            );
    }

    //eliminar articulo
    const deleteFromCart = (articulo)=>
    {
        setCart(
            (cartListed) => cartListed.filter(item => item.id !== articulo.id)
        );

        setCantItems( cantItems - articulo.cantidad);
    }

    //limpiar carrito
    const clearCart = ()=>
    {
        setCart([]);
        setCantItems(0);
    }


    return(
        <CartContext.Provider value={{
            cart,
            setCart,
            addtoCart,
            deleteFromCart,
            clearCart,
            cantItems,
            setCantItems
        }}
        >
            {children}
        </CartContext.Provider>
    );

};


