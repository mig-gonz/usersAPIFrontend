import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mt-5 bg-base-200">
        <div className="ml-5">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Mock Data</h1>
            <div className="flex flex-col items-center">
              <h2 className="mt-10">
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
