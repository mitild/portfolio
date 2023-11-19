import { Variants, motion } from "framer-motion"
import styled from "styled-components"
import { colors, device } from "../../styles"

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 5%;
  left: 0;
  z-index: -1;

  @media ${device.Tablet} {
    width: 1600px;
    top: 20%;
  }
`

const BouncingBallStyled = styled.div`
  width: 500px;
  height: 20px;
  border-radius: 50%;
  background: ${colors.primary};
  filter: blur(8px);
  
  @media ${device.Tablet} {
    width: 1000px;
  }
`

const containerVariants: Variants = {
  initial: {
    x: "-150%",
    // y: 0,
  },
  animate: {
    // x: ["0%", "25%", "50%", "75%", "100%"],
    x: "100%",
    // y: ["0%", "70%", "0%", "70%", "0%"],
    transition: {
      duration: 3,
      type: "spring",
      // times: [0, 0.33, 0.6, 0.87, 1],
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
}

export const BouncingBall = () => {
  return (
    <Container
      variants={ containerVariants }
      initial="initial"
      animate="animate"
    >
      <BouncingBallStyled/>
    </Container>
  )
}