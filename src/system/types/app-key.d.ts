import { User } from '../db/entity'

declare global {
  interface IHis {
    license: string
  }
  interface IToken {
    token: string
  }
  interface ILogin {
    email: string
    password: string
    his: string
    masp: string
    hash?: string
  }

  type ILoginForm = Pick<ILogin, 'email' | 'password' | 'remember'>

  interface IRegister {
    email: string
    password: string
    password_confirmation: string
    first_name: string
    last_name: string
    phone: string
    masp?: string
    his?: string
  }
  type IAuth = Pick<
    User,
    | 'apiToken'
    | 'tokenType'
    | 'expiresIn'
    | 'userId'
    | 'his'
    | 'hash'
    | 'remainingDay'
    | 'isVinhVien'
  >
  interface IPermission {
    id: number
    name: string
    guard_name: string
  }
  interface IRole {
    id: number
    name: string
    guard_name: string
  }
  interface IUser {
    id?: number
    name: string
    first_name?: string
    last_name?: string
    email?: string
    user_type?: string
    phone?: string
    point?: string
    team_id?: number
    branch_id?: number
    creator_id?: number
    status?: boolean
    referral?: string
    code?: string
    created_at: string
    updated_at: string
    permissions?: Array<IPermission>
    roles?: Array<IRole>
  }
  interface IPlan {
    id: number
    name: string
    first_name: string
    last_name: string
    email: string
    user_type: string
    status: boolean
    phone?: string
    point?: string
    team_id?: number
    branch_id?: number
    creator_id?: number
    referral?: string
    code?: string
    created_at?: string
    updated_at?: string
    permissions?: Array<IPermission>
    roles?: Array<IRole>
  }
  interface IChromeStart {
    name: string
    latitude: string
    longitude: string
    timezone: string
    ip: string
    ver: string
    platform?: string
    proxy?: string
    mobile?: string
    res?: string
  }

  interface ModalDefaultProps {
    isShow?: boolean
    setIsShow?: Dispatch<SetStateAction<boolean>>
    selectedKpiId?: string
    kpiId?: string
    selectedPlansId?: string
  }
}
