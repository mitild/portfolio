import { FC, ReactNode } from 'react';
import { useLocation } from "react-router-dom"
import { FlexBox, dimensions, colors, device, fonts } from '../styles'
import styled from 'styled-components'
import { Hero } from "../components/molecules/Hero"
import { VscGithubInverted } from "react-icons/vsc"
import { MdOpenInNew } from "react-icons/md"
import { Text } from "../components/atoms/Text"
import { DotsPattern } from '../components/atoms/DotsPattern'
import { BlurryCircle } from '../components/atoms/BlurryCircle'
import {Button} from '../components/atoms/Button';


const Container = styled(FlexBox)`
  /* height: 100%; */
  position: relative;
  margin-bottom: 2rem;
  overflow-y: visible;
  gap: 2rem;

  @media only ${ device.Laptop } {
    /* margin-bottom: 20rem; */
    gap: 0;
  }
`

const ImgStyled = styled.img`
  width: 300px;
  height: 100%;
  border-radius: ${ dimensions.borderRadius.base };
  margin: 0 10rem;
  z-index: 999999;
  align-self: center;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.5));

@media only ${ device.Laptop } {
  align-self: start;
  margin-top: -25rem;
  }
`

const SectionStyled = styled(FlexBox)`
  width: 100vw;
  max-width: 360px;

  @media only ${ device.Laptop } {
    width: 100%;
    max-width: 1200px;
  }
`

const Wrapper = styled(FlexBox)`
  gap: 4rem;

  @media only ${ device.Laptop } {
    gap: 2rem;
  }
`

type TSectionWrapper= {
  isEven: boolean
}

const SectionWrapper = styled(FlexBox)<TSectionWrapper>`
  width: 100%;
  align-items: ${({ isEven }) => isEven ? 'flex-end' : 'flex-start'};
  text-align: ${({ isEven }) => isEven ? 'right' : 'left'};
  gap: 1rem;

  @media only ${ device.Laptop } {
    gap: 2rem;
  }
`

type TImageWrapper = {
  order: boolean
}

const ImgWrapper = styled.div<TImageWrapper>`
  width: 280px;
  position: relative;
  order: ${({ order }) => order ? 2 : 0};

  @media only ${ device.Laptop } {
    width: 400px;
  }
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 999999;
`

const SectionImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: ${ dimensions.borderRadius.base };
  z-index: 999999;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.5));
  align-self: flex-end;

  @media only ${ device.Laptop } {

  }
`
type TDotsPatternWrapper = {
  isEven: boolean
}

const DotsPatternWrapper = styled.div<TDotsPatternWrapper>`
  position: absolute;
  transform: rotate(${({ isEven }) => isEven ? '90deg' : '-90deg'});
  top: ${({ isEven }) => isEven ? '50%' : '10%'};
  bottom: ${({ isEven }) => isEven ? '50%' : '10%'};
  left: ${({ isEven }) => isEven ? '70%' : '-30%'};
`

type TSectionTitle = {
  isEven: boolean
}

const SectionTitle = styled(Text)<TSectionTitle>`
  font-size: 1.7rem;
  background-color: ${ colors.primary };
  padding: ${({ isEven }) => isEven ? '0.5rem 1rem 0.5rem 1rem' : '0.5rem 1rem 0.5rem 1rem'};
  border-radius: ${({ isEven }) => isEven ? `${ dimensions.borderRadius.round } 0 0 ${ dimensions.borderRadius.round }` : `0 ${ dimensions.borderRadius.round } ${ dimensions.borderRadius.round } 0`};

  @media only ${ device.Laptop } {
    padding: ${({ isEven }) => isEven ? '0.5rem 3rem 0.5rem 3rem' : '0.5rem 3rem 0.5rem 3rem'};
    font-size: ${ fonts.big };
  }
`

type TSectionText = {
  isEven: boolean
}

const SectionText = styled(Text)<TSectionText>`
  max-width: 400px;
  font-size: 1rem;
  padding: ${({ isEven }) => isEven ? '0 .6rem 0 0' : '0 0 0 .6rem'};

  @media only ${ device.Laptop } {
    font-size: ${ fonts.h1 };
    padding: ${({ isEven }) => isEven ? '0.5rem 1rem 0.5rem 0' : '0.5rem 0 0.5rem 1rem'};
  }
`
const TitleStyled = styled(Text)`
  font-size: 1.8rem;
  background-color: ${ colors.primary };
  padding: .2rem 3rem;
  border-radius: ${ dimensions.borderRadius.round };
  align-self: center;

  @media only ${ device.Laptop } {
    font-size: ${ fonts.big };
    align-self: auto;
  }
`
const DescriptionWrapper = styled(FlexBox)`
  margin: 0;
  padding-inline: 1rem;
  /* max-width: 800px; */
  /* align-self: center; */

  @media only ${ device.Laptop } {
    margin: -10rem 0 5rem;
    padding-left: 13rem;
    max-width: 900px;
    align-self: end;
  }
`

const DescriptiponStyled = styled(Text)`
  /* max-width: 400px; */
  /* padding: .2rem 3rem; */
  font-size: 1.2rem;

  @media only ${ device.Laptop } {
    font-size: ${ fonts.h1 };
  }
`

type TImage = {
  src: string
  desc: string
  title: string
}

export const FrontendSinglePage: FC = () => {
  const { state } = useLocation()
  const sections: ReactNode = state.images.map((image: TImage, index: number) => {
    const isEven = index % 2 === 0
    return (
      <SectionStyled key={ index } direction='row' >
        <ImgWrapper order={ isEven }>
        <DotsPatternWrapper isEven={ isEven } >
          <DotsPattern size={ 200 } desktop_size={ 410 }/>
        </DotsPatternWrapper>
          <SectionImage src={ image.src } />
        </ImgWrapper>
        <SectionWrapper direction='column' align='start' isEven={ isEven }>
          <SectionTitle 
            color={ colors.black.black2 }
            fontWeight='bold'
            fontSize={ fonts.big}
            isEven={ isEven }
          >
            { image.title }
          </SectionTitle>
          <SectionText 
            color={ colors.white }
            isEven={ isEven }

          >
            { image.desc }
          </SectionText>
        </SectionWrapper>
      </SectionStyled>
    )
  })

  return (
    <Container justify="center" align="center">
      <CloseButton onClick={ ()=> history.back() } arrow='true' text="GO BACK" theme="dark" />
      <Hero 
        image={ state.src } 
        title={ state.title } 
        subtitle={ state.subtitle } 
        link1={ state.github } 
        link2={ state.url } 
        position="top"
        icon1={ <VscGithubInverted /> }
        icon2={ <MdOpenInNew /> }
        direction="column"
        order="2"
      />
      <ImgStyled src={ state.mobile } />
      <Wrapper direction="column" align="center" justify="center" gap="4rem">
      <DescriptionWrapper direction="column" align="start" justify="flex-start" gap="2rem">
        <TitleStyled color={ colors.black.black2 } fontWeight='bold' fontSize={ fonts.big}>
          Description
        </TitleStyled>
        <DescriptiponStyled color={ colors.white } fontSize={ fonts.h1 }>
          { state.description }
        </DescriptiponStyled>
      </DescriptionWrapper>
      <BlurryCircle color="primary" XPositionLaptop="-5%" YPositionLaptop="25%"/>
      <BlurryCircle color="primary" XPositionLaptop="90%" YPositionLaptop="45%"/>
      <BlurryCircle color="primary" XPositionLaptop="-5%" YPositionLaptop="65%"/>
      <BlurryCircle color="primary" XPositionLaptop="90%" YPositionLaptop="85%"/>
      { sections }
      </Wrapper>
    </Container>
  )
}