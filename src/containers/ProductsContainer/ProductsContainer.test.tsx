import { render, screen } from '@testing-library/react';
import ProductsContainer from '.';
import { ProductsContext } from '../../providers/ProductsProvider';

describe('ProductsContainer', () => {
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

    const defaultProps = {
        displayedProducts: [mockProduct]
    }

    const customeRender = () => (
        render(
            <ProductsContext.Provider value={mockValue}>
                <ProductsContainer {...defaultProps} />
            </ProductsContext.Provider>
        )
    )
    it('renders expected elements', () => {
        customeRender()
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('There are 1 product(s) available')
        expect(screen.getByRole('table')).toBeInTheDocument()

    })
})