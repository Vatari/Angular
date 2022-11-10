import { Itheme } from './theme';
import { IUser } from './user';

export interface IPost {
  likest: string;
  _id: string;
  text: string;
  userId: IUser;
  themeId: Itheme;
  created_at: string;
  updatedAt: string;
  __v: number;
}
