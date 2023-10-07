import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, fonts, shadows, device } from '../../styles'

type TText = HTMLAttributes<HTMLParagraphElement> & {
  color?: string
  fontSize?: string
  fontWeight?: 'normal' | string
  fontFamily?: string
  sizeLaptop?: string
  gradient?: 'primary' | 'secondary' | undefined
}

export const Text = styled.p<TText>`
  color: ${({ color }) => color || colors.black.black2};
  font-size: ${({ fontSize }) => fontSize || fonts.base};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  font-family: ${({ fontFamily }) => fontFamily || fonts.fontFamily};
  text-shadow: ${ shadows.xs };
  background: ${({ gradient }) => gradient === 'primary' ? `linear-gradient(-87deg, rgb(207, 255, 147, 0.3) 0%, #CFFF93 100%)` : gradient === 'secondary' ? `linear-gradient(-87deg, rgba(164, 161, 254, 0.3) 0%, rgb(164, 161, 254) 100%)` : ''};  
  background-clip: ${({ gradient }) => gradient !== undefined ? 'text' : ''};
  -webkit-background-clip: ${({ gradient }) => gradient !== undefined ? 'text' : ''};
  -webkit-text-fill-color: ${({ gradient }) => gradient !== undefined ? 'transparent' : ''};

  @media only ${device.Tablet} {
    font-size: ${({ sizeLaptop }) => sizeLaptop || '' };
  }
`