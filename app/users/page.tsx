import React from "react";
import Link from "next/link";

async function getAllUsers() {
  const res = await fetch("http://localhost:5000/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Users = async () => {
  const users = await getAllUsers();
  return (
    <div className="card md:w-[600px] bg-base-100 shadow-xl m-auto mt-5">
      {users.map((user: any) => {
        return (
          <div key={user.id} className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>user name: {user.username}</p>
            <p>email: {user.email}</p>
            <div className="card-actions justify-end">
              <Link href={`/users/${user.id}`}>
                <button className="btn btn-primary">/user/:id</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
