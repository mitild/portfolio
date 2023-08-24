import { FC, HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { device, shadows } from "../../styles"

const LogoStyled = styled.img<TLogo>`
  width: ${({ mobile_width }) => mobile_width};
  filter: drop-shadow(${shadows.small});
  transition: all .3s;

  @media only ${device.Tablet} {
    width: ${({ desktop_width }) => desktop_width};
  }
`

type TLogo = HTMLAttributes<HTMLImageElement> & {
  src: string
  mobile_width: string
  desktop_width: string
  alt: string
}

export const Logo: FC<TLogo> = ({
  src = '',
  mobile_width ='',
  desktop_width ='',
  alt ='',
  ...rest
}) => 
  <Link to="/">
    <LogoStyled 
      src={ src } 
      alt={ alt }
      mobile_width={ mobile_width } 
      desktop_width={ desktop_width } 
      { ...rest }
    />
  </Link>