
export interface Accounts {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt?: Date;
}
export interface UserAccount extends Omit<Accounts, 'password'> {
    isAuthenticated: boolean;
  }
  
