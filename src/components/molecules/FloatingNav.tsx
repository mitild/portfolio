import { FC } from 'react'
import styled from 'styled-components'
import { Text } from '../atoms/Text'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 14em;
  align-items: center;
  justify-content: center;
  /* z-index: -1;   */
`

const Card = styled.div`
  width: 60px;
  height: 60px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: .4s ease-in-out, .2s background-color ease-in-out, .2s background-image ease-in-out;
  background: rgba(255, 255, 255, 0.596);
  backdrop-filter: blur(5px);
  border: 1px solid transparent;
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(1){
    opacity: 0;
    transition: .2s ease-in-out;
    background: #cc39a4;
  }
  &:nth-child(2){
    border-radius: 0px;
    opacity: 0;
    transition: .2s ease-in-out;
    background: #03A9F4;
  }
  &:nth-child(3){
    border-top-right-radius: 10px;
    border-top-left-radius: 0px;
    opacity: 0;
    transition: .2s ease-in-out;
    fill: #ffb5d2;
  }
  &:nth-child(4){
    border-radius: 0px;
    opacity: 0;
    transition: .2s ease-in-out;
    fill: black;
  }
  &:nth-child(5) {
    border-radius: 0px;
    position: absolute;
    margin-left: 0.2em;
    margin-top: 0.2em;
    opacity: 0;
    transition: .2s ease-in-out;
  }
`

export const FloatingNav: FC = () => {
  return (
    <Container>
      <Card>X</Card>
      <Card>X</Card>
      <Card>X</Card>
      <Card>Y</Card>
    </Container>
  )
}
