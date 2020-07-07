import Head from 'next/head'
import Navigation from '../Navigation/NavigationContainer'
import Footer from '../Footer/FooterViewContainer'
import { withTranslation } from '../../i18n'
import checkToken from '../../user/checkToken'

const LandingLayout = (props: any) => {
  checkToken()

  return (
    <div className="page-wrapper">
      <Head>
        <title>{props.t('landingTitle')}</title>

        <link href={props.styleTheme} rel="stylesheet" />
        <script src={props.themePlugin} />
        <script src={props.themeScript} />
      </Head>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}

export default withTranslation('common')(LandingLayout)
