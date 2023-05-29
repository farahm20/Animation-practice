import styled from '@emotion/styled'
import yellowFlower from '../../../assets/images/yellow.jpeg'
import whiteFlower from '../../../assets/images/white.jpeg'
import purpleFlower from '../../../assets/images/purple.jpeg'

export const AnimatedContainer = styled.div`
  /* filter: blur(2px); */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 32px);
  max-width: 1300px;
  height: 1300px;
  overflow: hidden;
  z-index: 2;
`

//With background-size: contain;, the background image will be scaled to fit within the div's width or height while maintaining its aspect ratio. The image will be centered within the div using background-position: center;

export const AnimatedYellowFlower = styled.div`
  background-image: url(${yellowFlower});
  background-repeat: no-repeat;
  background-size: contain; //** */
  background-position: center; //** */
  width: 15%;
  height: inherit;
  top: 0;
  position: absolute;
  z-index: 2;
  /* helps us to size elements consistently, so the ratio of an element stays the same as it grows or shrinks. */
  //aspect-ratio: 1; aspect ration i signored if width and height are set.

  animation: dropdown 3000ms infinite linear forwards;
  @keyframes dropdown {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const AnimatedWhiteFlower = styled.div`
  background-image: url(${whiteFlower});
  background-repeat: no-repeat;
  background-size: contain; //** */
  background-position: center; //** */
  width: 25%;
  height: inherit;
  top: 0;
  left: 500px;
  position: absolute;
  z-index: 1;

  animation: dropdown 3000ms infinite linear forwards;
  @keyframes dropdown {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const AnimatedPurpleFlower = styled.div`
  background-image: url(${purpleFlower});
  background-repeat: no-repeat;
  background-size: contain; //** */
  background-position: center; //** */
  width: 15%;
  height: inherit;
  top: 0;
  left: 1000px;
  position: absolute;

  animation: dropdown 3000ms infinite linear forwards;
  @keyframes dropdown {
    from {
      opacity: 0;
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
