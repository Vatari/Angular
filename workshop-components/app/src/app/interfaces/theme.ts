import { IUser } from './user';

export interface Itheme {
  themeName: string;
  subscribers: string[];
  userId: IUser;
  posts: string[];
  created_at: string;
  updatedAt: string;
}
