import user from './user.json';
import data from './data.json';
import friends from './friends.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
    </div>
  );
};
