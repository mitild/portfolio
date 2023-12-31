import { FC, HTMLAttributes } from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { Button } from '../atoms/Button'
import { Text } from '../atoms/Text'
import { FlexBox, colors, device, dimensions, fonts } from '../../styles'
import { TNavigationItems } from '../../utils/NavigationItems'
import index from '/index.svg'

const Container = styled(FlexBox)`
  align-self: center;

  @media only ${device.Laptop} {
    display: none;
  }
`

const TextWrapper = styled(FlexBox)`
  max-width: 300px;
  margin-block: ${ dimensions.spacing.md };
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: .2rem;
  grid-row-gap: .2rem;
`

const LinkStyled = styled(HashLink)`
  text-decoration: none;
`

type TMobileNavigation = HTMLAttributes<HTMLDivElement> & {
  array: TNavigationItems[]
} 

export const MobileNavigation: FC<TMobileNavigation> = ({ array }) => {

  const scrollWithOffset = (el: HTMLElement): void => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY
    const yOffset = -70
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  const buttonElement: JSX.Element[] = array.map((item: TNavigationItems, index: number) => {
    const color = index % 2 === 0 ? '' : 'dark'
    return (
    <LinkStyled to={item.link} scroll={(el: HTMLElement)=> scrollWithOffset(el)} key={index}>
      <Button text={item.name} theme={ color } />
    </LinkStyled>
    )
  })

  return (
    <Container>
      <TextWrapper direction='row' align='center'>
        <Text color={ colors.white } fontSize={ fonts.h2 }>What would you like to discover about me?</Text>
        <img src={ index } alt='Index pointing down'/>
      </TextWrapper>
      <ButtonWrapper>
        { buttonElement }
      </ButtonWrapper>
    </Container>
  )
}
