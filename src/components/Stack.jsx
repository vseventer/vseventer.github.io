// Local modules.
import { css } from '../styles/Global';

// Styles.
export default css({
  '& > * + *': {
    marginTop: '$space$md',
  },
  variants: {
    variant: {
      small: {
        '& > * + *': { marginTop: '$space$sm' },
      },
      large: {
        '& > * + *': { marginTop: '$space$lg' },
      },
    },
  },
});
