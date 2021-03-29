import 'styled-components';

import { colors } from './colors';

import { fonts } from './fonts';

import { shadows } from './shadows';

import { paddings } from './paddings';

import { sizes } from './sizes';

import { gradients } from './gradients';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
    shadows: typeof shadows;
    paddings: typeof paddings;
    sizes: typeof sizes;
    gradients: typeof gradients;
  }
}
