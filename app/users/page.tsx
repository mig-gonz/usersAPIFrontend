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
          const usersData = await response.json();
          setUsers(usersData);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const customScrollbarStyle = `
  /* Customize the scrollbar track */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Style the scrollbar thumb */
  ::-webkit-scrollbar-thumb {
    background-color: #79d09e;
    border-radius: 4px;
  }

  /* Style the scrollbar track */
  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 4px;
  }
`;

  return (
    <>
      <p className="mt-2 text-center">
        Click on any user to see an example of a detail page and have the option
        <br />
        to update their information or delete the user from the database.
      </p>
      <div className="card md:w-[600px] bg-base-100 shadow-xl m-auto mt-5 md:h-[750px] overflow-hidden ">
        <div className="h-full overflow-y-scroll p-5">
          <style>{customScrollbarStyle}</style>
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
      </div>
    </>
  );
};

export default Users;
