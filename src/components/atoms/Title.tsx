import React, { FC, HTMLAttributes } from "react"
import styled from "styled-components"
import { FlexBox, TFlexBox, fonts, device } from "../../styles"

const Container = styled(FlexBox)`
  max-width: 260px;

  @media only ${device.Laptop} {
    max-width: 400px;
  }
`

type TTextStyled = HTMLAttributes<HTMLSpanElement> & {
  number?: string
  color?: string
}

const TextStyled = styled.span<TTextStyled>`
  position: relative;
  font-family: 'Neue Machina';
  font-size: ${ fonts.extra };
  font-weight: ${ fonts.bold2 };
  color: ${({ color }) => color || 'inherit'};
  z-index: 2;


  &::before {
    content: '${({ number }) => number || '' }';
    font: inherit;
    position: absolute;
    top: -78%;
    left:  -8%;
    opacity: .15;
    font-size: 5.3rem;
    z-index: 1;
  }

  @media only ${device.Laptop} {
    font-size: 3.5rem;
    &::before {
      font-size: 9rem;
    }
  }
`
type TTitle = TFlexBox & {
  text?: string
  number?: string
  color?: string
}


export const Title: FC<TTitle> = ({ text, number, color }) => 
  <Container direction="column">
    <TextStyled number={ number } color={ color }>{ text }</TextStyled>
  </Container>