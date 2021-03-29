import React, { FC } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Container from './styles';
import SliderProps from './interface';

const Slider: FC<SliderProps> = ({ images }: SliderProps) => {
  console.log(images);
  return (
    <Container showStatus={false} showThumbs={false}>
      {images &&
        images.map(item => (
          <div key={item}>
            <img src={item} />
          </div>
        ))}
    </Container>
  );
};

export default Slider;
