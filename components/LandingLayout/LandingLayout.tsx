
import Head from 'next/head'
import Navigation from '../Navigation/NavigationContainer'
import Footer from '../Footer/FooterViewContainer'
import { withTranslation } from '../../i18n'
import useAuthenticated from '../../user/checkToken'
import Router from 'next/router'
import { routeToMemberPage } from '../../manager/routerManager'

const LandingLayout = (props: any) => {
  const [isAuthenticated] = useAuthenticated(false)

  if (isAuthenticated) {
    Router.replace(routeToMemberPage)
    return null
  } else {
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
}

export default withTranslation('common')(LandingLayout)
