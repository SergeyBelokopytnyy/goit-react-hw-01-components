// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import Friends from 'components/friends/FriendList';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        src={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
    </div>
  );
}
