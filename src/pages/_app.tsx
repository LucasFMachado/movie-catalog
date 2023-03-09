import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Modal from 'react-modal'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import theme from '../styles/themes/default'

Modal.setAppElement('#__next')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Movie Catalog</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
