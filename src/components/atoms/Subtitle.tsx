
import { FC } from 'react'
import styled from 'styled-components'
import { Text } from '../atoms/Text'
import { FlexBox, device, fonts } from '../../styles'

const Container = styled(FlexBox)`
  width: 100%;
  text-align: right;
  max-width: 300px;
  align-self: flex-end;

  @media only ${device.Tablet} {
    padding: 0;
    max-width: 400px;
    align-self: center;     
  }
`

const TextStyled = styled(Text)`
  background: ${({ color }) => color === 'primary' ? `linear-gradient(-87deg, rgb(207, 255, 147, 0.3) 0%, #CFFF93 100%)` : `linear-gradient(-87deg, rgba(164, 161, 254, 0.3) 0%, rgb(164, 161, 254) 100%)`};  
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

type TSubtitle = {
  text?: string | JSX.Element
  color?: 'primary' | 'secondary'
}

export const Subtitle: FC<TSubtitle> = ({ text, color }) => 
  <Container direction="column" gap="0" align="center" justify="center">
    <TextStyled fontSize={ fonts.h2 } sizeLaptop={ fonts.h1 } fontWeight={fonts.medium} color={ color }>{ text }</TextStyled>
  </Container>