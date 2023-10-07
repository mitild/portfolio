import { FC, useState } from "react"
import styled, { keyframes } from "styled-components"
import { FlexBox, dimensions, device } from "../../styles"
import { Logo } from "../atoms/Logo"
import { IconSlider } from "./IconSlider"

type TLogoExtended = {
  slide?: boolean
}

const AnimatedLogo = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Container = styled(FlexBox)`
  position: absolute;
  top: ${dimensions.spacing.lg};
  width: 100%;
  padding: 0 ${dimensions.spacing.md};

  @media only ${device.Desktop} {
    max-width: 1300px;
    padding: 0;
  }
`

const LogoStyled = styled(Logo)<TLogoExtended>`
  animation: ${ AnimatedLogo } 1s ease-in-out;
  display: ${({ slide }) => slide ? 'none' : 'block'};

  @media only ${device.Tablet} {
    animation: none;
    display: block;
  }
`

const IconSliderStyled = styled(IconSlider)`
  animation: ${ AnimatedLogo } 1s ease-in-out;
`

export const NavbarTop: FC = () => {
  const [ isSliderOpen, setIsSliderOpen ] = useState<boolean>(false)

  const toggleSlider = () => setIsSliderOpen(prev => !prev)
  return (
    <Container direction="row" justify="space-between" align="center">
      <LogoStyled 
        slide={ isSliderOpen }
        src="/logo.svg"
        alt="site's logo"
        mobile_width="180px"
        desktop_width="200px"
      />
      <IconSliderStyled slide={ isSliderOpen } toggleSlider={ toggleSlider } />
    </Container>
  )
}
