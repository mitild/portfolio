import React, { FC } from "react"
import styled from "styled-components"
import { HomeComponent } from "../components/organisms/HomeComponent"
import { FrontendComponent } from "../components/organisms/FrontendComponent"
import { FlexBox } from '../styles'
import { GraphicDesignComponent } from "../components/organisms/GraphicDesignComponent"
import { SoftwareComponent } from "../components/organisms/SoftwareComponent"
import { AboutComponent } from "../components/organisms/AboutComponent"
import { ExperienceComponent } from "../components/organisms/ExperienceComponent"
import { EducationComponent } from "../components/organisms/EducationComponent"

const Container = styled(FlexBox)`
  width: 100vw;
  max-width: 1300px;
  min-height: 100vh;
  margin: 0 auto 5rem;
`

export const Home: FC = () => 
  <Container direction="column" gap="5rem" align="center" justify="flex-start">
    <HomeComponent />
    <FrontendComponent />
    <GraphicDesignComponent />
    <SoftwareComponent />
    <AboutComponent />
    <ExperienceComponent />
    <EducationComponent />
  </Container>