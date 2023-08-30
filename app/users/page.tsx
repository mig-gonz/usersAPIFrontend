"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        if (response.ok) {
          const usersData = await response.json(); // Parse the response
          setUsers(usersData); // Update the users state
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <p className=" mt-2">
        Click on any user to see an example of a detail page and have the option
        <br />
        to update their information or delete the user from the database.
      </p>
      <div className="card md:w-[600px] bg-base-100 shadow-xl m-auto mt-5">
        {users?.map((user: any) => {
          return (
            <div key={user.id} className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>user name: {user.username}</p>
              <p>email: {user.email}</p>
              <div className="card-actions items-center ">
                <p>Go to user page:</p>

                <Link href={`/users/${user.id}`}>
                  <button className="btn btn-outline btn-success">
                    userId: {user.id}
                  </button>
                </Link>
              </div>
              <div className="divider"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
