import '../styles/styles.css'
import FooterPage from '../components/FooterPage'

function MyApp({ Component, pageProps }) {
    return (
      <div>
        <Component {...pageProps} />
        <FooterPage />
      </div>
    )
}
export default  MyApp