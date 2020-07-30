import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import NonDisclosureManagerContainer from '../components/nonDisclosureManager/nonDisclosureManagerContainer'
import NonDisclosureContainer from '../components/nonDisclosureComponent/nonDisclosureContainer'
const nonDisclosure = ():any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="mb-3">
        <NonDisclosureManagerContainer>
          <NonDisclosureContainer/>
        </NonDisclosureManagerContainer>
      </div>
    </MainLayoutMember>
  )
}

export default nonDisclosure
