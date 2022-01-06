import React from 'react';
import user from 'data/user.json';
import Profile from 'components/Profile';
import statisticalData from 'data/data.json';
import Statistics from 'components/Statistics';
import friends from 'data/friends.json';
import FriendList from 'components/FriendList';
import transactions from 'data/transactions.json';
import TransactionHistory from 'components/TransactionHistory';

export default function App() {
  return (
    <div className="container">
      <div>
        <h2>Задание 1</h2>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <h2>Задание 2</h2>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>
      <div>
        <h2>Задание 3</h2>
        <FriendList friends={friends} />,
      </div>
      <div>
        <h2>Задание 4</h2>
        <TransactionHistory items={transactions} />,
      </div>
    </div>
  );
}
