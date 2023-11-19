import { FC } from "react"
import styled from "styled-components"
import {FlexBox, dimensions, device } from '../../styles'
import { Card } from "../molecules/Card"
import { frontendProjects } from "../../utils/FrontendProjects"
import { BlurryCircle } from "../atoms/BlurryCircle"
import { SectionLayout } from '../molecules/SectionLayout';

const CardsWrapper = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  @media only ${device.Tablet} {
    margin-top: ${dimensions.spacing.xxl};
    flex-direction: row;
    gap: 3rem;
  }
`

export const FrontendComponent: FC = () => {
  const cardElements = frontendProjects.map((project, index) => {
    const { title } = project
    const nameAsParam = title!.split(' ').join('_')
    return (
      <Card { ...project } route={`frontend/${nameAsParam}`} key={ index } />
    )
  })

  return (
    <SectionLayout 
      title="Frontend Development"
      number="01"
      subtitle="I will upload only my latest projects. To see more, visit my GitHub"
      color="primary"
      hasLink={ true  }  
      link='https://github.com/mitild'
      linkText='here'
      id="frontend"
    >
      <BlurryCircle color="secondary" YPositionLaptop="-400px" XPositionLaptop="99%"/>
      <BlurryCircle color="primary" XPositionLaptop="-5%" YPositionLaptop="50%"/>
      <CardsWrapper direction="row" gap="1rem" align="center" justify="center">
        { cardElements }
      </CardsWrapper>
    </SectionLayout>
  )
}
