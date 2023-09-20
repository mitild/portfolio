import { FC } from "react"
import styled, { keyframes, css } from "styled-components"
import {FlexBox, dimensions, device, colors } from '../../styles'
import { BlurryCircle } from "../atoms/BlurryCircle"
import { RoundBoxTitle } from "../atoms/RoundBoxTitle"
import { Software } from "../../utils/Software"
import { SectionLayout } from '../molecules/SectionLayout'
import { useIntersection } from '../../hooks/useObserver'

const Entrance = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`
type TMainContainer = {
  $is_visible: string
}

const MainContainer = styled(FlexBox)<TMainContainer>`
  width: 100%;
  transition: all .3s ease;
  opacity: 0;
  animation: ${({$is_visible}) => $is_visible === 'true' ? css`${ Entrance } 1s ease-in-out forwards` : 'none'};

  @media only ${ device.Tablet }{
    align-items: center
  }
`

const IconsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3.5rem, 1fr));
  grid-gap: 5px;

  @media only ${ device.Tablet}{
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
  }
`

const IconWrapper = styled(FlexBox)`
  min-width: 3.5rem;
  max-width: 3.5rem;
  height: 3.5rem;
  background: ${ colors.black.black3 };
  border-radius: ${ dimensions.borderRadius.base };
  transition: all .3s ease;

  @media only ${ device.Laptop}{
    min-width: 6.25rem;
    max-width: 6.25rem;
    height: 6.25rem;
  }
`

const IconStyled = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* display: flex;
  padding-left: .3rem; */
  align-self: center;
  align-content: center;

`

export const SoftwareComponent: FC = () => { 
  type TIconsProps = {
    src: string
    title: string
  }
  
  const designIcons = (arr: TIconsProps[]): JSX.Element[] => {
    return arr.map(({ src, title }, index) =>(
        <IconWrapper key={ index } >
          <IconStyled src={ src } alt={ title } />
        </IconWrapper>
      )
    )
  } 
  const [ isIntersecting, ref ] = useIntersection()

  return (
    <SectionLayout 
      title="Software Stack"
      number="03"
      subtitle="Armed to the teeth with the latest technologies, I am ready to take on any challenge."
      color="primary"
      hasLink={ false }  
      id="software"
    >
      <BlurryCircle color="primary" XPositionLaptop="-15%" YPositionLaptop="50%" Xposition="-20%" Yposition="50%" />
      <MainContainer align="stretch" gap="2rem" ref={ ref } $is_visible={isIntersecting.toString()}>

        <FlexBox justify="flex-start" align="start" gap="1rem">
          <RoundBoxTitle title="I design with" width="200px" height="30px" borderRadius="5rem" />
            <IconsContainer>
              { designIcons( Software.design ) }
            </IconsContainer>
        </FlexBox>

        <FlexBox justify="flex-start" align="start" gap="1rem">
          <RoundBoxTitle title="My React Setup" width="200px" height="30px" borderRadius="5rem" />
          <IconsContainer>
            { designIcons( Software.frontend ) }
          </IconsContainer>
        </FlexBox>

        <FlexBox justify="flex-start" align="start" gap="1rem">
          <RoundBoxTitle title="Backend musts" width="200px" height="30px" borderRadius="5rem" />
          <IconsContainer>
            { designIcons( Software.backend ) }
          </IconsContainer>
        </FlexBox>
      </MainContainer>
      
    </SectionLayout>
  )
}
