import '../styles/globals.css'
import '../styles/sass/main.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';


const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
