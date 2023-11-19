import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {FlexBox, colors, fonts, device, dimensions} from '../../styles';
import { Text } from "../atoms/Text"
import { Icon } from '../atoms/Icon'


type TContainer = {
  image: string
  position?: string
}

const Container = styled(FlexBox)<TContainer>`
  position: relative;
  width: 100%;
  height: 40svh;
  padding: 0 ${dimensions.spacing.md} ${dimensions.spacing.xl};
  background: linear-gradient(180deg, rgba(28, 32, 35, 0) 20%, rgb(28, 32, 35) 100%), linear-gradient(0deg, rgba(28, 32, 35, 0) 0%, rgba(28, 32, 35, 0.1) 95%), url(${({ image }) => image});
  background-size: cover;
  background-position: ${({ position }) => position || 'center'};
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  filter: overlay 0.5s ease-in-out;
    
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(180deg, rgba(28, 32, 35, 0) 0%, rgba(28, 32, 35, 0.377) 60%), linear-gradient(180deg, rgba(28, 32, 35, 0) 0%, rgba(28, 32, 35, 0.2) 60%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(0deg, rgba(28, 32, 35, 0) 0%, rgba(28, 32, 35, 0.377) 90%), linear-gradient(0deg, rgba(28, 32, 35, 0) 0%, rgba(28, 32, 35, 0.2) 90%);
  }

  @media only ${ device.Laptop } {
    width: 100%;
    height: 100svh;
    min-height: 85vh;
    padding-inline: 0;
    background-size: cover;
  }
`

type TWrapper = {
  direction?: string
}

const Wrapper = styled(FlexBox)<TWrapper>`
  width: 100%;
  max-width: 1300px;
  z-index: 5;
  flex-direction: column;

  @media only ${ device.Laptop } {
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: space-between;
    align-items: flex-end;
  }
`

const TextStyled = styled(Text)`
  text-align: right;
  line-height: 1;
`

type TCardIcons = {
  order?: string
}

const CardIcons = styled(FlexBox)<TCardIcons>`
  font-size: ${ fonts.base };
  z-index: 2;
  order: 2;
  margin-top: 1rem;

  @media only ${ device.Laptop } {
    order: ${({ order }) => order || '0'};
    /* margin-top: 0; */
  }
`

const IconStyled = styled(Icon)`
  cursor: pointer;
  background: ${ colors.primary };
  border-radius: 50%;
  padding: .5rem;
  color: ${ colors.black.black2 };
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: ${ colors.secondary };
    color: ${ colors.black.black2 };

  }
`

type THero = {
  image: string
  title: string
  subtitle: string
  link1: string
  link2: string
  position?: string
  icon1?: React.ReactNode
  icon2?: React.ReactNode
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  order?: string
}

export const Hero: FC<THero> = ({ image, title, subtitle, link1, link2, position, icon1, icon2, direction, order }) => {
  return (
    <Container 
      image={ image } 
      align="center" 
      justify="flex-end" 
      position={ position }
    >
      <Wrapper 
        align="end" 
        justify="space-between"
        direction={ direction }
      >
        <CardIcons direction="row" gap="1rem" align="center" justify="flex-end" order={ order } >
          <Link to={ link1 }>
            <IconStyled icon={ icon1 } color={ colors.primary } font_size={ 1.5 } />
          </Link>
          <Link to={ link2 }>
            <IconStyled icon={ icon2 } color={ colors.primary } font_size={ 1.5 } />
          </Link>
        </CardIcons>
        <FlexBox direction="column" justify="flex-end" align="end">
          <TextStyled 
            fontSize="3.5rem"
            fontWeight={ fonts.bold2 }
            fontFamily="Neue Machina"
            color={ colors.primary }
            gradient="primary"
            sizeLaptop="5rem"
          >
            { title }
          </TextStyled>
          <Text 
            fontSize={ fonts.h1 }
            fontWeight={ fonts.bold }
            color={ colors.white }
            sizeLaptop={ fonts.extra }
          >
            { subtitle }
          </Text>
        </FlexBox>
      </Wrapper>
    </Container>
  )
}