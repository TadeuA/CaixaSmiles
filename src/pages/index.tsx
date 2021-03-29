import React, { FC, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Container from './styles';
import list_regions from '../../mocks/list_regions.json';
import Organisms from '../components/organisms';
import { RegionListProps } from './interface';

const App: FC = () => {
  return (
    <Container.Page>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <Container.Section>
        <h1>Compre experiências e nós as transportaremos em sonhos</h1>

        <p>
          A Caixa Smiles é uma experiência multi-sensorial que te faz viajar sem
          sair de casa. Veja seu dinheiro se transformar em milhas.
        </p>
        <img src="/images/ilustração.svg" alt="Caixa Smiles" />
      </Container.Section>
      <p>
        A Caixa Smiles foi criada para trazer aromas, sabores, texturas, sons e
        sentidos. Pensada para democratizar o acesso de cultura, lazer e
        regionalismos, tornando a experiência de viagem mais inclusiva à todos.
        Um dos intuitos dessa é fazer com que você decida seus futuros destinos,
        vivenciando o agora e transformando este futuro em milhas.
      </p>

      <Container.Routes>
        <h1>Nortedeste</h1>
        <Organisms.CarrouselCards list="nordeste" />
      </Container.Routes>
      <Container.Routes>
        <h1>Centro-Oest</h1>
        <Organisms.CarrouselCards list="centro" />
      </Container.Routes>
      <Container.Routes>
        <h1>Sul</h1>
        <Organisms.CarrouselCards list="sul" />
      </Container.Routes>
    </Container.Page>
  );
};

export default App;
