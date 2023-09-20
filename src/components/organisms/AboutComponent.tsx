import { FC } from "react"
import styled from "styled-components"
import { FlexBox, colors, fonts, device } from '../../styles'
import { Ticker } from "../molecules/Ticker"
import { SectionLayout } from "../molecules/SectionLayout"
import { Text } from "../atoms/Text"
import index from '/index.svg'
import { BlurryCircle } from '../atoms/BlurryCircle'

const TextWrapper = styled(FlexBox)`
max-width: 800px;
`

const RotatedContainer = styled(FlexBox)`
  transform: rotate(-4deg);
  align-self: flex-start;
  margin-block: 3rem -1.5rem;

  @media only ${device.Tablet} {
    margin-block: 3rem -3rem;
  }
`

export const AboutComponent: FC = () => {
  const array: string[] = ["Frontend Development", "Graphic Design", "Technology",  "Frontend Development", "Graphic Design", "Technologies" ]


  return (
    <SectionLayout 
      title="About Myselfie"
      number="06"
      subtitle="There is no greater reward than creating a solution on a device and seeing it being utilized by many"
      color="secondary"
      hasLink={ false }
      space="10rem"
      id="about"
    >
      <BlurryCircle color="secondary" XPositionLaptop="100%" YPositionLaptop="40%"/>
      <TextWrapper justify="center" align="center" gap="2rem">
      <Text color={ colors.grey.grey5 } fontSize={ fonts.h2 } sizeLaptop={ fonts.h1 }>
         I am a passionate ReactJS Developer dedicated to creating solutions that enhance the lives of people (and other species) by crafting user-friendly applications with intuitive yet captivating designs.
      </Text>
      <Text color={ colors.grey.grey5 } fontSize={ fonts.h2 } sizeLaptop={ fonts.h1 }>
         Originally from Argentina, I have lived the last 13 years in Europe, between Barcelona and Oslo. My passion for technology has never stopped growing since I can remember. Thanks to this passion and my eagerness to learn, I have been discovering different software and tools, which I have used for my own personal satisfaction and for the satisfaction & success of others.
      </Text>
      </TextWrapper>  
      <RotatedContainer direction="row" align="center" justify="flex-start" gap=".5rem">
        <Text color={ colors.secondary } fontSize={ fonts.h2 } sizeLaptop={ fonts.h1 } fontFamily="Neue Machina">
          In mi free time 
        </Text>
          <img src={ index } alt='Index pointing down'/>
      </RotatedContainer>
      <Ticker text={ array } color="secondary" rotate={ -4 } dir="left" />
    </SectionLayout>
  )
}