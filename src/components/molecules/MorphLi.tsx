import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'
import { Icon }  from '../atoms/Icon'
import { FC, ReactNode } from 'react';

const LiStyled = styled.li`
  position: relative;
	list-style: none;
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
  align-items: center;
	margin: 0;
`

type TIconStyled = {
  clicked?: boolean
}

const IconStyled = styled(Icon)<TIconStyled>`
  position: absolute;
	width: 80px;
	height: 80px;
	color: ${ colors.secondary };
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	transition-delay: 0.2s;
  z-index: 99;

  &:hover,
  &:active {
    color: ${ colors.secondary };
  }
   ${ LiStyled }:hover &,
   ${ LiStyled }:active & {
    background: ${ colors.secondary };
    box-shadow: 5px 5px 7px rgba(0,0,0,0.25),
    inset 2px 2px 3px rgba(255,255,255,0.15),
    inset -3px -3px 5px rgba(0,0,0,0.25);
    transition-delay: 0s;
    z-index: 2;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 10px;
    color: ${ colors.secondary };
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

const LinkStyled = styled(Link)`
  display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-decoration: none;
`

type TMorphLi = {
  icon: ReactNode
  link: string
}

export const MorphLi: FC<TMorphLi> = ({ icon, link }) => {
  return (
    <LiStyled>
      <LinkStyled to={ link }>
        <IconStyled icon={ icon } font_size={ 1.5 }/>
      </LinkStyled>
    </LiStyled>
  )
}