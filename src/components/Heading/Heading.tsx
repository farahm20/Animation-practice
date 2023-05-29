import { Heading1Styled, Heading2Styled } from './styles'

//generates differnt type of headings based on the 'type' prop

//enum provides mapping between heading types
export enum HeadingType {
  H1 = 'Heading1Styled',
  H2 = 'Heading2Styled',
}

interface HeadingProps {
  type: HeadingType
  children: React.ReactNode
  className?: string
  sx?: object
}

//object to map the enum values to the actual styled components.
const headings = {
  Heading1Styled: Heading1Styled,
  Heading2Styled: Heading2Styled,
}

const Heading = ({ type, children, ...rest }: HeadingProps) => {
  const Heading = headings[type]
  return <Heading {...rest}>{children}</Heading>
}

export default Heading
