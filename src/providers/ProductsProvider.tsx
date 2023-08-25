import { createContext, useCallback, useMemo, useState } from 'react'
import { Product } from "../typings";

interface CartProductsContext {
    addProductToCart: (product: Product) => void,
    cartProducts: Product[] | null,
    totalPrice: number
}

export const ProductsContext = createContext<CartProductsContext>({
    addProductToCart: (product: Product) => { },
    cartProducts: null,
    totalPrice: 0
})

interface Props {
    children: React.ReactNode;
}

export const ProductsProvider: React.FC<Props> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<Product[] | null>(null)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const addProductToCart = useCallback((product: Product) => {
        cartProducts ? setCartProducts([...cartProducts, product]) : setCartProducts([product])
        setTotalPrice(totalPrice + product.price)
    }, [cartProducts, totalPrice])

    const contextValue = useMemo(() => ({
        addProductToCart: addProductToCart,
        cartProducts: cartProducts,
        totalPrice: totalPrice
    }), [addProductToCart, cartProducts, totalPrice])

    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )

}

