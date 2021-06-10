import {User} from './user.model';

export class UsersService {
  users: User[] = [
    {Name: 'saxeli', status: 'A', statusChangeCount: 5},
    {Name: 'saxeli', status: 'C', statusChangeCount: 5}];

  getUserCount(index: number): number {
    return this.users[index].statusChangeCount;
  }

}
