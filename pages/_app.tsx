import React from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Loading from '../components/Loading'
function MyApp({ Component, pageProps }: AppProps) {
      const [isLoading, setIsLoading] = React.useState(false)
      React.useEffect(() => {
            setTimeout(() => { setIsLoading(true) }, 2000)
      })
      return (
            (!isLoading) ? <Loading /> : <Component {...pageProps} />
      )
}

export default MyApp
