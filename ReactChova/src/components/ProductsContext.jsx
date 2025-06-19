import React, {createContext, useState, useEffect} from "react";
import Swal from 'sweetalert2';

export const ProductContext = createContext();

export const ProductsProvider = ({children}) => 
{

    let [productos, setProductos] = useState([]);
    
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

    const editarProducto = (idProducto, nombre, descripcion, precio) =>
    {   
        productos.map(producto => {
        if (producto.id == idProducto) {
            producto.title = nombre;
            producto.description= descripcion,
            producto.price = parseFloat(precio);
            return true;
        } 
        else
        {
            return false;
        }
        
        });
        
        return true;
    }

    const eliminarProducto = (articulo)=>
    {   

      
        Swal.fire({
            title: "Aviso!",
            text: "¿Desea eliminar el articulo " + articulo.title + "?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Eliminar"
          }).then((result) => {
            if (result.isConfirmed) {

                setProductos(
                    (productos) => productos.filter(item => item.id !== articulo.id)
                );

              Swal.fire({
                title: "Eliminado",
                text: "Articulo eliminado correctamente.",
                icon: "success"
              });

            }
          });
        
    }
   
    return(
        <ProductContext.Provider value={{
            productos,
            agregarProducto,
            Loading,
            eliminarProducto,
            setProductos,
            editarProducto
            }}
        >
            {children}
        </ProductContext.Provider>
    );

}