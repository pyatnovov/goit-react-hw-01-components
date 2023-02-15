import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import User from '../user.json';
import Data from '../data.json';
import Friends from '../friends.json';
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
      <FriendList friends={Friends}/>
    </div>
  );
};
