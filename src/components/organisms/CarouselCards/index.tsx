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
            capa="/capa/rotadocangaçoelampiao.jpg"
          />{' '}
          <Molecules.CardDestination
            id={2}
            rota="Caminhos do São Francisco"
            capa="/capa/CaminhosdoSãoFrancisco.jpg"
          />{' '}
          <Molecules.CardDestination
            id={3}
            rota="Costa do Cacau"
            capa="/capa/CostadoCacau.jpg"
          />
        </>
      ) : list === 'centro' ? (
        <>
          <Molecules.CardDestination
            id={4}
            rota="Chapada dos Veadeiros"
            capa="/capa/chapada-dos-veadeiros.jpg"
          />{' '}
          <Molecules.CardDestination
            id={5}
            rota="Vale da Serra da Mesa"
            capa="/capa/serra-da-mesa.jpg"
          />{' '}
          <Molecules.CardDestination
            id={6}
            rota="Pegada do Cerrado"
            capa="/capa/pegadasdocerrado.jpg"
          />
        </>
      ) : (
        list === 'sul' && (
          <>
            <Molecules.CardDestination
              id={7}
              rota="Rota dos Vinhedos"
              capa="/capa/rotavaledosvinhedos.jpg"
            />{' '}
            <Molecules.CardDestination
              id={8}
              rota="Serra do Rio do Castro"
              capa="https://github.com/matheusOliveira99/testeJson/blob/main/json/img/Serra%20do%20Rio%20do%20Castro.jpg?raw=true"
            />{' '}
            <Molecules.CardDestination
              id={9}
              rota="Rota Vale Europeu"
              capa="/capa/rotadovaleeuropeu.jpeg"
            />
          </>
        )
      )}
    </Container>
  );
};

export default Carousel;
