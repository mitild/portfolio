import {FC, HTMLAttributes, ReactNode} from 'react';
import styled from 'styled-components'
import { device, colors, shadows } from '../../styles';

const IconStyled = styled.span<TIcon>`
  display: flex;
  font-size: ${ ({ font_size }) => `${ font_size }rem` };
  text-shadow: ${shadows.small};
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
  handleClick?: () => void
}

export const SocialIcon: FC<TIcon> = ({
  font_size = 1.5,
  icon,
  ...rest 
}) => 
  <IconStyled
    font_size={ font_size }
    { ...rest }
  >
    { icon }
  </IconStyled>