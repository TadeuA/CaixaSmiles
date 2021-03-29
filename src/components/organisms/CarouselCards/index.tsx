import React, { FC } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Container from './styles';
import Molecules from '../../molecules';
import CarouselCardProps, { RouteProps } from './interface';

const Carousel: FC<CarouselCardProps> = ({ list }: CarouselCardProps) => {
  return (
    <Container
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      autoPlay={false}
    >
      {list === 'nordeste' ? (
        <>
          <Molecules.CardDestination
            id={1}
            rota="Rota do Cangaço e Lampião"
            capa="https://raw.githubusercontent.com/matheusOliveira99/testeJson/main/json/img/Caminhos%20do%20S%C3%A3o%20Francisco.jpg"
          />{' '}
          <Molecules.CardDestination
            id={2}
            rota="Caminhos do São Francisco"
            capa="https://raw.githubusercontent.com/matheusOliveira99/testeJson/main/json/img/Caminhos%20do%20S%C3%A3o%20Francisco.jpg"
          />{' '}
          <Molecules.CardDestination
            id={3}
            rota="Costa do Cacau"
            capa="https://github.com/matheusOliveira99/testeJson/blob/main/json/img/Costa%20do%20Cacau.jpg?raw=true"
          />
        </>
      ) : list === 'centro' ? (
        <>
          <Molecules.CardDestination
            id={4}
            rota="Chapada dos Veadeiros"
            capa="https://github.com/matheusOliveira99/testeJson/blob/main/json/img/chapada-dos-veadeiros.jpg?raw=true"
          />{' '}
          <Molecules.CardDestination
            id={5}
            rota="Vale da Serra da Mesa"
            capa="https://github.com/matheusOliveira99/testeJson/blob/main/json/img/serra-da-mesa.jpg?raw=true"
          />{' '}
          <Molecules.CardDestination
            id={6}
            rota="Pegada do Cerrado"
            capa="https://github.com/matheusOliveira99/testeJson/blob/main/json/img/pegadas%20do%20cerrado.jpg?raw=true"
          />
        </>
      ) : (
        list === 'sul' && (
          <>
            <Molecules.CardDestination
              id={7}
              rota="Rota dos Vinhedos"
              capa="https://github.com/matheusOliveira99/testeJson/blob/main/json/Rota%20Dos%20vinhedos/vinicola.jpg?raw=true"
            />{' '}
            <Molecules.CardDestination
              id={8}
              rota="Serra do Rio do Castro"
              capa="https://github.com/matheusOliveira99/testeJson/blob/main/json/img/Serra%20do%20Rio%20do%20Castro.jpg?raw=true"
            />{' '}
            <Molecules.CardDestination
              id={9}
              rota="Rota Vale Europeu"
              capa="https://github.com/matheusOliveira99/testeJson/blob/main/json/img/rota%20do%20vale%20europeu.jpeg?raw=true"
            />
          </>
        )
      )}
    </Container>
  );
};

export default Carousel;
