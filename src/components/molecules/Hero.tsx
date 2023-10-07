import { FC } from "react"
import styled from "styled-components"
import { FlexBox, colors, fonts } from "../../styles"
import { Text } from "../atoms/Text"

type TContainer = {
  image: string
}

const Container = styled(FlexBox)<TContainer>`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(28, 32, 35, 0) 20%, rgb(28, 32, 35) 100%), linear-gradient(0deg, rgba(28, 32, 35, 0) 0%, rgba(28, 32, 35, 0.1) 95%), url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: overlay 0.5s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 130px;
    /* background: linear-gradient(180deg, rgba(28, 32, 35, 0) 0%, rgba(28, 32, 35, 0.377) 60%), linear-gradient(180deg, rgba(28, 32, 35, 0) 0%, rgba(28, 32, 35, 0.2) 60%); */
  }
`

const TextStyled = styled(Text)`
  z-index: 2;
`

type THero = {
  image: string
  title: string
  subtitle: string
  links: string
}

export const Hero: FC<THero> = ({ image, title, subtitle, links }) => {
  return (
    <Container image={ image } align="end" justify="flex-end">
      <TextStyled 
        fontSize={ fonts.display }
        fontWeight={ fonts.bold2 }
        fontFamily="Neue Machina"
        color={ colors.primary }
        gradient="primary"
      >
        { title }
      </TextStyled>
      <Text 
        fontSize={ fonts.h1 }
        fontWeight={ fonts.bold }
        fontFamily="Neue Machina"
        color={ colors.white }
      >
        { subtitle}
      </Text>
    </Container>
  )
}