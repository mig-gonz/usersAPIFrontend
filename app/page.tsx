import Link from "next/link";

export default function Home() {
  const customScrollbarStyle = `
  /* Hide the scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
`;
  return (
    <div>
      <style>{customScrollbarStyle}</style>
      <div className="md:h-[800px] overflow-hidden mt-5 bg-base-200">
        <div className="ml-5 h-full overflow-y-scroll p-5">
          <div>
            <div>
              <div>
                <h1 className="text-3xl font-bold">Get All Users</h1>
                <h2 className="mt-5">
                  View an example of retrieving a list of all users for your
                  application:
                  <Link href={"/users"}>
                    <span className="btn btn-sm btn-outline btn-success ml-5">
                      /users
                    </span>
                  </Link>
                </h2>
                <p>
                  As well as explore the following actions for individual users:
                </p>
                <ul className="list-disc ml-8 mt-2">
                  <li>Delete users using the DELETE method</li>
                  <li>Update user information using the PUT method</li>
                </ul>
              </div>
              <div className="divider"></div>
              <div className="mt-5">
                <h1 className="text-3xl font-bold">Add New User</h1>
                <h2 className="mt-5">
                  View an example of adding a new user to the database using a
                  POST method:
                  <Link href={"/adduser"}>
                    <span className="btn btn-sm btn-outline btn-success ml-5">
                      /adduser
                    </span>
                  </Link>
                </h2>
                <div className="divider"></div>
                <p className="mt-3">Routes:</p>
                <ul className="list-disc ml-8 mt-2 space-y-3">
                  <li>
                    GET:
                    <code className="bg-gray-100 p-1 rounded-md text-blue-500">
                      https://9tv4edek55.execute-api.us-east-1.amazonaws.com/prod/users
                    </code>
                    , Fetches all users.
                  </li>
                  <li>
                    GET:
                    <code className="bg-gray-100 p-1 rounded-md text-blue-500">
                      https://9tv4edek55.execute-api.us-east-1.amazonaws.com/prod/users/:id
                    </code>
                    , Fetches user by id.
                  </li>
                  <li>
                    POST:
                    <code className="bg-gray-100 p-1 rounded-md text-blue-500">
                      https://9tv4edek55.execute-api.us-east-1.amazonaws.com/prod/users
                    </code>
                    , adds new user.
                  </li>
                  <li>
                    DELETE:
                    <code className="bg-gray-100 p-1 rounded-md text-blue-500">
                      https://9tv4edek55.execute-api.us-east-1.amazonaws.com/prod/users/:id
                    </code>
                    , Deletes user by id.
                  </li>
                  <li>
                    PUT:
                    <code className="bg-gray-100 p-1 rounded-md text-blue-500">
                      https://9tv4edek55.execute-api.us-east-1.amazonaws.com/prod/users/:id
                    </code>
                    , Updates user by id.
                  </li>
                </ul>
                <p className="mt-3">User Object ex.</p>
                <pre className="ml-5">
                  <code>
                    {`User = {
  id: 12,
  name: "John Doe",
  username: "johndoe",
  email: "john@example.com",
  phone: "123-456-7890",
  website: "www.johndoe.com",
  company_name: "ABC Inc.",
  catch_phrase: "Lorem ipsum dolor sit amet",
  bs: "Lorem ipsum",
  Address: {
    street: "123 Main St",
    suite: "Apt 456",
    city: "Cityville",
    zipcode: "12345",
    lat: "37.7749",
    lng: "-122.4194",
  },
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
