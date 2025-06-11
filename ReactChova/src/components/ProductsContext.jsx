import React, {createContext, useState, useEffect} from "react";

export const ProductContext = createContext();

export const ProductsProvider = ({children}) => {

    const [productos, setProductos] = useState([]);

    

        useEffect(()=>
        {   
                // hacer el pedido de la api
            fetch('https://dummyjson.com/products/category/smartphones')
                .then(res=>res.json())
                .then(data=>{
                    if (productos.length == 0)
                        setProductos(data.products);
                    setLoading(false);
            })
            .catch(err=>{
                console.error("Error de carga de API",err);
                setLoading(false);
            });
        },[]);
    
    
    const [Loading, setLoading] = useState(true);

    const agregarProducto =(producto) =>
    {   
        let max = 0;

        productos.forEach(item => {
        if (item.id > max) {
            max = item.id;
        }
        });

        producto = {...producto, id: max+1};
        productos.push(producto);
    }

    const eliminarProducto = (articulo)=>
        {   
            setProductos(
                (productos) => productos.filter(item => item.id !== articulo.id)
            );
    
            console.log(productos);
        }
    
    

    return(
        <ProductContext.Provider value={{
            productos,
            agregarProducto,
            Loading,
            eliminarProducto
            }}
        >
            {children}
        </ProductContext.Provider>
    );

    }