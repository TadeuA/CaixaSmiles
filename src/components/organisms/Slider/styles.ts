import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const Container = styled(Carousel)`
  img {
    border-bottom-right-radius: var(--size-15) !important;
    border-bottom-left-radius: var(--size-15) !important;
    height: 14rem;
  }

  ul.control-dots {
    bottom: 0 !important;
  }
  li.dot {
    border-radius: 0 !important;
    width: 30px !important;
    height: 5px !important;
  }
`;

export default Container;
