import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  const initials = user.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex">
    
      <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded text-2xl font-bold">
        {initials}
      </div>
    
      <div className="ml-4 flex-1 ">
      
        <div className=" justify-between items-center mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <h2 className="text-lg font-bold">{user.name} <span className="text-gray-500">@{user.username}</span></h2>
            <a href={`mailto:${user.email}`} className="text-blue-500">{user.email}</a>
          </div>
          <div>
            <p className="text-gray-600"><span className="font-bold">Phone: </span>{user.phone}</p>
          <p>Website : <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {user.website}
            </a></p>
          </div>
        </div>
        <div className=" justify-between items-center mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        <p className="text-gray-600 mt-2">Company: {user.company.name}</p>
        <Link to={`/user/${user.id}`}>
          <div className="flex ">
            <button className="text-blue-500 bg-white border-2 border-gray-500 py-1 px-3 rounded-full flex items-center">
              <span>Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 6l6 6l-6 6" />
</svg>
            </button>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default UserCard;
