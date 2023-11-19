import { motion, Variants } from "framer-motion"
import styled from "styled-components"
import { colors } from "../../styles"

type TContainer = {
  variants: Variants
  initial: string
  animate: string
}

const Container = styled(motion.div)<TContainer>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const BouncingBallStyled = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${colors.secondary};
  filter: blur(80px);
  opacity: .2;
`

const circleVariants: Variants = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: ["0%", "25%", "50%", "75%", "100%"],
    y: ["0%", "100%", "0%", "100%", "0%"],
    transition: {
      duration: 5,
      times: [0, 0.33, 0.6, 0.87, 1],
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
}

export const Test = () => {
  return (
    <Container
      variants={ circleVariants }
      initial="initial"
      animate="animate"
    >
      <BouncingBallStyled/>
    </Container>
  )
}