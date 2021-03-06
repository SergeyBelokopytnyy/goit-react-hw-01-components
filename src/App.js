import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import Friends from 'components/friends/FriendList';
import TransactionHistory from 'components/transaction/TransactionHistory';

export default function App() {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        src={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
