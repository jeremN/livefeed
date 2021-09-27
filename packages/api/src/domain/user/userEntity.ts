enum UserRole {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  PUBLISHER = 'publisher',
  UNSET = 'unset',
}
enum AccountType {
  BASIC = 'basic',
  ORG = 'org',
  INDIVIDUAL = 'individual',
}

interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: Array<UserRole>;
  accountType: AccountType;
  linkedTo: string;
}

export class User {
  public id = '';
  public linkedTo = '';
  public firstname = '';
  public lastname = '';
  public email = '';
  public role = [UserRole.UNSET];
  public accountType = AccountType.BASIC;

  constructor(userModel: IUser) {
    this.id = userModel.id;
    this.firstname = userModel.firstname;
    this.lastname = userModel.lastname;
    this.email = userModel.email;
    this.role = userModel.role;
    this.accountType = userModel.accountType;
    this.linkedTo = userModel.linkedTo;
  }
}
