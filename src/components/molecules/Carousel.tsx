/* eslint-disable no-unused-vars */
import { useState, useRef, FC, HTMLAttributes, useEffect } from "react" 
import styled from "styled-components"
import { motion } from "framer-motion"
import {FlexBox, dimensions, fonts, colors, device, shadows} from '../../styles'


type TCarouselContainer = HTMLAttributes<HTMLDivElement> & {
  carousel_width: number
}

type TCarouselItem = HTMLAttributes<HTMLImageElement> & {
  img_width: number
}

const CarouselContainer = styled(FlexBox)`
  width: 100%;
  position: relative;
  /* margin-left: 13rem; */
`

const InnerCarousel = styled(FlexBox)<TCarouselContainer>`
  width: max-content;
  cursor: grab;
  transition: all .3s ease-in-out;
`

const ItemWrapper = styled(FlexBox)`
  position: relative; 
  width: 100%;
  height: 100%;
`

const CarouselItem = styled(motion.img)<TCarouselItem>`
  position: relative;
  width: ${({ img_width }) => img_width + 'px'};
  aspect-ratio: 900/675;
  border-radius: ${dimensions.borderRadius.base};
  z-index: 99;
  cursor: pointer;
  transition: all .3s ease-in-out;
  transition-delay: .1s;

  &:hover {
    z-index: 99;
    opacity: .1;  
    filter: blur(3px);
  }
`

const TextStyled = styled(motion.p)`
  position: absolute;
  font-family: 'Neue Machina';
  font-size: ${ fonts.bigger };
  font-weight: ${ fonts.bold2 };
  background: linear-gradient(180deg, rgb(28, 32, 35, .5) 0%, rgb(23, 26, 29, .5) 100%);
  backdrop-filter: blur(3px);
`

const ArrowLeft = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: auto;
  left: 1%;
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
  color: ${ colors.secondary };
  text-shadow: ${ shadows.xs };
  font-size: ${ fonts.extra };
  font-weight: ${ fonts.bold2 };
  background: linear-gradient(107deg, rgba(28, 32, 35, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%);
  box-shadow: 3.5px 3.5px 19px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.9);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    scale: 1.1;
  }

  @media only ${ device.Laptop } {
    /* right: 100%; */
  }
`

const ArrowRight = styled(ArrowLeft)`
  right: 1%;
  left: auto;

  @media only ${ device.Laptop } {
    /* right: 0; */
  }
`

export type TImages = {
  src: string;
  name?: string;
  alt?: string;
}[]

type TCarouselProps = HTMLAttributes<HTMLDivElement> & {
  images: TImages
  id: string
}

export const Carousel: FC<TCarouselProps> = ({ images, id }) => {
  const [ windowWidth, setWindowWidth ] = useState<number>(window.innerWidth)
  const [ isHovered, setIsHovered ] = useState<boolean>(false)
  const imageWidth: number = windowWidth > 960 ? 400 : 300
  const carouselRef = useRef<HTMLDivElement>(null)
  const innerCarouselRef = useRef<HTMLDivElement>(null)
  const innerWidth: number = images.length * (imageWidth + 8)

const debounce = <T extends (...args: string[]) => void>(fn: T, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> 

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

  const handleResize: () => void = () => {
    setWindowWidth(window.innerWidth)
  }

  const debouncedHandleResize: () => void = debounce(handleResize, 200)

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize)

    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [debouncedHandleResize])

  const handleSlider: (direction: string) => void = (direction) => {
    const carousel = innerCarouselRef!.current
    const clientLeft: number = carousel!.getBoundingClientRect().left
    const clientRight: number = carousel!.getBoundingClientRect().right

    if(clientLeft > 0) {
      innerCarouselRef.current!.style.transform = `translateX(0)`
    }
    if(clientRight < windowWidth) {
      innerCarouselRef.current!.style.transform = `translateX(0)`
    }
    if(direction === 'left' && clientLeft < 0) {
      const newPosition: number = Math.min(0, clientLeft + windowWidth)
      innerCarouselRef.current!.style.transform = `translateX(${newPosition}px)`
      
    }
    else if(direction === 'right' && clientRight > windowWidth) {
      const spaceForOneImage: number = imageWidth - 98
      const additional: number = windowWidth > 960 ? spaceForOneImage : windowWidth * 0.47
      const newPosition: number = Math.max(-innerWidth + windowWidth - additional, clientLeft - windowWidth - additional)
      innerCarouselRef.current!.style.transform = `translateX(${newPosition}px)`
    }

  }
  
  const debouncedHandleSlider: (direction: string) => void = debounce(handleSlider, 200)
  
  return (
    <CarouselContainer 
      justify="flex-start"
      align="start"
      as={ motion.div } 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      ref={ carouselRef }
    >
      <ArrowLeft
        onClick={ () => debouncedHandleSlider('left') }
      > {'<'} 
      </ArrowLeft>
      <InnerCarousel 
        as={ motion.div } 
        id={ id }
        ref={ innerCarouselRef }
        direction="row" 
        gap="1rem" 
        justify="flex-start"
        align="start"
        carousel_width={ innerWidth }
      >
        { 
          images.map(({src, name}, index) => 
          <ItemWrapper key={ index }>
            {
              isHovered &&
              <TextStyled
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .1 }}
              >
                { name }
              </TextStyled>
            }
            <CarouselItem  
              src={src} 
              alt={`${name} cover`} 
              img_width={ imageWidth }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </ItemWrapper>
          ) 
        }
      </InnerCarousel>
      <ArrowRight
        onClick={ () => debouncedHandleSlider('right') }
      >
        {'>'} 
      </ArrowRight>
    </CarouselContainer>
  )
}
