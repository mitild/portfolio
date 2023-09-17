import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import {FlexBox, dimensions, device, colors } from '../../styles'
import { Card } from "../molecules/Card"
import { Title } from "../atoms/Title"
import { Subtitle } from "../atoms/Subtitle"
import { frontendProjects } from "../../utils/FrontendProjects"
import { BlurryCircle } from "../atoms/BlurryCircle"

const Container = styled(FlexBox)`
  width: 100%;
  /* min-height: 100vh; */
  padding: 0 ${dimensions.spacing.md};
  position: relative;

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

export const FrontendComponent: FC = () => {
  const cardElements = frontendProjects.map((project, index) => <Card key={index} {...project} />)

  return (
    <Container direction="column" gap="0" align="center" justify="center">  
      <BlurryCircle color="secondary" YPositionLaptop="-400px"/>
      <BlurryCircle color="primary" XPositionLaptop="-5%" YPositionLaptop="50%"/>
      <TitleWrapper direction="column" gap=".7rem" align="start" justify="space-between">
        <Title text="Frontend Development" number="01" />
        <Subtitle 
          text={
            <>
              I will upload only my latest projects. To see more, visit my GitHub 
              <LinkWrapper color="secondary">
                <LinkStyled to='https://github.com/mitild'> here</LinkStyled>
              </LinkWrapper>
            </>
          }
        color="primary" />
      </TitleWrapper>
      <CardsWrapper direction="row" gap="1rem" align="center" justify="center">
        { cardElements }
      </CardsWrapper>
    </Container>
  )
}
