import { screen, render } from '@testing-library/react'
import { SocialIcon } from '../../../components/atoms/SocialIcon'
import { FaLinkedinIn } from 'react-icons/fa';

describe('SocialIcon', () => {

  it('renders correctly', () => {
    render(
      <SocialIcon data-testid="icon"
        icon= { <FaLinkedinIn /> }
        font_size={ 1.5 }
      />
      )
      
      const socialIcon = screen.getByTestId('icon')
      expect(socialIcon).toBeInTheDocument()
      expect(socialIcon).toHaveStyle({ fontSize: '1.5rem' })
  })  
})

