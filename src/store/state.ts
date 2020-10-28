export interface UserInfo {
  userName: string;
  supperAdmin: boolean;
}

export interface State {
  token: string;
  userInfo: UserInfo;
}

// 初始状态
const state: State = {
  token: '',
  userInfo: {
    userName: '',
    supperAdmin: false
  }
}

export default state
