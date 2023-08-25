import { render, screen } from '@testing-library/react';
import NoResult from '.';

describe('NoResult', () => {
    it('renders default message', () => {
        render(<NoResult />)
        expect(screen.getByRole('alert')).toHaveTextContent(/We cannot find any product available/i)
    })
})