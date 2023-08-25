import { render, screen } from '@testing-library/react';
import ProductsTable from '.';
import userEvent from '@testing-library/user-event';

describe('ProductsTable', () => {
    const mockProduct = {
        id: 1,
        name: 'mock product',
        category: 'mock category',
        price: 10
    }
    const defaultProps = {
        products: [mockProduct],
        hasAddButton: false

    }
    it('renders default content with mock product', () => {
        render(<ProductsTable {...defaultProps} />)

        expect(screen.getByRole('table')).toBeInTheDocument()

        expect(screen.getByRole('columnheader', { name: 'Product name' })).toBeInTheDocument()
        expect(screen.getByRole('columnheader', { name: 'Category' })).toBeInTheDocument()
        expect(screen.getByRole('columnheader', { name: 'Price' })).toBeInTheDocument()

        expect(screen.getByRole('rowheader', { name: 'mock product' })).toBeInTheDocument()
        expect(screen.getByRole('cell', { name: 'mock category' })).toBeInTheDocument()
        expect(screen.getByRole('cell', { name: '10' })).toBeInTheDocument()
    })

    it('renders a add product button when hasAddButton is true', () => {
        render(<ProductsTable {...defaultProps} hasAddButton={true} />)

        expect(screen.getByRole('columnheader', { name: 'Add To Cart' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
    })

    it('calls add product function when add product button is clicked', async () => {
        const user = userEvent.setup()
        const mockOnProductAdd = jest.fn()
        render(<ProductsTable {...defaultProps} hasAddButton={true} onProductAdd={mockOnProductAdd} />)

        await user.click(screen.getByRole('button', { name: 'Add' }))

        expect(mockOnProductAdd).toHaveBeenCalledWith(mockProduct)
    })

})