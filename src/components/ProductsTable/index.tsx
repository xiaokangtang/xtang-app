import { Product } from "../../typings"

export type ProductsTableType = {
    products: Product[],
    hasAddButton: boolean,
    onProductAdd?: (product: Product) => void
}

const ProductsTable: React.FC<ProductsTableType> = ({ products, hasAddButton, onProductAdd = () => { } }) => {
    return (

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        {hasAddButton &&
                            <th scope="col" className="px-6 py-3">
                                Add To Cart
                            </th>}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </th>
                            <td className="px-6 py-4">
                                {product.category}
                            </td>
                            <td className="px-6 py-4">
                                {product.price}
                            </td>
                            {hasAddButton &&
                                <td className="px-6 py-4">
                                    <button
                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 
                                                    focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm
                                                    px-5 py-2.5 mr-2 mb-2"
                                        onClick={() => onProductAdd(product)}>Add</button>
                                </td>}

                        </tr>
                    ))}


                </tbody>
            </table>
        </div>

    )
}

export default ProductsTable