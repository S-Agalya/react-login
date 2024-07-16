import {render,screen} from '@testing-library/react'
import Login from '../Login'

test('check whether the login is displayed', () => {
    render(<Login/>)
    expect(screen.queryByText(/Login/)).toBeInTheDocument()
})
