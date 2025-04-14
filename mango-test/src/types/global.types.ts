export interface IUser {
  email: string;
  role: string;
  fullName: string;
  sso?: string;
}

export enum Role {
  USER = "user",
  ADMIN = "admin",
}
