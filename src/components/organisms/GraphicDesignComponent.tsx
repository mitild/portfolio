import { FC } from "react"
import styled from "styled-components"
import { dimensions, device, colors, fonts } from '../../styles'
import { BlurryCircle } from "../atoms/BlurryCircle"
import { Text } from "../atoms/Text"
import { BrandingProjects } from "../../utils/BrandingProjects"
import { TImages } from '../molecules/Carousel'
import { DigitalContent } from "../../utils/DigitalContent"
import { SectionLayout } from '../molecules/SectionLayout'
import { MCarousel } from "../molecules/MCarousel"

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

  const brandingThumbnails: TImages = BrandingProjects.map(({ brand, slogan, description, thumbnail, images, behance, instagram }) => {
    return {
      name: brand,
      slogan: slogan,
      description: description,
      src: thumbnail,
      images: images,
      behance: behance,
      instagram: instagram,
      page: true
    }
  })

  const digitalContentThumbnails: TImages = DigitalContent.map(({ src, alt, name }) => ({ src: src, alt: alt, name: name }))

  return (
    <SectionLayout 
      title="Graphic Design"
      number="02"
      subtitle="Some brands I've developed and digital content of many kinds. You can see more"
      color="secondary"
      hasLink={ true }  
      link='https://www.instagram.com/estudiohoyt/'
      linkText='here'
      gap='0'
      id="designs"
    > 
      <BlurryCircle color="secondary" XPositionLaptop="90%" YPositionLaptop="50%"/>
      <TextStyled fontFamily="Neue Machina" fontSize={ fonts.h2 } fontWeight={ fonts.bold2 }>
        Branding & Digital Presence
      </TextStyled>
      {/* <Carousel images={ brandingThumbnails } id="branding" /> */}
      <MCarousel images={ brandingThumbnails } />
      <TextStyled fontFamily="Neue Machina" fontSize={ fonts.h2 } fontWeight={ fonts.bold2 }>
        Digital Content
      </TextStyled>
      {/* <Carousel images={ digitalContentThumbnails } id="digital" /> */}
      <MCarousel images={ digitalContentThumbnails } />
    </SectionLayout>  
  )
}
