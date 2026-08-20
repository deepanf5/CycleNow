export interface UserInfo {
  userName: string;
  email: string;
}

export interface RegisterResponseI {
  message: string;
  token: string;
  userinfo: UserInfo;
}
