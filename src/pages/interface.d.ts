import { ThemedStyledFunction } from 'styled-components';

export default interface StyleContainerProps {
  Page: ThemedStyledFunction;
  Section: ThemedStyledFunction;
  Routes: ThemedStyledFunction;
}

interface RouteListProps {
  id: number;
  rota: string;
  capa: string;
}

export interface RegionListProps {
  tag: string;
  lista_rotas: RouteListProps[];
}
