import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mt-5 bg-base-200">
        <div className="ml-5">
          <div className="max-w-md">
            <div className="flex space-x-14 ">
              <div>
                <h1 className="text-3xl font-bold">Get All Users</h1>
                <h2 className="mt-5">
                  View an example of how to retrieve a list of all users for
                  your application:
                </h2>
                <Link href={"/users"}>
                  <button className="btn btn-wide btn-accent mt-5">
                    /users
                  </button>
                </Link>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Add New User</h1>
                <h2 className="mt-5">
                  View an example of how to add a new user to the database using
                  the POST method:
                </h2>
                <Link href={"/adduser"}>
                  <button className="btn btn-wide btn-accent mt-5">
                    /adduser
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
