import useAxios from 'axios-hooks';
import { ErrorBoundary } from 'react-error-boundary';

import { useCallback, useEffect, useState } from 'react';

import ErrorMessage from './components/ErrorMessage';
import NoResult from './components/NoResult';

import { Product } from './typings';
import ProductsContainer from './containers/ProductsContainer';
import Filter from './containers/Filter';
import CartContainer from './containers/CartContainer';

export const url =
  'http://localhost:8080/api/products';

const App: React.FC = () => {



  const [products, setProducts] = useState<Product[]>([])
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([])

  const [{ data, loading, error }] = useAxios(url)

  useEffect(() => {
    if (data) {
      setProducts(data)
      setDisplayedProducts(data)
    }
  }, [data])

  const getCategories = useCallback(() => {
    const categories: Product['category'][] = []
    products.forEach((product) => {
      if (categories.indexOf(product.category) < 0) {
        categories.push(product.category)
      }
    })
    return categories
  }, [products])

  const onSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    const selectedProducts = products.filter((product: Product) => product.category === selectedValue)
    setDisplayedProducts(selectedProducts)

  }, [products])

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <p>loading...</p>
  }

  if (products.length === 0) {
    return <NoResult />
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <main>
        <h1 className="my-4 text-center text-2xl font-bold">Products Page</h1>
        <div className="m-6">
          <Filter categories={getCategories()} onSelectChange={onSelectChange} />
        </div>
        <div className="m-6"><ProductsContainer displayedProducts={displayedProducts} /></div>
        <div className="m-6"><CartContainer /></div>

      </main>
    </ErrorBoundary>

  )
}

export default App;
