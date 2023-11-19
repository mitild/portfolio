import { FC, HTMLAttributes, useState } from "react"
import styled from "styled-components"
import { HashLink } from 'react-router-hash-link'
import { dimensions, device, colors, fonts } from "../../styles"
import { Icon } from "../atoms/Icon"
import { Text } from "../atoms/Text"
import { TNavigationItems } from "../../utils/NavigationItems"

const UlStyled = styled.ul`
  display: none;

  @media only ${device.Laptop} {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${ dimensions.spacing.none };
    border-right: none;
    border-radius: 15px 0px 0px 15px;
    backdrop-filter: opacity 0.9;
    /* background: rgba(28, 32, 35, 0.114); */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05) inset, 25px 25px 75px 0px rgba(0, 0, 0, 0.05), 10px 10px 70px 0px rgba(0, 0, 0, 0.05), 5px 5px 10px 0px rgba(0, 0, 0, 0.05) inset, 5px 5px 20px 0px rgba(255, 255, 255, 0.05) inset, -5px -5px 15px 0px rgba(0, 0, 0, 0.05) inset;
    top: 450px;
    transform: translateY(-50%);
    padding-block: ${ dimensions.spacing.xs };
    right: 0;
    width: 100px;
    height: min-content;
  }
`

const LinkStyled = styled(HashLink)`
  display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-decoration: none;
`

const LiStyled = styled.li`
  position: relative;
	list-style: none;
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
  align-items: center;
	margin: 0 5px;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 2.5px);
    right: 25%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    transition: 0.5s;
  }
  &:hover::before,
  &:active::before {
    background: ${ colors.primary };
	  box-shadow: 0 0 5px ${ colors.primary },
    0 0 10px ${ colors.primary },
    0 0 20px ${ colors.primary },
    0 0 30px ${ colors.primary },
    0 0 40px ${ colors.primary },
    0 0 50px ${ colors.primary };
    }
`

const TextStyled = styled(Text)`
  font-size: ${ fonts.xs };
  color: ${ colors.primary };
  font-weight: ${ fonts.bold };
  text-align: right;
  position: absolute;
	left: -100px;
	background: ${ colors.primary };
	color: ${ colors.black.black2 };
	padding: 6px 15px;
	border-radius: 15px;
	box-shadow: 5px 5px 7px rgba(0,0,0,0.25),
	inset -3px -3px 5px rgba(0,0,0,0.5);
	opacity: 0;
	visibility: hidden;
	transition: 0.5s;
  transition: z-index 0s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -1px;
    transform: translateY(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background: ${ colors.primary };
    z-index: -1;
  }

  ${ LiStyled }:hover & {
    opacity: 1;
    visibility: visible;
    left: -160px;
  }
`

type TIconStyled = {
  clicked?: boolean
}

const IconStyled = styled(Icon)<TIconStyled>`
  position: absolute;
	width: 80px;
	height: 80px;
	color: ${ colors.grey.grey4 };
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	transition-delay: 0.2s;

  &:hover,
  &:active {
    color: ${ colors.primary };
  }
   ${ LiStyled }:hover &,
   ${ LiStyled }:active & {
    transform: translateX(-45px);
    background: ${ colors.primary };
    box-shadow: 5px 5px 7px rgba(0,0,0,0.25),
    inset 2px 2px 3px rgba(255,255,255,0.15),
    inset -3px -3px 5px rgba(0,0,0,0.25);
    transition-delay: 0s;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 10px;
    color: ${ colors.primary };
    background: ${ colors.grey.grey1 };
    border-radius: 50%;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5),
    inset 2px 2px 3px rgba(255,255,255,0.25),
    inset -3px -3px 5px rgba(0,0,0,0.5);
    transform: scale(0);
    transition: 0.5s;
    z-index: -1;
  }
  ${ LiStyled }:hover &::before,
  ${ LiStyled }:active &::before {
    transform: scale(1);
  }
`

type TSideNavbar = HTMLAttributes<HTMLDivElement> & {
  array: TNavigationItems[]
}

export const SideNavbar: FC<TSideNavbar> = ({ array }) => {
  const [clicked, setCliked] = useState(false)

  const handleClicked = () => {
    setCliked(!clicked)
  }

  const scrollWithOffset = (el: HTMLElement): void => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY
    const yOffset = -80
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  const ListEl = array.map((item, index) => {

    return (
      <LiStyled key={ index }>  
        <LinkStyled to={ item.link } scroll={(el: HTMLElement)=> scrollWithOffset(el)}>
          <TextStyled>
            { item.name }
          </TextStyled>
          <IconStyled icon={ item.icon } font_size={ 1.6 } onClick={ handleClicked }/>
        </LinkStyled>
      </LiStyled>
    ) 
  })

  return (
    <UlStyled>
      { ListEl }  
    </UlStyled>
  )
}

