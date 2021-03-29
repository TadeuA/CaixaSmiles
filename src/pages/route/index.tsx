import React, { FC, useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Atoms from '../../components/atoms';
import Organisms from '../../components/organisms';
import Container, { Button } from './styles';
import ProductsProps from './interface';

const Route: FC = () => {
  const router = useRouter();
  const [product, setProduct] = useState<ProductsProps>({} as ProductsProps);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const getRoute = useCallback(async () => {
    const { route } = router.query;
    const response = await axios.get(
      'https://raw.githubusercontent.com/matheusOliveira99/testeJson/main/json/produtos.json',
    );
    const productSelected = response.data.produtos.find(
      item => item.id === Number(route),
    );
    console.log(response);
    console.log(productSelected);
    setProduct(productSelected);
  }, [setProduct, router]);

  useEffect(() => {
    getRoute();
  }, []);

  return (
    <>
      <Head>
        <title>Home | Big Smiles</title>
      </Head>
      <Organisms.Slider images={product?.carrosselDeImagens ?? []} />
      <Container>
        <div>
          <h3>CAIXA SMILES</h3>
          <h1>{product?.titulo}</h1>
          <strong>R$ {product?.valor}</strong>
          <span>
            Que se convertem em {product?.valor * product?.vip} milhas
          </span>
          <p>{product?.descricao}</p>
          <h2>O que você vai experimentar</h2>
          <p>{product?.experiencia}</p>
          <h4>{product?.callToAction}</h4>
          <Atoms.DefaultButton onClick={() => setIsOpen(!isOpen)}>
            Comprar Caixa Smiles
          </Atoms.DefaultButton>
        </div>
      </Container>
      {isOpen && (
        <Organisms.PopUp
          active={isOpen}
          onClosePopUp={() => setIsOpen(!isOpen)}
        />
      )}
      <Button type="button" onClick={() => router.back()}>
        <AiOutlineArrowLeft size="1.2rem" />
      </Button>
    </>
  );
};

export default Route;
