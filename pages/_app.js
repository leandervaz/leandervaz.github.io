import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import Script from "next/script";
import GoogleAnalytics from '../components/GoogleAnalytics';

const theme = {
  colors: {
    background: '#ffffff',
    primary: 'pink'
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
    <GoogleAnalytics />
    </>
  )
}

export default MyApp
