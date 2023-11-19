import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { colors, device, dimensions, fonts, shadows } from '../../styles'

export const ButtonStyled = styled.button<TButton>`
  width: 110px;
  height: 40px;
  font-size: ${fonts.xs};
  font-family: inherit;
  font-weight: ${fonts.bold1};
  cursor: pointer;
  background: ${({ theme }) => theme === 'dark' ? `${colors.black.black3}` : `${colors.primary}` };
  color: ${({ theme }) => theme === 'dark' ? `${colors.white}` : `${colors.black.black2}` };
  border: ${({ theme }) => theme === 'dark' ? `2px solid ${colors.secondary}` : `1px solid ${colors.primary}` };
  border-radius: ${ dimensions.borderRadius.round };
  text-shadow: ${ shadows.xs };
  transition: all .3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
  box-shadow: ${shadows.xs};

  &::before {
    content: '<~';
    font-family: 'JetBrains Mono';
    font-weight: ${fonts.bold};
    transition: all .1s ease;
    display: ${({ arrow }) => arrow === 'true' ? 'block' : 'none'};
  }

  @media only ${device.Tablet} {
    width: 150px;
    height: 50px;
    gap: .3rem;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme === 'dark' ? `${colors.black.black2}` : `${colors.black.black2}` };
    color: ${({ theme }) => theme === 'dark' ? `${colors.secondary}` : `${colors.primary}` };
    border-color: ${({ theme }) => theme === 'dark' ? `${colors.secondary}` : `${colors.primary}` };
  }
  &:disabled {
    opacity: .3;
    background-color: ${colors.grey.grey5};
    border-color: ${colors.grey.grey5};
  }
  &:hover::before {
    transform: translateX(-5px);
  }
`

type TButton = HTMLAttributes<HTMLButtonElement> & {
  theme?: 'dark' | ""
  text?: string | JSX.Element
  arrow?: string
}
  
export const Button: FC<TButton> = ({ theme, text, arrow, ...rest }) => 
  <ButtonStyled arrow={ arrow } theme={ theme } {...rest}>
    { text }
  </ButtonStyled>
