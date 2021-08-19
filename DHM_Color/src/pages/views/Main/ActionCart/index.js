import React, { createContext, useState, useEffect } from 'react'
import apiProduct from '../../../../api/productApi'
import Swal from 'sweetalert2';
import apiDetail from './../../../../api/detailApi'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        apiProduct.getAll().then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
    }, {})
    // const [detail, setDetail] = useState([]);
    // const getAllProductDetail = (id) => {
    //     apiDetail.get(id).then((res) => {
    //         console.log(res.data);
    //         setDetail(res.data)
    //     })
    // }
    const [cart, setCart] = useState([]);
    const addCart = (id) => {
        const check = cart.every(item => {
            return item.id !== id


        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            console.log(data);
            setCart([...cart, ...data])
            Swal.fire(
                'Thêm vào giỏ hàng thành công',
                'You clicked the button!',
                'success'
            )
        }
        //  else {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Sản phẩm đã có trong giỏ hàng',
        //         text: 'Something went wrong!',
        //     })
        // }
    };
    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, []);
    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart]);

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    };
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}