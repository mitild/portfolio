import { FC } from "react"
import styled from "styled-components"
import {FlexBox, colors, device, shadows } from '../../styles'
import { Variants, motion } from "framer-motion"
import { Form } from "./Form"
import { BouncingBall } from "./BouncingBall"
import { MorphLi } from "./MorphLi"
import { Socials } from "../../utils/SocialPaths"
import { Text } from "../atoms/Text"
import { FloatingNav } from "./FloatingNav"

const Container = styled(FlexBox)`
  width: 100vw;
  height: 450px;
  margin-top: 0;
  position: relative;
  border-top: 1px solid rgba(125, 121, 244, .4);
  overflow: hidden;

  @media ${ device.Tablet } {
    margin-top: 5rem;
    height: 500px;
  }
`

const textVariants: Variants = {
  initial: {
    top: -5000,
    opacity: 0,
  },
  animate: {
    top: -10,
    opacity: 1,
    transition: {
      duration: .7,
      type: "spring",
    }
  }
}

type TickerProps = {
  variants: Variants
  whileInView: string
}

const TickerStyled = styled(motion.div)<TickerProps>`
  width: 100%;
  position: absolute;
  top: 0;
  left: -30px;
  /* transform: translateY(-125%); */

  @media ${ device.Tablet } {
    left: 0;
    top: -250px;
    transform: translateY(-5%);
  }
`

const TextStyled = styled.h1`
  font-size: 6rem;
  font-family: 'Neue Machina';
  font-weight: 900;
  color: ${ colors.secondary };
  /* white-space: nowrap; */
  /* word-wrap: break-word; */
  text-transform: uppercase;
  text-shadow: ${ shadows.xs };
  opacity: 0.4;

  @media ${ device.Tablet } {
    font-size: 18rem;
    white-space: nowrap;
  }
`

const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;

  @media ${ device.Laptop } {
    gap: .5rem;
  }
`

export const Footer: FC = () => {
  const icons = Socials.map((icon, i) => {
    return (
      <MorphLi key={ i } icon={ icon.icon } link={ icon.path } />
    )
  })

  return (
    <Container direction="column" align="center" justify="space-between" gap="1rem">
      <TickerStyled variants={ textVariants } whileInView="animate">
        <TextStyled color={ colors.primary }>Contact</TextStyled>
      </TickerStyled>
      <Form />
      <UlStyled>
        { icons } 
      </UlStyled>
      <BouncingBall />
      <FloatingNav />
      <Text color={ colors.secondary } fontSize=".8rem">© Juanma Devs 2023 - All rights reserved</Text>
    </Container>
  )
}