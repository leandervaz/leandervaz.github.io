import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import Script from "next/script";

const theme = {
  colors: {
    background: '#ffffff',
    primary: 'pink'
  },
}
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script>


    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}

export default MyApp
