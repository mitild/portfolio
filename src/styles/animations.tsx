import { keyframes } from 'styled-components'

export const Entrance = keyframes`
0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(90px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
`

export const Exit = keyframes`
  0% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
  100% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(20px);
  }
`