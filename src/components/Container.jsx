// Local modules.
import Center from './Center';
import { css } from '../styles/Global';

// Components.
export default css(Center, {
  maxWidth: 1024,
  width: '100%',
  padding: '$space$md',

  variants: {
    variant: {
      small: { padding: '$space$sm' },
      large: { padding: '$space$lg' },
    },
  },
});
