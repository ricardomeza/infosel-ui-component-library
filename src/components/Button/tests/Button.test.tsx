import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  test('Renders the component', () => {
    render(<Button label="Submit" />)
    screen.getByRole('button', {
      name: /Submit/i
    })
  })

  test('Button has class "small"', () => {
    const { container } = render(<Button label="Submit" size="small" />)
    expect(container.firstChild).toHaveClass('small')
  })
})
