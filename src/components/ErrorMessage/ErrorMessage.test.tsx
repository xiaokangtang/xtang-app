
import { render, screen } from '@testing-library/react';
import ErrorMessage from '.';

describe('ErrorMessage', () => {
    it('renders default message', () => {
        render(<ErrorMessage />)
        expect(screen.getByRole('alert')).toHaveTextContent(/Search Reuqest failed with an unknown issue./i)
    })

    it('renders message passed down in prop', () => {
        const mockMessage = 'this is an error'
        const error = {
            message: mockMessage
        }
        render(<ErrorMessage error={error} />)
        expect(screen.getByRole('alert')).toHaveTextContent(mockMessage)
    })
})