import {FC, useState} from 'react';
import { useLocation } from "react-router-dom"
import {FlexBox, dimensions, shadows, colors, device, fonts, Entrance} from '../styles';
import styled, { keyframes } from 'styled-components'
import { Hero } from "../components/molecules/Hero"
import { Text } from "../components/atoms/Text"
import { AnimatePresence, motion } from 'framer-motion';
import { ImageOverlay } from '../components/molecules/ImageOverlay'
import { BsInstagram, BsBehance } from 'react-icons/bs'
import { Button } from '../components/atoms/Button';

const Container = styled(FlexBox)`
  /* height: 100%; */
  position: relative;
  /* margin-bottom: 20rem; */
`

const SectionStyled = styled(FlexBox)`
  width: 100%;
  max-width: 1300px;
  margin-top: 2rem;
  padding: 0 ${dimensions.spacing.md};
  gap: 2rem;

  @media only ${ device.Laptop } {
    padding: 0;
    margin-top: 3rem;
    gap: 4rem;
  }
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  /* font-size: ${ fonts.base };
  color: ${ colors.primary };
  border: none;
  background: transparent; */
  z-index: 999999;
  /* cursor: pointer;
  transition: all .3s ease-in-out; */

  /* &:hover {
    transform: scale(1.1);
  } */
`

const CloseButtonModal = styled.button`
  position: fixed;
  top: 3rem;
  right: 3rem;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  z-index: 999999;
  cursor: pointer;
  font-family: 'Neue Machina';
  font-size: ${ fonts.base };
  color: ${ colors.primary };
  transition: all .3s ease-in-out;
  animation: ${ Entrance } .8s ease-in-out both;
  text-shadow: ${ shadows.xs };

  &:hover {
    transform: scale(1.1);
  }
`

const TitleWrapper = styled(FlexBox)`
  padding: .5rem 3rem;
  margin: 1rem 0;
  background-color: ${ colors.primary };
  border-radius: ${ dimensions.borderRadius.sm };
  align-self: flex-start;
`

const ImagesContainer = styled(FlexBox)`
  width: 100%;
`

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;

  @media only ${ device.Laptop } {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ImageStyled = styled.img`
  border-radius: ${ dimensions.borderRadius.sm };
  width: 100%;
  aspect-ratio: 900/675;
  box-shadow: ${ shadows.xs };
  cursor: pointer;
`

const variants = {
    exitFinal: {
      opacity: 0,
      originX: 0.5,
      originY: 0.5,
      // scale: 4,
      // transformOrigin: '50% 50%',
      blur: '20px',
      transition: 
        {
          delay: 0.1,
          type: "spring",
          stiffness: 400,
          damping: 40
        },
    }
  }

export const DesignSinglePage: FC = () => {
  const { state } = useLocation()
  const [ overlay, setOverlay ] = useState<boolean>(false)
  const [ image, setImage ] = useState<string>('')
  const [ alt, setAlt ] = useState<string>('')

  const handleOverlay = (src: string, alte?: string) => {
    setImage(src)
    setOverlay(true)
    setAlt(alte!)
  }
  const images: string[] = state.images?.map((image: string, index: number) => {
    const alt = `${state.slogan} - ${state.name}`
    return (
      <ImageStyled  
        src={ image } 
        alt={ alt } 
        key={ index }
        onClick={() => handleOverlay(image, alt) }  
      />
    )
  })

  return (
    <Container justify="center" align="center">
      <Hero 
        image={ state.url }
        title={ state.name } 
        subtitle={ state.slogan } 
        link1={ state.behance } 
        link2={ state.instagram} 
        icon1={ <BsBehance /> }
        icon2={ <BsInstagram /> }
      />
      <SectionStyled justify="center" align="center" direction="column">
        <FlexBox>
          <TitleWrapper>
            <Text
              fontSize="1rem"
              fontWeight="bold"
              sizeLaptop='1.2rem'
            >
              Description
            </Text>
          </TitleWrapper>
          <Text
            color={ colors.white}
            fontSize="1.3rem"
            fontWeight="normal"
            sizeLaptop='1.5rem'
          >
            { state.description }
          </Text>
        </FlexBox>
        <ImagesContainer>
          <TitleWrapper>
            <Text
              fontSize="1rem"
              fontWeight="bold"
              sizeLaptop='1.2rem'
            >
              Imagery
            </Text>
          </TitleWrapper>
          <ImagesWrapper>
            { images }
          </ImagesWrapper>
        </ImagesContainer>
        {/* <ImageOverlay src={ state.url } alt={ state.name } /> */}
        <CloseButton onClick={ ()=> history.back() } arrow='true' text="GO BACK" />
        <AnimatePresence>
          {
            overlay && alt &&
            <motion.div
              variants={ variants }
              exit='exitFinal'
            >
              <ImageOverlay src={ image } alt={ alt } handleClick={ ()=> setOverlay(false) } overlay={ overlay } />
              <CloseButtonModal onClick={ ()=> setOverlay(false) } >
                X
              </CloseButtonModal>
            </motion.div>
          }
      </AnimatePresence>
      </SectionStyled>
    </Container>
  )
}