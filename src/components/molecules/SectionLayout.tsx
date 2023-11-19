import { FC } from "react"
import { Link } from 'react-router-dom'
import { Title } from '../atoms/Title'
import { Subtitle } from '../atoms/Subtitle'
import styled from 'styled-components'
import { FlexBox, dimensions, device, colors } from '../../styles';

type TFlexBoxProps = {
  gap?: string
  space?: string
}

const Container = styled(FlexBox)<TFlexBoxProps>`
  position: relative;
  width: 100%;
  /* min-height: 100svh; */
  margin-bottom: ${({ space }) => space ? space : '2rem' };
  padding: 0 ${dimensions.spacing.md};
  gap: ${({ gap }) => gap ? gap : '2rem'};

  @media only ${device.Laptop} {
    margin-bottom: ${({ space }) => space ? space : '5rem' };
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


type TSectionLayoutProps = {
  title: string
  subtitle?: string
  number: string
  color?: 'primary' | 'secondary'
  link?: string
  linkText?: string
  hasLink?: boolean
  children: JSX.Element | JSX.Element[]
  gap?: string
  space?: string
  id: string
}

export const SectionLayout: FC<TSectionLayoutProps> = ({ children, title, subtitle, number, color, link, linkText, hasLink, gap, space, id }) => {
  return (
    <Container justify="center" align="center" gap={ gap } space={ space } id={ id }>
      <TitleWrapper direction="column" gap=".7rem" align="start" justify="space-between">
        <Title text={ title } number={ number } color={ color } />
        <Subtitle 
          text={
            <>
              { subtitle }
              {
                hasLink &&
                <LinkWrapper color={ color === 'primary' ? 'secondary' : 'primary'}>
                  <LinkStyled to={ link! }>{` ${ linkText! }`}</LinkStyled>
                </LinkWrapper>
              }
            </>
          }
          color={ color } />
      </TitleWrapper>
      { children }
    </Container>
  )
}
