import { useEffect, useState } from 'react'
import { routeToMemberPage } from '../manager/routerManager'

const useAuthentication = (defaultValue) => {
  const [isAuthenticated, setAuthenticated] = useState(defaultValue)

  useEffect(() => {
    if (localStorage.getItem('access-token') && window.location.pathname !== routeToMemberPage) {
      setAuthenticated(true)
    }
  }, [])
  return [isAuthenticated, setAuthenticated]
}

export default useAuthentication
