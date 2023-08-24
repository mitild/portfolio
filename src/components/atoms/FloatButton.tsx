import { FC, HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { Text } from "./Text"
import { Icon } from "./Icon"
import { colors, device, dimensions } from "../../styles"
import { BiDownload } from "react-icons/bi"

type TButtonStyled = {
  size?: string
  laptop_size?: string
}

const AnimatedShadow = keyframes`
  100% {
    box-shadow: 0 0 0 45px rgba(193,244,246,0), 0 0 0 35px rgba(193,244,246,0);
  }
`

const ButtonStyled = styled.button<TButtonStyled>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${ ({ size }) => size || '60px' };
  height: ${ ({ size }) => size || '60px' };
  line-height: .8;
  border: none;
  border-radius: ${dimensions.borderRadius.round};
  background: linear-gradient(180deg, rgba(164, 161, 254, 1) 0%, rgba(255, 255, 255, 0.00) 100%, #A4A1FE 100%);
  backdrop-filter: blur(0.2px) drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
  box-shadow: 0 0 4px 25px rgba(164, 161, 254, 0.15), 0 0 4px 13px rgba(164, 161, 254, 0.15);
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    animation: ${AnimatedShadow} .9s cubic-bezier(0.9, .8, 0, .4) 0s infinite normal none running;
    transform: scale(1.1);
  }

  @media only ${device.Tablet} {
    width: ${ ({ laptop_size }) => laptop_size || '85px' };
    height: ${ ({ laptop_size }) => laptop_size || '85px' };
  }
`

const TextStyled = styled(Text)`
  font-size: 1.2rem;

  @media only ${device.Tablet} {
    font-size: 1.9rem;
  }
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`

type TFloatButton = HTMLAttributes<HTMLButtonElement> & {
  size?: string
  laptop_size?: string
  file: string | '/'
}

export const FloatButton: FC<TFloatButton> = ({ size, laptop_size, file }) =>
  <LinkStyled to={ file } target="_blank" download={ file }>
    <ButtonStyled size={ size } laptop_size={ laptop_size }>
      <TextStyled
        fontWeight="700"
        color={colors.secondary}
      >
        CV
      </TextStyled>
      <Icon icon={ <BiDownload /> }  color={ colors.secondary } />
    </ButtonStyled>
  </LinkStyled>

