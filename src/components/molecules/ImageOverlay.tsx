import { FC } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { FlexBox, Entrance } from '../../styles'
import { Ticker } from './Ticker'

const Exit = keyframes`
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(20px);
  }
`

interface TContainer {
  overlay?: boolean
}

const Container = styled(FlexBox)<TContainer>`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  top: 0;
  left: 0;
  background: linear-gradient(107deg, rgba(28, 32, 35, 0.8) 0%, rgba(72, 71, 71, 0.6) 100%);
  box-shadow: 3.5px 3.5px 19px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  overflow-x: hidden;
  z-index: 99999;
  color: black;
  animation: ${ Entrance } .8s ease-in-out both;
  /* animation: ${({ overlay }) => overlay ? css`${ Entrance } .8s ease-in-out both` : css`${ Exit } .8s ease-in-out both`}; */
`

const ImageStyled = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 99;
  background: transparent;
`

// const CloseButton = styled.button`
//   position: absolute;
//   top: 2rem;
//   right: 2rem;
//   width: 2rem;
//   height: 2rem;
//   border: none;
//   background: transparent;
//   z-index: 999999;
//   cursor: pointer;
//   transition: all .3s ease-in-out;

//   &:hover {
//     transform: scale(1.1);
//   }
// `

type TImageOverlay = {
  src?: string
  alt?: string
  handleClick?: () => void
  overlay?: boolean
}

export const ImageOverlay: FC<TImageOverlay> = ({ src, alt, overlay }) => {
  const array: string[] = [ alt!, alt!, alt!, alt!, alt! ]

  return (
    <Container overlay={ overlay }>
      <Ticker text={ array } color="primary" rotate={ 90 } dir="left" />
      {/* <CloseButton onClick={ () => window.history.back() } >
        X
      </CloseButton> */}
      {/* <CloseButton onClick={ handleClick } >
        X
      </CloseButton> */}
      <ImageStyled src={ src } alt={ alt } />
      <Ticker text={ array } color="secondary" rotate={ -90 } dir="left" />
    </Container>
  )
}