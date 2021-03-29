import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const Container = styled(Carousel)`
  ul.slider.animated,
  ul.slider {
    width: 130px;
  }
  li.slide {
    width: 100% !important;
    margin-left: var(--size-15) !important;
  }
`;

export default Container;
