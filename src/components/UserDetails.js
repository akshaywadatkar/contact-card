import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [industry, setIndustry] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');


  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
      setCompany(data.company.name);
      setIndustry(data.company.bs);
      setCatchPhrase(data.company.catchPhrase);
      setAddress(data.address?.suite + ', ' + data.address?.street + ', ' + data.address?.city);
    };
    fetchUserDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('name:', name, 'value:', value);
    if (name !== 'company') {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));

    }


  };

  const handleSave = () => {
    alert('User details updated successfully');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h1 className="text-2xl font-bold mb-6">User Details for @{user.username}</h1>
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded text-3xl">
          {user.name?.split(' ').map(name => name[0]).join('')}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-bold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={user.name || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-bold mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={user.email || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        {/* industry */}
        <div>
          <label className="block font-bold mb-1">Industry</label>
          <input
            type="text"
            name="company"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          /></div>


        {/* username */}

        <div>
          <label className="block font-bold mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={user.username || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        {/* catchPhrase */}

        <div> <label className="block font-bold mb-1">Catch Phrase</label>
          <input
            type="text"
            name="catchPhrase"
            value={catchPhrase}
            onChange={(e) => setCatchPhrase(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>








        <div>
          <label className="block font-bold mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <button
          onClick={handleSave}
          className=" text-white py-1 px-2 h-10 mt-auto border rounded-xl hover:bg-green-600 "
          style={{ backgroundColor: '#7386c6' }}
        >
          Update
        </button>

      </div>
    </div>
  );
};

export default UserDetails;
