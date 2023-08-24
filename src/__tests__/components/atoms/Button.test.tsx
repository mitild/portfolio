import { screen, render } from '@testing-library/react'
import { Button } from '../../../components/atoms/Button'

describe('Button', () => {

  it('renders correctly', () => {
    render(
      <Button text='test button' arrow='true'/>
      )
      
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('test button')
      expect(button).toHaveStyle({ width: '110px' })
  })  
})