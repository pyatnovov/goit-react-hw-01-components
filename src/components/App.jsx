import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import User from './Profile/user.json';
import Data from './Statistics/data.json';
import Friends from './FriendList/friends.json';
import Items from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />  
      <Statistics title="Upload stats" stats={Data} />

      <FriendList friends={Friends} />
      <TransactionHistory items={Items} key={Items.id}/>
    </div>
  );
};


