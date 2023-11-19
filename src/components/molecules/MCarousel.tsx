import { FC, HTMLAttributes, ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import { AnimatePresence, motion } from 'framer-motion'
import { FlexBox, dimensions, fonts, device, colors, shadows, Entrance } from '../../styles'
import { ImageOverlay } from '../molecules/ImageOverlay'

const MainContainer = styled(FlexBox)`
  position: relative;
  width: 100vw;
  max-width: 1530px;
  padding-left: 1.5rem;

  @media only ${ device.Laptop } {
    padding-left: 7rem;
  }
`

const Container = styled(Carousel)`
  width: 100%;
  height: 100%;
`

const ItemWrapper = styled(FlexBox)`
  position: relative; 
  max-width: 350px;
  height: 100%;
  padding-right: .5rem;
  border-radius: ${dimensions.borderRadius.base};

  @media only ${ device.Laptop } {
    width: 350px;
    padding-right: 1rem;
  }
`

const CarouselItem = styled(motion.img)`
  width: 100%;
  aspect-ratio: 900/675;
  border-radius: ${dimensions.borderRadius.base};
  z-index: 99;
  cursor: pointer;
  transition: all .3s ease-in-out;
  transition-delay: .1s;

  @media only ${ device.Laptop } {
    width: 100%;
  }

  &:hover {
    z-index: 99;
    opacity: .1;  
    filter: blur(3px);
  }
`

const TextStyled = styled(motion.p)`
  position: absolute;
  font-family: 'Neue Machina';
  font-size: ${ fonts.big };
  font-weight: ${ fonts.bold2 };
  background: linear-gradient(180deg, rgb(28, 32, 35, .5) 0%, rgb(23, 26, 29, .5) 100%);
  backdrop-filter: blur(3px);
`

const LinkStyled = styled(Link)`
  z-index: 999;
`

const CloseButton = styled.button`
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

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 10
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
}

export type TImages = {
  src: string
  name?: string
  alt?: string
  page?: boolean
  slogan?: string
  description?: string
  behance?: string
  instagram?: string
  images?: string[]
}[]

type TCarouselProps = HTMLAttributes<HTMLDivElement> & {
  images: TImages
}

export const MCarousel: FC<TCarouselProps> = ({ images }) => {
  const [ isHovered, setIsHovered ] = useState<boolean>(false)
  const [ overlay, setOverlay ] = useState<boolean>(false)
  const [ image, setImage ] = useState<string>('')
  const [ alt, setAlt ] = useState<string>('')

  const variants = {
    entranceInitial: {
      opacity: 0,
      originX: 0.5,
      originY: 0.5,
      scaleX: 2,
      scaleY: 2,
      blur: '90px'
    },
    entranceFinal: {
      opacity: 1,
      originX: 0.5,
      originY: 0.5,
      scaleY: 1,
      scaleX: 1,
      blur: '0px',
      transition: 
        {
          delay: 0.1,
          duration: 2,
        },
    },
    exitInitial: {
      opacity: 1,
      // transformOrigin: '50% 50%',
      // transform: 'scale(1, 1)',
      // blur: 'blur(0px)'
    },
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


  const handleOverlay = (src: string, alte?: string) => {
    setImage(src)
    setOverlay(true)
    setAlt(alte!)
  }

  const items: ReactNode[] = images.map(({ src, name, alt, page, description, slogan, images, instagram, behance }, index) => {
    const nameAsParam = name!.split(' ').join('_')

    return (
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
        {
          page
          ?
          <LinkStyled to={ `designs/${ nameAsParam }` } state={{ url: src, name, description, slogan, images, instagram, behance }}>
            <CarouselItem  
              onClick={ ()=> window.scrollTo({ top: 0 })}
              src={ src } 
              alt={ name }  
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </LinkStyled>
          :
          <CarouselItem  
            src={ src } 
            alt={ alt }  
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleOverlay(src, alt) }
          />
        }
      </ItemWrapper>
    )
}) 
        
return (
  <MainContainer direction='row'>
    <Container
      responsive={responsive}
      containerClass="carousel-container"
      itemClass="carousel-item"
      partialVisible={false}
      swipeable={true}
      draggable={true}
      transitionDuration={100}
      centerMode={false}
    >
      { items }
    </Container>
    <AnimatePresence>
      {
        overlay && alt &&
        <motion.div
          variants={ variants }
          exit='exitFinal'
        >
          <ImageOverlay src={ image } alt={ alt } handleClick={ ()=> setOverlay(false) } overlay={ overlay } />
          <CloseButton onClick={ ()=> setOverlay(false) } >
            X
          </CloseButton>
        </motion.div>
      }
    </AnimatePresence>
  </MainContainer>
)}
