import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});

  useEffect(() => {
   
    const fetchUserDetails = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
    };
  }, [id]);

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save user information (simulated)
  const handleSave = () => {
    setUser(updatedUser);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h1 className="text-2xl font-bold mb-6">User Details for @{user.username}</h1>

      {/* Display the user avatar */}
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-full text-3xl">
          {user.name?.split(' ').map(name => name[0]).join('')}
        </div>
      </div>

      {/* Display or Edit User Details */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-bold mb-1">Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div>
          <label className="block font-bold mb-1">Email Address</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        <div>
          <label className="block font-bold mb-1">Company</label>
          {isEditing ? (
            <input
              type="text"
              name="company"
              value={updatedUser.company?.name}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          ) : (
            <p>{user.company?.name}</p>
          )}
        </div>

        <div>
          <label className="block font-bold mb-1">Address</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={`${updatedUser.address?.suite}, ${updatedUser.address?.street}, ${updatedUser.address?.city}`}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          ) : (
            <p>{`${user.address?.suite}, ${user.address?.street}, ${user.address?.city}`}</p>
          )}
        </div>

        <div>
          <label className="block font-bold mb-1">Phone</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={updatedUser.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>

        <div>
          <label className="block font-bold mb-1">Website</label>
          {isEditing ? (
            <input
              type="text"
              name="website"
              value={updatedUser.website}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          ) : (
            <p>{user.website}</p>
          )}
        </div>
      </div>

      {/* Edit and Save Buttons */}
      <div className="mt-6">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
          >
            Edit
          </button>
        )}
        {isEditing && (
          <button
            onClick={handleEdit}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
