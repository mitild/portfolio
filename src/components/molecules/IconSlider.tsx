import { FC, HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { FlexBox, colors, device, dimensions } from "../../styles"
import { SocialIcon } from "../atoms/SocialIcon"
import { Button } from '../atoms/Button'
import { Socials, TSocials } from "../../utils/SocialPaths"

type TFlexBoxExtended = {
  slide?: boolean
}

const AnimateIn = keyframes`
  0% {
    transform: translateX(150px);
    opacity: 0;
    border: none;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const AnimateOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(150px);
    opacity: 0;
    border: none;
    backdrop-filter: none;
  }
`

const RotateIcon = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-720deg);
  }
`

const Container = styled(FlexBox)`
  overflow: hidden;
  width: 100%;
  border-radius: ${dimensions.borderRadius.round};
`

const SliderStyled = styled(FlexBox)<TFlexBoxExtended>`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid ${colors.primary};
  border-radius: ${dimensions.borderRadius.round};
  background: linear-gradient(107deg, rgba(28, 32, 35, 0.63) 0%, rgba(255, 255, 255, 0.11) 100%);
  box-shadow: 3.5px 3.5px 19px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.9110169410705566px);
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  width: 250px;
  padding-left: ${dimensions.spacing.sm};
  height: 40px;
  animation: ${({ slide }) => slide ? AnimateIn : AnimateOut} .4s ease both;
  z-index: -1;

  @media only ${device.Tablet} {
    height: 50px;
    width: 320px;
    padding-left: ${dimensions.spacing.md};
  }
`

const ButtonWrapper = styled.div<TFlexBoxExtended>`
  position: relative;
  margin-left: -110px;
  border-radius: ${dimensions.borderRadius.round};
  z-index: 1;
`

const EmailElement = styled(SocialIcon)`
  animation: ${RotateIcon} .4s ease-in-out both;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`

type TIconSlider = HTMLAttributes<HTMLDivElement> & {
  slide: boolean
  toggleSlider: () => void
}

export const IconSlider: FC<TIconSlider> = ({ slide, toggleSlider }) => {

  const socialElements: JSX.Element[] = Socials
    .filter(social => social.id !== 4)
    .map((social: TSocials) => (
      <LinkStyled to={social.path} key={social.id}>
        <SocialIcon icon={social.icon} />
      </LinkStyled>
    ))
  
  const socialEmail: TSocials = Socials[3]

  const emailEl: JSX.Element = <LinkStyled to={socialEmail.path}><EmailElement icon={ socialEmail.icon } /></LinkStyled> 
  const buttonText = slide ? emailEl : 'Contact'
  const buttonArrow = slide ? 'false' : 'true'

  return (
    <Container direction="row" justify="flex-end">
      <ButtonWrapper>
        <Button text={ buttonText } arrow={ buttonArrow } onClick={ toggleSlider }/>
        <SliderStyled slide={ slide } direction="row">
          { socialElements }
        </SliderStyled>
      </ButtonWrapper>
    </Container>
  )
}