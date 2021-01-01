import '../styles/styles.css'
import HeadPage from '../components/HeadPage'
import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'


function MyApp({ Component, pageProps }) {
    return (
      <div>
        <HeadPage title='Churrascometro' />
        <HeaderPage />
        <Component {...pageProps} />
        <FooterPage />
      </div>
    )
}
export default  MyApp