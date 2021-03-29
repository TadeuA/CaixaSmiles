import { ThemedStyledFunction } from 'styled-components';

export default interface StyleContainerProps {
  Header: ThemedStyledFunction;
  Main: ThemedStyledFunction;
  Footer: ThemedStyledFunction;
  Section: ThemedStyledFunction;
}

export interface PopUpProps {
  onClosePopUp: (boolean) => void;
  active: boolean;
}
