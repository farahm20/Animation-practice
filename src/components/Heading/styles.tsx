import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import { breakpoints } from '../../styles/breakpoints'

//styled function from emotion. styled.h1 and styled.h2 are used to define the Heading1Styled and Heading2Styled components for h1 and h2 headings.
export const Heading1Styled = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: ${colors.peach};
  @media (min-width: ${breakpoints.m}) {
    font-size: 48px;
    line-height: 58px;
  }
`
export const Heading2Styled = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 38.73px;
  color: ${colors.brown};
`
