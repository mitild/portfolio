import React, { FC } from "react"
import styled from "styled-components"
import { HomeComponent } from "../components/organisms/HomeComponent"
import { FrontendComponent } from "../components/organisms/FrontendComponent"
import { FlexBox, dimensions, device } from '../styles';
import { GraphicDesignComponent } from "../components/organisms/GraphicDesignComponent";

const Container = styled(FlexBox)`
  width: 100vw;
  max-width: 1300px;
  min-height: 100vh;
  margin: 0 auto 5rem;
`

export const Home: FC = () => 
  <Container direction="column" gap="0" align="center" justify="flex-start">
    <HomeComponent />
    <FrontendComponent />
    <GraphicDesignComponent />
  </Container>