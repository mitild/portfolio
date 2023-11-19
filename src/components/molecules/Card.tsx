import { FC, HTMLAttributes } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FlexBox, colors, dimensions, fonts, device } from '../../styles'
import { Text } from '../atoms/Text'
import { Icon } from '../atoms/Icon'
import { VscGithubInverted } from "react-icons/vsc"
import { MdOpenInNew } from "react-icons/md"
import { TProjects } from '../../utils/FrontendProjects'

const Container = styled(FlexBox)`
  position: relative;
  width: 100%;
  max-width: 340px;
  aspect-ratio: 340/500;
  /* height: 500px; */
  padding: 0 ${dimensions.spacing.md} ${dimensions.spacing.base};
  background: ${ colors.black.black3 };
  box-shadow: 2.3px 2.3px 4.6px 0px rgba(0, 0, 0, 0.25), -2.3px -2.3px 4.6px 0px rgba(0, 0, 0, 0.25);
  border-radius: ${ dimensions.borderRadius.sm };
  text-align: right;
`

const CardImgWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background: linear-gradient(180deg, rgba(36, 43, 52, 0.00) 0%, #242B34 60.94%);
    z-index: 2;
  }
`

const CardImgStyled = styled.img`
  width: 100%;
  border-radius: ${ dimensions.borderRadius.sm } ${ dimensions.borderRadius.sm } 0 0;
  z-index: 1;
`

const CardHeader = styled(FlexBox)`
  width: 100%;
  z-index: 3;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
`

const CardButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 20px;
  border: 1px solid ${ colors.primary };
  border-radius: ${ dimensions.borderRadius.round };
  background: ${ colors.primary };
  font-size: ${ fonts.xss };
  font-weight: ${ fonts.medium };
  color: ${ colors.black.black2 };
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  z-index: 3;

  &:hover {
    background: ${ colors.black.black2 };
    color: ${ colors.primary };
  }
`
const CardTitle = styled(Text)`
  background: linear-gradient(-90deg, rgb(207, 255, 147, 0.5) 0%, #CFFF93 100%);  
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: -.2rem;
  z-index: 3;
`

const CardSubtitle = styled(Text)`
  background: linear-gradient(-90deg, rgb(255, 255, 255, 0.5) 0%, ${ colors.white } 100%);  
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const CardDescription = styled(Text)`
  z-index: 3;
`

const CardIcons = styled(FlexBox)`
  font-size: ${ fonts.base };
`

type TCard = HTMLAttributes<HTMLDivElement> & TProjects & {
  route: string
}

export const Card: FC<TCard> = (props) => {

  const { title, subtitle, src, alt, description, software, link, url, github, route } = props

  return (
    <Container align='end' justify='flex-end' gap='.5rem'>
        <CardImgWrapper>
          <Link to={ route } state={{ ...props }} onClick={ ()=> window.scrollTo({ top: 0 })} >
          <CardImgStyled src={ src } alt={ alt } />
          </Link>
        </CardImgWrapper>
        <CardHeader direction="row" gap="0" align="center" justify="space-between">
          <CardButton to={ route } state={{ ...props }} onClick={ ()=> window.scrollTo({ top: 0 })}>
              Read More
          </CardButton>
          <FlexBox direction="column" gap="0" align="end" justify="center">
            <LinkStyled to={ link }>
              <CardTitle 
                fontFamily="Neue Machina" 
                fontSize={ fonts.big } 
                sizeLaptop={ fonts.big } 
                fontWeight={ fonts.bold2 } 
                color={ colors.primary }
                >
                  { title }
              </CardTitle>
              <CardSubtitle 
                fontSize={ fonts.base }
                sizeLaptop={ fonts.base }
                fontWeight={ fonts.medium }
                color={ colors.white }
              >
                { subtitle }
              </CardSubtitle>
            </LinkStyled>
          </FlexBox>
        </CardHeader>
        <CardDescription fontSize={ fonts.h3 } sizeLaptop={ fonts.h3 } color={ colors.white }>{ description }</CardDescription>
          <Text fontSize={ fonts.xss } sizeLaptop={ fonts.xss } color={ colors.primary }>
            { software.join(' - ') }
          </Text>
        <CardIcons direction="row" gap="1rem" align="center" justify="flex-end">
          <Link to={ github } target="_blank">
            <Icon icon={ <VscGithubInverted /> } color={ colors.primary } font_size={ 1.5 } />
          </Link>
          <Link to={ url } target="_blank">
            <Icon icon={ <MdOpenInNew /> } color={ colors.primary } font_size={ 1.5 } />
          </Link>
        </CardIcons>
    </Container>
  )
}
  