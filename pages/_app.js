import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import { theme } from '../styles/tokens';
import { ThemeProvider } from 'styled-components';
import { PokemonsProvider } from '../components/contexts/PokeContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <PokemonsProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PokemonsProvider>
  )
}
