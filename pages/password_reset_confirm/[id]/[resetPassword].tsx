import React from 'react'
import LandingLayout from '../../../components/LandingLayout/LandingLayout'
import ChangePassword from '../../../components/ChangePassword/ChangePasswordContainer'
import { themeManager } from '../../../manager/themeManager'
import { useRouter } from 'next/router'

const resetPassword = () => {
  const router = useRouter()

  return (
    <LandingLayout
      styleTheme={themeManager.StylesMainSubFolder}
      themePlugin={themeManager.ThemePluginMainSubFolder}
      themeScript={themeManager.ThemeScriptMainSubFolder}
    >
      <div className="min-vh-100">
        <ChangePassword tokenID={router.query.id} uuId={router.query.resetPassword}/>
      </div>
    </LandingLayout>
  )
}

export default resetPassword
