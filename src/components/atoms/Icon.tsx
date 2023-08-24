import {FC, HTMLAttributes, ReactNode} from 'react';
import styled from 'styled-components'
import { device, colors, shadows } from '../../styles';

const IconStyled = styled.span<TIcon>`
  display: flex;
  font-size: ${ ({ font_size }) => `${ font_size }rem` };
  font-weight: ${({ font_weight }) => font_weight || 400};
  text-shadow: ${shadows.small};
  color: ${({ color }) => color || colors.primary};
  transition: all .3s;
  cursor: pointer;
  
  &:hover {
    color: ${colors.secondary}
  }

  @media only ${ device.Tablet } {
    font-size: ${({ font_size }) => `${ font_size! + .5 }rem`};
  }
`

export type TIcon = HTMLAttributes<HTMLImageElement> & {
  icon?: ReactNode
  font_size?: number
  font_weight?: number
  handleClick?: () => void
}

export const Icon: FC<TIcon> = ({
  font_size = 1,
  font_weight = 400,
  icon,
  ...rest 
}) => 
  <IconStyled
    font_size={ font_size }
    font_weight={ font_weight }
    { ...rest }
  >
    { icon }
  </IconStyled>