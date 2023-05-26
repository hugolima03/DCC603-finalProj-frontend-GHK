import { render, screen } from '@testing-library/react'

import Task from '.'

describe('<Task />', () => {
  it('should render the text correctly', () => {
    render(<Task />)

    expect(screen.getByText(/Task/i)).toBeTruthy()
  })
})
