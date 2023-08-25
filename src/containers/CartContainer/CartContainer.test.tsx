import { render, screen } from '@testing-library/react';
import CartContainer from '.';
import { ProductsContext } from '../../providers/ProductsProvider';

describe('CartContainer', () => {
    const mockProduct = {
        id: 1,
        name: 'mock product',
        category: 'mock category',
        price: 10
    }

    const mockValue = {
        addProductToCart: () => { },
        cartProducts: [mockProduct],
        totalPrice: 10
    }

    const customeRender = () => (
        render(
            <ProductsContext.Provider value={mockValue}>
                <CartContainer />
            </ProductsContext.Provider>
        )
    )
    it('renders expected elements', () => {
        customeRender()
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('1 product(s) in your cart')
        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(screen.getByText(/total price:10/i)).toBeInTheDocument()
    })
})