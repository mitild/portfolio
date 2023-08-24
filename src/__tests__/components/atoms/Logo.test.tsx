import { screen, render } from '@testing-library/react'
import { Logo } from '../../../components/atoms/Logo'

describe('Logo', () => {

  it('renders correctly', () => {
    render(
      <Logo 
        src="/logo.svg"
        alt="site's logo"
        mobile_width="120px"
        desktop_width="250px"
      />
    )

    const logo = screen.getByAltText(/site's logo/i)
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/logo.svg')
    expect(logo).toHaveStyle({ width: '120px' })
  })
})