import { ShareMyCompanyPresenter } from './ShareMyCompanyInterface'
import {
  KeyManager
} from '../../manager/keyManager'

export const shareMyCompanyPresenter: ShareMyCompanyPresenter = {
  keyHeaderHolders: KeyManager.HeaderHolders,
  keyHeaderShareInformation: KeyManager.HeaderShareInformation,
  keyHeaderDashBoard: KeyManager.HeaderDashBoard
}
