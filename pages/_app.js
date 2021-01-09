import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import { theme } from '../styles/tokens'
import { ThemeProvider } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
