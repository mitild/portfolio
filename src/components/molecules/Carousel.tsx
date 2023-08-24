import { useState, useRef, FC, HTMLAttributes, useEffect } from "react" 
import styled from "styled-components"
import { motion } from "framer-motion"
import { FlexBox, dimensions, device, fonts } from '../../styles';

type TCarouselContainer = HTMLAttributes<HTMLDivElement> & {
  carousel_width: number
}

type TCarouselItem = HTMLAttributes<HTMLImageElement> & {
  img_width: number
}

const CarouselContainer = styled(FlexBox)`
  width: 100%;
`

const InnerCarousel = styled(FlexBox)<TCarouselContainer>`
  min-width: ${({ carousel_width }) => (carousel_width) + 'px'};
  cursor: grab;
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

  &:hover {
    z-index: 99;
    opacity: .1;  
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

export type TImages = {
  src: string;
  name?: string;
  alt?: string;
}[]

type TCarouselProps = HTMLAttributes<HTMLDivElement> & {
  images: TImages
}

export const Carousel: FC<TCarouselProps> = ({ images }) => {
  const [ width, setWidth ] = useState(0)
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  const [ isHovered, setIsHovered ] = useState(false)
  const imageWidth = windowWidth > 960 ? 400 : 300
  const carouselRef = useRef<HTMLDivElement>(null)
  const innerWidth: number = images.length * (imageWidth + 8)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    const carousel = carouselRef?.current
    setWidth(carousel!.scrollWidth - carousel!.offsetWidth )

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  
  return (
    <CarouselContainer 
      justify="flex-start"
      align="start"
      as={ motion.div } 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      ref={ carouselRef }
    >
      <InnerCarousel 
        as={ motion.div } 
        direction="row" 
        gap="1rem" 
        justify="flex-start"
        align="start"
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
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
              >
                { name }
              </TextStyled>
            }
            <CarouselItem  
              // key={ index }
              src={src} 
              alt={`${name} cover`} 
              img_width={ imageWidth }
              initial={{ filter:'none' }}
              whileHover={{ filter: 'blur(3px)', opacity: .1 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </ItemWrapper>
          ) 
        }
      </InnerCarousel>
    </CarouselContainer>
  )
}
