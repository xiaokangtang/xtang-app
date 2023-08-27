import { useContext } from "react"
import { ProductsContext } from "../../providers/ProductsProvider"
import ProductsTable from "../../components/ProductsTable"

const CartContainer: React.FC = () => {
    const { cartProducts, totalPrice } = useContext(ProductsContext)
    if (!cartProducts) { return null }
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">{cartProducts.length} product(s) in your cart</h2>
            <ProductsTable products={cartProducts} hasAddButton={false} />
            <p className="mt-4">Total Price:{totalPrice} </p>
        </>

    )
}

export default CartContainer