import React, { FC, useCallback } from 'react';
import { useRouter } from 'next/router';

import CardDestinationProps from './interface';
import Container, { Button } from './style';
import Atoms from '../../atoms';

const CardDestination: FC<CardDestinationProps> = ({
  rota,
  capa,
  id,
}: CardDestinationProps) => {
  const router = useRouter();

  const handleLogin = useCallback(async () => {
    router.push({ pathname: '/route', query: { route: id } });
  }, [router]);
  return (
    <>
      <Container image={capa}>
        <Atoms.BookmarkButton />

        <strong>{rota}</strong>
      </Container>
      <Button type="button" onClick={handleLogin} />
    </>
  );
};

export default CardDestination;
