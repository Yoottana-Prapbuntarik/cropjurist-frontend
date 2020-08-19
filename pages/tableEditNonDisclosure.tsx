import React from 'react'
import MainLayoutMember from '../components/MainLayoutMember/MainLayoutMember'
import { themeManager } from '../manager/themeManager'
import TableEditNonDisclosure from '../components/TableEditNonDisclosure/TableEditNonDisclosureContainer'
const editNonDisclosure = (): any => {
  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className=" mb-3 container text-center">
        <TableEditNonDisclosure />
      </div>
    </MainLayoutMember>
  )
}

export default editNonDisclosure
