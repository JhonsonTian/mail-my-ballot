import { IRpc, RpcRet } from '@tianhuil/simple-trpc/dist/type'
import { _Id, WithoutId } from './util'
import { Address } from './address'
import { RegistrationInfo } from './states'

export interface IVbmRpc extends IRpc<IVbmRpc> {
  add(x: number, y: number): Promise<RpcRet<number>>
  addLocale(address: WithoutId<Address>): Promise<RpcRet<string>>
  register(info: RegistrationInfo): Promise<RpcRet<string>>
}
