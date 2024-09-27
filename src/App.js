// src/App.js
import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';

const USERS_PER_PAGE = 6;

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [orArray, setOrArray] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setOrArray(data)
      });
  }, []);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const currentUsers = users.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const seachInArr = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredUsers = orArray.filter(user => {
      return user.username.toLowerCase().includes(searchValue);
    });
    setUsers(filteredUsers);
  }


  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Card Lists</h1>

      <div class="w-full max-w-sm min-w-[200px] m-auto mb-4 flex justify-center">
        <input onChange={seachInArr} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type username ..." />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {currentUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 py-1 px-3 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
        {/* <span>Page {currentPage} of {totalPages}</span> */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white py-1 px-3 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
