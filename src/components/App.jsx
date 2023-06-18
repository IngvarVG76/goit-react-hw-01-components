import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from "./transactions.json";


import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { Transactions } from './Transactions';

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
