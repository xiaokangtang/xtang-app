import { render, screen } from '@testing-library/react';
import Filter from '.';
import userEvent from '@testing-library/user-event';

describe('Filter', () => {
    const defaultProps = {
        categories: ['mockCategoryA', 'mockCategoryB'],
        onSelectChange: () => { }
    }
    it('renders label, select elements', () => {
        render(<Filter {...defaultProps} />)

        expect(screen.getByRole('combobox', { name: "Select a Category" })).toBeInTheDocument()
        expect(screen.getByRole('option', { name: "mockCategoryA" })).toBeInTheDocument()
        expect(screen.getByRole('option', { name: "mockCategoryB" })).toBeInTheDocument()
    })

    it('select option calls onSelectChange', async () => {
        const user = userEvent.setup()
        const mockOnSelectChange = jest.fn()
        render(<Filter {...defaultProps} onSelectChange={mockOnSelectChange} />)

        await user.selectOptions(screen.getByRole('combobox'), "mockCategoryA")

        expect(mockOnSelectChange).toHaveBeenCalled()
    })

})