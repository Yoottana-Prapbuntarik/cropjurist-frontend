import { Dispatch } from 'redux'
import { serviceSetToken } from '../apis/baseAPIs'
import { KeyManager } from '../manager/keyManager'

export enum NonDisclosureAPIClient {
    nonDisclosureAPIClientSuccess = 'nonDisclosureAPIClient_Success',
    nonDisclosureAPIClientFailed = 'nonDisclosureAPIClient_Failed'
}

export const nonDisclosureAPIClient: any = (date: string, name1: string, name2: string,
  addressNumber1: string, road1: string,
  province1: string, district1: string, subDistrict1: string,
  zipcode1: string, addressNumber2: string, road2: string,
  province2: string, district2: string, subDistrict2: string,
  zipcode2: string, references1: string, references2: string,
  scopeOfDiscussion: string, dateEnd: string, periodOfSecret: string,
  arbitrationJurisdiction: string, choiceOfLaw: string,
  companyName1: string, companyName2: string, nameOfsigning1: string,
  nameOfsigning2: string, titleAndCapacityOfsigning1: string,
  titleAndCapacityOfsigning2: string) => async (dispatch: Dispatch
) => {
  serviceSetToken({
    method: 'post',
    url: 'nda/',
    data: params(date,
      name1,
      name2,
      addressNumber1,
      road1,
      province1,
      district1,
      subDistrict1,
      zipcode1,
      addressNumber2,
      road2,
      province2,
      district2,
      subDistrict2,
      zipcode2,
      references1,
      references2,
      scopeOfDiscussion,
      dateEnd,
      periodOfSecret,
      arbitrationJurisdiction,
      choiceOfLaw,
      companyName1,
      companyName2,
      nameOfsigning1,
      nameOfsigning2,
      titleAndCapacityOfsigning1,
      titleAndCapacityOfsigning2)
  })

    .then((response) => {
      if (response) {
        dispatch({
          type: NonDisclosureAPIClient.nonDisclosureAPIClientSuccess,
          keyMessage: KeyManager.SendInformationCompanySuccess
        })
      }
    })
}

// export const updatenonDisclosureAPIClient: any = (currentIdInformation: number, date: string, name1: string, name2: string,
//   addressNumber1: string, road1: string,
//   province1: string, district1: string, subDistrict1: string,
//   zipcode1: string, addressNumber2: string, road2: string,
//   province2: string, district2: string, subDistrict2: string,
//   zipcode2: string, references1: string, references2: string,
//   scopeOfDiscussion: string, dateEnd: string, periodOfSecret: string,
//   arbitrationJurisdiction: string, choiceOfLaw: string,
//   companyName1: string, companyName2: string, nameOfsigning1: string,
//   nameOfsigning2: string, titleAndCapacityOfsigning1: string,
//   titleAndCapacityOfsigning2: string) => async (dispatch: Dispatch
// ) => {
//   serviceSetToken({
//     method: 'put',
//     url: `company_information/${currentIdInformation}/edit/`,
//     data: params(
//       date,
//       name1,
//       name2,
//       addressNumber1,
//       road1,
//       province1,
//       district1,
//       subDistrict1,
//       zipcode1,
//       addressNumber2,
//       road2,
//       province2,
//       district2,
//       subDistrict2,
//       zipcode2,
//       references1,
//       references2,
//       scopeOfDiscussion,
//       dateEnd,
//       periodOfSecret,
//       arbitrationJurisdiction,
//       choiceOfLaw,
//       companyName1,
//       companyName2,
//       nameOfsigning1,
//       nameOfsigning2,
//       titleAndCapacityOfsigning1,
//       titleAndCapacityOfsigning2
//     )
//   })

//     .then((response) => {
//       if (response) {
//         dispatch({
//           type: NonDisclosureAPIClient.nonDisclosureAPIClientSuccess,
//           keyMessage: KeyManager.SendInformationCompanySuccess
//         })
//       }
//     })

//     .catch((error) => {
//       if (error.response) {
//         dispatch({
//           type: NonDisclosureAPIClient.nonDisclosureAPIClientFailed,
//           keyMessage: error.response.data.detail
//         })
//       }
//     })
// }

const params = (
  date: string,
  name1: string,
  name2: string,
  addressNumber1: string, road1: string,
  province1: string, district1: string, subDistrict1: string,
  zipcode1: string, addressNumber2: string, road2: string,
  province2: string, district2: string, subDistrict2: string,
  zipcode2: string, references1: string, references2: string,
  scopeOfDiscussion: string, dateEnd: string, periodOfSecret: string,
  arbitrationJurisdiction: string, choiceOfLaw: string,
  companyName1: string, companyName2: string, nameOfsigning1: string,
  nameOfsigning2: string, titleAndCapacityOfsigning1: string,
  titleAndCapacityOfsigning2: string
) => {
  return {
    date: date,
    name_1: name1,
    name_2: name2,
    address_1: addressNumber1 + ' ' + road1 + ' ' + province1 + ' ' + district1 + ' ' + subDistrict1 + ' ' + zipcode1,
    address_2: addressNumber2 + ' ' + road2 + ' ' + province2 + ' ' + district2 + ' ' + subDistrict2 + ' ' + zipcode2,
    references_1: references1,
    references_2: references2,
    scope_of_discussion: scopeOfDiscussion,
    end_date: dateEnd,
    period_of_secret: periodOfSecret,
    arbitration_jurisdiction: arbitrationJurisdiction,
    choice_of_law: choiceOfLaw,
    company_name_1: companyName1,
    company_name_2: companyName2,
    name_of_signing_1: nameOfsigning1,
    name_of_signing_2: nameOfsigning2,
    title_and_capacity_of_signing_1: titleAndCapacityOfsigning1,
    title_and_capacity_of_signing_2: titleAndCapacityOfsigning2
  }
}
