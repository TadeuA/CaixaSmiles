import React, { FC } from 'react';
import { FiX } from 'react-icons/fi';
import Container from './styles';
import Atoms from '../../atoms';
import { PopUpProps } from './interface';

const PopUp: FC<PopUpProps> = ({ onClosePopUp, active }: PopUpProps) => {
  return (
    <Container.Section active={active}>
      <div>
        <Container.Header>
          <button type="button" onClick={onClosePopUp}>
            <FiX size="1rem" />
          </button>
          <span style={{ borderBottom: '1px solid #000' }}>Crédito</span>
          <span>Débito</span>
          <span>Boleto</span>
        </Container.Header>
        <Container.Main>
          <p>Informações do cartão de crédito</p>
          <span>Concidere apenas em casos de cobrança *</span>
          <Atoms.Input name="titular" placeholder="Nome do titular" />
          <Atoms.Input name="numero" placeholder="Número do Cartão" />
          <aside>
            <Atoms.Input name="validade" placeholder="Mẽs / Ano" />
            <Atoms.Input name="codigo" placeholder="Código" />
            <img src="/icons/card.svg" />
          </aside>
        </Container.Main>
        <Container.Footer>
          <Atoms.DefaultButton
            onClick={onClosePopUp}
            style={{ background: '#465AA8' }}
          >
            Cancelar
          </Atoms.DefaultButton>
          <Atoms.DefaultButton onClick={onClosePopUp}>
            Confirmar
          </Atoms.DefaultButton>
        </Container.Footer>
      </div>
    </Container.Section>
  );
};

export default PopUp;
