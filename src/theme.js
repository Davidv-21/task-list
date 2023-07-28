import { extendTheme } from '@chakra-ui/react';

const colors = {
  light: {
    bg: '#ffffff',
    text: '#333333',
  },
  dark: {
    bg: '#1a1a1a',
    text: '#ffffff',
  },
};

const theme = extendTheme({
  colors,
});

export default theme;
