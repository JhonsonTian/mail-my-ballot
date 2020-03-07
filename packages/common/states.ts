import { _Id } from './util'

interface BaseInfo {
  state: string
  addressId: string
}

export interface FloridaInfo extends _Id, BaseInfo {
  state: 'Florida'
  name: string
  birthdate: string
  email: string
  uspsAddress: string
  county: string
}

export type RegistrationInfo = FloridaInfo
