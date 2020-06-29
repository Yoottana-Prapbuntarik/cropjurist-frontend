import React from 'react'
import IncorporationManagerContainer from '../components/IncorporationManager/IncorporationManagerContainer'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import ShareMyCompanyContainer from '../components/ShareMyCompany/ShareMyCompanyContainer'

const shareMyCompany = ():any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <IncorporationManagerContainer>
        <ShareMyCompanyContainer/>
      </IncorporationManagerContainer>
    </MainLayoutMember>
  )
}

export default shareMyCompany
