import { FC } from "react"
import styled from "styled-components"
import {FlexBox, dimensions, device, colors } from '../../styles'
import { Title } from "../atoms/Title"
import {Subtitle} from '../atoms/Subtitle';
import { BlurryCircle } from "../atoms/BlurryCircle"
import { RoundBoxTitle } from "../atoms/RoundBoxTitle"
import { Software } from "../../utils/Software"

const Container = styled(FlexBox)`
  position: relative;
  width: 100%;
  /* min-height: 100vh; */
  padding: 0 ${dimensions.spacing.md};

  @media only ${device.Laptop} {
    margin-top: 4.5rem;
    padding: 0;
    justify-content: center;
    align-items: center;
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

  return (
    <Container justify="flex-start" align="stretch" gap="2rem">
      <TitleWrapper direction="column" gap=".7rem" align="start" justify="space-between">
        <Title text="Software Stack" number='03' />
        <Subtitle 
          text={
            <>
              Armed to the teeth with the latest technologies, I am ready to take on any challenge. 
            </>
          }
          color="primary" />
      </TitleWrapper>
      <BlurryCircle color="primary" XPositionLaptop="-15%" YPositionLaptop="50%" Xposition="-20%" Yposition="50%" />
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
    </Container>
  )
}
