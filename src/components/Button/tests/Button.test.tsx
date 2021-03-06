import Button from '../Button'
import React from 'react'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('Renders the component', () => {
    render(<Button label="Submit" />)
    screen.getByRole('button', {
      name: /Submit/i
    })
  })

  test('Button has class "small"', () => {
    const { container } = render(<Button label="Submit" size="small" />)
    expect(container.getElementsByClassName('small').length).toBe(1)
  })
})
