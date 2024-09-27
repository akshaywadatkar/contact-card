// src/components/UserCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  const initials = user.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center">
        <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl">
          {initials}
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.company.name}</p>
        </div>
      </div>
      <Link to={`/user/${user.id}`}>
  <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">
    Details
  </button>
</Link>

    </div>
  );
}

export default UserCard;
