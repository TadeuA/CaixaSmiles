import CarouselCards from './CarouselCards';
import Slider from './Slider';
import PopUp from './PopUp';

export default interface OrganismsProps {
  CarrouselCards: typeof CarrouselCards;
  Slider: typeof Slider;
  PopUp: typeof PopUp;
}
