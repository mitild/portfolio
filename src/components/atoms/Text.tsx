import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, fonts, shadows, device } from '../../styles'

type TText = HTMLAttributes<HTMLParagraphElement> & {
  color?: string
  fontSize?: string
  fontWeight?: 'normal' | string
  fontFamily?: string
  sizeLaptop?: string
}

export const Text = styled.p<TText>`
  color: ${({ color }) => color || colors.black.black2};
  font-size: ${({ fontSize }) => fontSize || fonts.base};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-family: ${({ fontFamily }) => fontFamily || fonts.fontFamily};
  text-shadow: ${ shadows.xs };

  @media only ${device.Tablet} {
    font-size: ${({ sizeLaptop }) => sizeLaptop || '' };
  }
`