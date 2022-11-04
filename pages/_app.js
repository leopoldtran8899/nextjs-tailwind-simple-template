import '../styles/globals.css'
import { AppProvider } from '../context/app-context'
function MyApp({ Component, pageProps }) {
  return (<AppProvider>
    <Component {...pageProps} />
  </AppProvider>)
}

export default MyApp
