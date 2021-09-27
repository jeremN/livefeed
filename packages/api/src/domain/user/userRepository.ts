import { User } from './userEntity';

export interface UserRepository {
  create(user: User): Promise<void>;

  update(user: User): Promise<void>;

  delete(userId: string): Promise<void>;

  getUserById(userId: string): Promise<User>;

  getUserByEmailAndPassword(email: string, password: string): Promise<User>;

  getAll(): Promise<User[]>;
}
