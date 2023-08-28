import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mt-5 bg-base-200">
        <div className="ml-5">
          <div className="max-w-md">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold">getAllUsers()</h1>
              <h2 className="mt-5">
                View an example of get all users for your application:
              </h2>
              <Link href={"/users"}>
                <button className="btn btn-wide btn-accent mt-2">/users</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
