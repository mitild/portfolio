import { FC } from "react"
import styled from "styled-components"
import { FlexBox, dimensions, device, colors, fonts } from "../../styles"
import { NavbarTop } from "../molecules/NavbarTop"
import { DotsPattern } from "../atoms/DotsPattern"
import { Text } from "../atoms/Text"
import myImg from "/myImg.png"
import thumUp from "/thumbUp.svg"
import { FloatButton } from "../atoms/FloatButton"
import { SideNavbar } from "../molecules/SideNavbar"
import { NavigationItems } from "../../utils/NavigationItems"
import CV_Juanma from "/CV_Juanma.pdf"
import { MobileNavigation } from "../molecules/MobileNavigation"

const Container = styled(FlexBox)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: url(${myImg}) no-repeat;
  background-size: 75%;
  background-position: 175% 25%;

  &::before {
    content: '';
    position: absolute;
    top: 17%;
    right: -28%;
    width: 320px;
    height: 320px;
    background: linear-gradient(180deg, rgba(207, 255, 147, 0.57) 0%, rgba(28, 32, 35, 0.63) 100%);
    filter: blur(48px);
    border-radius: ${dimensions.borderRadius.round};
    z-index: -2;
    opacity: .7;
  }
  &::after {
    content: '';
    position: absolute;
    top: 17%;
    right: -28%;
    width: 320px;
    height: 320px;
    border: 5px solid ${colors.primary};
    filter: blur(4.5px);
    border-radius: ${dimensions.borderRadius.round};
    z-index: -1;
    opacity: .7;
  }

  @media only ${device.Tablet} {
    background-size: 70%;
    background-position: 140% 40%;

    &::before {
      top: 20%;
      left: 40%;
      width: 500px;
      height: 500px;
    }
    &::after {
      top: 20%;
      left: 40%;
      width: 600px;
      height: 600px;
    }
  }

  @media only ${device.Laptop} {
    max-height: 900px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-size: 46%;
    background-position: center bottom;

    &::before {
      top: 30%;
      bottom: 50%;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      width: 800px;
      height: 800px;
    }
    &::after {
      top: 30%;
      bottom: 50%;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      width: 800px;
      height: 800px;
    }
  }
`

const MainWrapper = styled(FlexBox)`
  width: 100%;
  @media only ${device.Laptop} {
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
  }
`

const LeftColumn = styled(FlexBox)`
  padding-inline: ${dimensions.spacing.md};
  margin-top: 12rem;

  @media only ${device.Laptop} {
    padding: 0;
    width: 50%;
  }
`

const MiddleText = styled(Text)`
  margin: -0.5rem 0 -0.7rem;
`

const ImgStyled = styled.img`
  width: 40px;
  margin-bottom: .8rem;

  @media only ${device.Laptop} {
    width: 70px;
  }
`

const RightColumn = styled(FlexBox)`
  width: 100%;
  margin-top: -2rem;

  @media only ${device.Laptop} {
    width: 50%;
    margin-top: 0;
  }
`

const MobileNavigationStyled = styled(MobileNavigation)`
  margin-top: 5rem;
`

export const HomeComponent: FC = () => 
  <>
    <Container justify="center" align="start">
      <NavbarTop />

      <MainWrapper direction="column" justify="center" align="start" gap="1rem">
        <LeftColumn  justify="flex-start" align="start" gap="1rem">
          <div>
            <FlexBox direction="row" justify="flex-start" align="center" gap="1rem">
              <Text color={ colors.white} fontSize={ fonts.h2 } sizeLaptop={ fonts.big}>
                Hi! I'm 
              </Text>
              <ImgStyled src={ thumUp } alt="thum up" />
            </FlexBox>
            <MiddleText color={ colors.white} fontSize={ fonts.display } fontWeight={ fonts.bold1 } sizeLaptop={ fonts.ultraDisplay}>
              Juanma,
            </MiddleText>
            <Text color={ colors.white} fontSize={ fonts.h1 } sizeLaptop={ fonts.bigger}>
              a Frontend Developer
            </Text>
          </div>
          <DotsPattern size={ 200 } desktop_size={ 410 }/>
        </LeftColumn>
        
        <RightColumn justify="center" align="center">
          <FloatButton file={ CV_Juanma } />
        </RightColumn>
    <MobileNavigationStyled array={ NavigationItems }/> 
      </MainWrapper>
      
    </Container>
    <SideNavbar array={ NavigationItems }/>  { /* Absolutly positioned component */ }
  </>