import { breakpoints } from '../../styles/breakpoints'
import styled from '@emotion/styled'

export const HomeContainer = styled.div`
  text-align: center;
  max-width: 798px;
  height: inherit;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 70px;
  z-index: 1; //the animation will go behind the home

  @media (min-width: ${breakpoints.m}) {
    padding-top: 195px;
    padding-bottom: 197px;
  }
`

export const AnimateHeading = styled.div`
  animation: move-in-circle 6s linear infinite;

  @keyframes move-in-circle {
    from {
      transform: rotate(0deg) translateX(150px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(150px) rotate(-360deg);
    }
  }
`
