import {
  AnimatedContainer,
  AnimatedPurpleFlower,
  AnimatedWhiteFlower,
  AnimatedYellowFlower,
} from './styles'
interface FlowerProps {
  children?: React.ReactNode
}
const Flowers = ({ children }: FlowerProps) => {
  return (
    <AnimatedContainer>
      <AnimatedYellowFlower />
      <AnimatedWhiteFlower />
      <AnimatedPurpleFlower />
    </AnimatedContainer>
  )
}

export default Flowers
