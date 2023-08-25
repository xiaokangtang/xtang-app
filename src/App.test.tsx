import { render, screen } from '@testing-library/react';
import useAxios from 'axios-hooks';

import App from './App';

jest.mock('axios-hooks')

describe('App', () => {
    const mockProduct = {
        id: 1,
        name: 'mock product',
        category: 'mock category',
        price: 10
    }

    it('renders page heading when api returns valid data', () => {
        // @ts-expect-error
        useAxios.mockReturnValue([{ data: [mockProduct] }])

        render(<App />)
        expect(screen.getByRole('heading', { level: 1, name: /products page/i })).toBeInTheDocument()
    })

    it('renders no result alert when api returns empty data', () => {
        // @ts-expect-error
        useAxios.mockReturnValue([{ data: [] }])

        render(<App />)
        expect(screen.getByRole('alert')).toHaveTextContent(/We cannot find any product available/i)
    })

    it('renders error when api returns error', () => {
        const mockMessage = 'this is an error'
        const error = {
            message: mockMessage
        }
        // @ts-expect-error
        useAxios.mockReturnValue([{ data: null, error: error }])

        render(<App />)
        expect(screen.getByRole('alert')).toHaveTextContent(mockMessage)
    })

    it('renders loading state when api call is loading', () => {

        // @ts-expect-error
        useAxios.mockReturnValue([{ data: null, error: null, loading: true }])

        render(<App />)
        expect(screen.getByText(/loading/i)).toBeInTheDocument()
    })
})