import { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'
import { IDashboardState } from './main/analysis/type'

// 专门存放vuex里的类型
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
