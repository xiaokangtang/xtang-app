import { useCallback, useContext } from "react"
import { Product } from "../../typings"
import { ProductsContext } from "../../providers/ProductsProvider"
import ProductsTable from "../../components/ProductsTable"

export type ProductsContainerProps = {
    displayedProducts: Product[],
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({ displayedProducts }) => {
    const { addProductToCart } = useContext(ProductsContext)
    const onProductAdd = useCallback((product: Product) => {
        addProductToCart(product)
    }, [addProductToCart])
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">There are {displayedProducts.length} product(s) available</h2>
            <ProductsTable products={displayedProducts} hasAddButton={true} onProductAdd={onProductAdd} />
        </>

    )
}

export default ProductsContainer