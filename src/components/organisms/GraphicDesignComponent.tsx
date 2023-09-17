import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {FlexBox, dimensions, device, colors, fonts } from '../../styles'
import { Title } from "../atoms/Title"
import { Subtitle } from "../atoms/Subtitle"
import { BlurryCircle } from "../atoms/BlurryCircle"
import { Text } from "../atoms/Text"
import { BrandingProjects } from "../../utils/BrandingProjects"
import {Carousel, TCarouselProps, TImages} from '../molecules/Carousel';
import { DigitalContent } from "../../utils/DigitalContent"


const Container = styled(FlexBox)`
  position: relative;
  width: 100%;
  /* min-height: 100vh; */
  padding: 0 ${dimensions.spacing.md};

  @media only ${device.Laptop} {
    margin-top: 4.5rem;
    padding: 0;
  }
`

const TitleWrapper = styled(FlexBox)`
  width: 100%;
  margin-bottom: ${dimensions.spacing.md};

  @media only ${device.Tablet} {
    flex-direction: row;
    align-items: center;
    margin-bottom: ${dimensions.spacing.xl};
  }
`

const LinkWrapper = styled.span`
  background: ${({ color }) =>
    color === 'primary'
      ? 'linear-gradient(-87deg, rgb(207, 255, 147, 0.3) 0%, #CFFF93 100%)'
      : 'linear-gradient(-87deg, rgba(164, 161, 254, 0.7) 0%, rgb(164, 161, 254) 100%)'};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const LinkStyled = styled(Link)`
  color: ${colors.secondary};
`

const CardsWrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  @media only ${device.Tablet} {
    margin-top: ${dimensions.spacing.xxl};
    flex-direction: row;
    gap: 3rem;
  }
`

const TextStyled = styled(Text)`
  align-self: flex-start;
  max-width: 190px;
  margin-block: ${dimensions.spacing.xxl};
  -webkit-text-stroke-width: .7px;
  -webkit-text-stroke-color: ${ colors.secondary };

  @media only ${device.Laptop} {
    font-size: ${fonts.extra};
    max-width: 290px;
  }
`

export const GraphicDesignComponent: FC = () => {

  const brandingThumbnails: TImages = BrandingProjects.map(project => {
    const thumbnailObject = project.images.find(image => typeof image === 'object') as { thumbnail: string }
    const brandName = project.brand
    return {
      src: thumbnailObject!.thumbnail,
      name: brandName
    }
  })

  const digitalContentThumbnails: TImages = DigitalContent.map(({ src, alt, name }) => ({ src: src, alt: alt, name: name }))

  return (
    <Container direction="column" gap="0" align="center" justify="center">  
      <BlurryCircle color="secondary" XPositionLaptop="90%" YPositionLaptop="50%"/>
      <TitleWrapper direction="column" gap=".7rem" align="start" justify="space-between">
        <Title text="Graphic Design" number="02" color="secondary" />
        <Subtitle 
          text={
            <>
              Some brands I've developed and digital content of many kinds. You can see more 
              <LinkWrapper color="primary">
                <LinkStyled to='https://www.instagram.com/estudiohoyt/'> here</LinkStyled>
              </LinkWrapper>
            </>
          }
          color="secondary" />
      </TitleWrapper>
      <TextStyled fontFamily="Neue Machina" fontSize={ fonts.h2 } fontWeight={ fonts.bold2}>
        Branding & Digital Presence
      </TextStyled>
      <Carousel images={ brandingThumbnails } id="branding" />
      <TextStyled fontFamily="Neue Machina" fontSize={ fonts.h2 } fontWeight={ fonts.bold2}>
        Digital Content
      </TextStyled>
      <Carousel images={ digitalContentThumbnails } id="digital" />
      <CardsWrapper direction="row" gap="1rem" align="center" justify="center">
      </CardsWrapper>
    </Container>
  )
}
