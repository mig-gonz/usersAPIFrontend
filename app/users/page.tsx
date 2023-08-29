import React from "react";
import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";

const Users = async () => {
  const usersData: Promise<User[]> = await getAllUsers();

  const users = await usersData;

  console.log("hello");
  return (
    <div className="card md:w-[600px] bg-base-100 shadow-xl m-auto mt-5">
      {users.map((user: any) => {
        return (
          <div key={user.id} className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>user name: {user.username}</p>
            <p>email: {user.email}</p>
            <div className="card-actions items-center ">
              <p>View an example of get user by id for your application:</p>
              <Link href={`/users/${user.id}`}>
                <button className="btn btn-accent">userId: {user.id}</button>
              </Link>
            </div>
            <div className="divider"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
