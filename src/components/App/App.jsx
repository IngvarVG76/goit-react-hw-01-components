import user from '../database/user.json';
import data from '../database/data.json';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { Transactions } from '../Transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
