export interface UserInfo {
  userName: string;
  email: string;
}

export interface RegisterResponseI {
  message: string;
  token: string;
  userInfo: UserInfo;
  status: number;
}

export interface UserLoginI {
  email: string;
  password: string;
}
