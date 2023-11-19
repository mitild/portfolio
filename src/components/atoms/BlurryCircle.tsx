import { FC, HTMLAttributes } from "react"
import styled from "styled-components"
import {dimensions, device, colors} from '../../styles'

const BlurryCircleStyled = styled.span<TBlurryCircle>`
  position: absolute;
  top: ${({ Yposition }) => Yposition || '65%'};
  left: ${({ Xposition }) => Xposition || '-40%'};
  width: 250px;
  height: 250px;
  border-radius: ${dimensions.borderRadius.round};
  opacity: .4;
  background: ${({ color }) => color === 'primary' ? `linear-gradient(180deg, ${ colors.primary} 0%, rgba(28, 32, 35, 0.63) 100%)` : `linear-gradient(180deg, ${ colors.secondary } 0%, rgba(28, 32, 35, 0.63) 100%)`};
  filter: blur(104px);
  backdrop-filter: blur(104px);
  z-index: -1;

  @media only ${device.Tablet} {
    top: ${({ YPositionTablet }) => YPositionTablet || '65%'};
    left: ${({ XPositionTablet }) => XPositionTablet || '-20%'};
  }
  @media only ${device.Laptop} {
    top: ${({ YPositionLaptop }) => YPositionLaptop || '85%'};
    left: ${({ XPositionLaptop }) => XPositionLaptop || '85%'};
  }
`
type TBlurryCircle = HTMLAttributes<HTMLSpanElement> & {
  color?: 'primary' | 'secondary'
  size?: string
  Xposition?: string
  Yposition?: string
  XPositionTablet?: string
  YPositionTablet?: string
  XPositionLaptop?: string
  YPositionLaptop?: string
}

export const BlurryCircle: FC<TBlurryCircle> = ({ 
  color,
  size,
  Xposition,
  Yposition,
  XPositionTablet,
  YPositionTablet,
  XPositionLaptop,
  YPositionLaptop
}) => 
  <BlurryCircleStyled 
    color={ color }
    size={ size }
    Xposition={ Xposition }
    Yposition={ Yposition }
    XPositionTablet={ XPositionTablet }
    YPositionTablet={ YPositionTablet }
    XPositionLaptop={ XPositionLaptop }
    YPositionLaptop={ YPositionLaptop }
  />