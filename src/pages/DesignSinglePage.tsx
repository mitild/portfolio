import { FC } from "react"
import { useLocation } from "react-router-dom"
import { ImageOverlay } from "../components/molecules/ImageOverlay"
import styled from 'styled-components'
import { Hero } from "../components/molecules/Hero"

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  z-index: 999999;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const DesignSinglePage: FC = () => {
  const { state } = useLocation()

  return (
    <>
      <Hero image={ state.url } title={ state.name } subtitle={ state.description } links={ state.url } />
      {/* <ImageOverlay src={ state.url } alt={ state.name } /> */}
      <CloseButton onClick={ ()=> history.back() } >
        X
      </CloseButton>
    </>
  )
}