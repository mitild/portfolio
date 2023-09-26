import { FC, HTMLAttributes, useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-multi-carousel'
import { motion } from 'framer-motion'
import { FlexBox, dimensions, fonts, device } from '../../styles'

const MainContainer = styled(FlexBox)`
  position: relative;
  width: 100vw;
  padding-left: 1.5rem;

  @media only ${ device.Laptop } {
    padding-left: 7rem;
  }
`

const Container = styled(Carousel)`
  width: 100%;
  height: 100%;
  /* gap: 1rem; */
  /* justify-content: space-between;
  gap: 5rem; */
`

const ItemWrapper = styled(FlexBox)`
  position: relative; 
  max-width: 350px;
  height: 100%;
  /* min-width: 300px; */
  padding-right: .5rem;
  border-radius: ${dimensions.borderRadius.base};

  @media only ${ device.Laptop } {
    width: 350px;
    padding-right: 1rem;
    /* padding-right: 4.5rem; */
  }
`

const CarouselItem = styled(motion.img)`
  position: relative;
  /* min-width: 300px;
  max-width: 300px; */
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
    // partialVisibilityGutter: 40
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
    // partialVisibilityGutter: 90
  }
}

export type TImages = {
  src: string;
  name?: string;
  alt?: string;
}[]

type TCarouselProps = HTMLAttributes<HTMLDivElement> & {
  images: TImages
  id: string
}

export const MCarousel: FC<TCarouselProps> = ({ images, id }) => {
  const [ isHovered, setIsHovered ] = useState<boolean>(false)

  const items = images.map(({src, name}, index) => 
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
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </ItemWrapper>
    ) 
        
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
  </MainContainer>
)}
