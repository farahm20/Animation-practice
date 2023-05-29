import Heading, { HeadingType } from '../../components/Heading/Heading'
import { HomeContainer, AnimateHeading } from './styles'
const Home = () => {
  return (
    <div>
      <HomeContainer>
        <AnimateHeading>
          <Heading type={HeadingType.H1} sx={{ mb: 4 }}>
            Let's show an Animated Background
          </Heading>
        </AnimateHeading>
      </HomeContainer>
    </div>
  )
}

export default Home
