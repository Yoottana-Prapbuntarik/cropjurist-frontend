import React from 'react'
import { themeManager } from '../../manager/themeManager'
import MainLayoutMember from '../../components/MainLayoutMember/MainLayoutMember'
import { useRouter } from 'next/router'
import ConfirmMyNonDisclosure from '../../components/ConfirmMyNonDisclosure/ConfirmMyNonDisclosureContainer'
const disclosure = () => {
  const router = useRouter()

  return (
    <MainLayoutMember
      styleTheme={themeManager.StylesMainFolder}
      themePlugin={themeManager.ThemePluginMainFolder}
      themeScript={themeManager.ThemeScriptMainFolder}
    >
      <div className="mx-auto text-center">
        <ConfirmMyNonDisclosure pkId = {router.query.pk_id} />
        <h3>pk_id : {router.query.pk_id}</h3>
      </div>
    </MainLayoutMember>
  )
}

export default disclosure
