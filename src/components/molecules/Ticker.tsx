import { FC, HTMLAttributes } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { FlexBox, dimensions, colors, fonts, shadows } from '../../styles'

type Tcontainer = HTMLAttributes<HTMLDivElement> & {
  color?: 'primary' | 'secondary'
  rotate?: number
}

const Container = styled(FlexBox)<Tcontainer>`
  width: 100vw;
  background-color: ${({ color }) => color === 'secondary' ? `${colors.secondary}` : `${colors.primary}`};
  box-shadow: ${shadows.small};
  color: ${colors.black.black2};
  padding-block: ${dimensions.spacing.xs} ${dimensions.spacing.xxxs};
  overflow: hidden;
  position: relative;
  user-select: none;
  font-family: 'Neue Machina';
  font-size: 1.4rem;
  font-weight: ${fonts.medium};
  text-transform: uppercase;
  text-shadow: ${shadows.xs};
  transform: ${ ({ rotate }) => `rotate(${ rotate }deg)` };
`

const tickerLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - .7rem));
  }
`

const tickerRight = keyframes`
  from {
    transform: translateX(calc(-100% - .7rem));
  }
  to {
    transform: translateX(0);
  }
`

const TickerStyled = styled(FlexBox)`
  flex-shrink: 0;
  min-width: 100%;
  animation: ${({ dir }) => dir === 'left' ? css`${ tickerLeft } 10s linear infinite` : css`${ tickerRight } 10s linear infinite`};
`

const TickerSpan = styled.span`
`

type TTicker = HTMLAttributes<HTMLDivElement> & {
  text: string[]
  color?: 'primary' | 'secondary'
  rotate?: number
  dir?: 'left' | 'right'
}

export const Ticker: FC<TTicker> = ({ text, color, rotate, dir }) => {
  
  return (
    <Container 
      direction='row' 
      justify='flex-start' 
      align='start'  
      // gap='1rem' 
      color={ color } 
      rotate={ rotate }
    >

        <TickerStyled direction='row' justify='space-around' align='start' gap='1rem' dir={ dir }>
          <TickerSpan> { text.join(' - ')} </TickerSpan>          
        </TickerStyled>
      
        <TickerStyled direction='row' justify='space-around' align='start' gap='1rem' dir={ dir }>
          <TickerSpan> - { text.join(' - ')} </TickerSpan>          
        </TickerStyled>
 
    </Container>
  )
}