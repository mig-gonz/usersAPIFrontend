"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export default function UserPage({ params: { userId } }: Params) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/${userId}`);
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleDelete = async () => {
    if (!user) return;

    try {
      const response = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "DELETE",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (response.ok) {
        router.push("/users");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const features = [
    { name: "Name:", description: `${user?.name}` },
    {
      name: "user name:",
      description: `${user?.username}`,
    },
    { name: "Email:", description: `${user?.email}` },
    {
      name: "Phone:",
      description: `${user?.phone}`,
    },
    { name: "Website:", description: `${user?.website}` },
    {
      name: "Company name:",
      description: `${user?.company_name}`,
    },
  ];

  return (
    <div>
      <div className="mt-6 md:w-[500px] mx-auto max-w-2xl items-center gap-x-8 px-4  sm:px-6  lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Specific User
          </h2>
          <p className="mt-4 text-gray-500">
            This page displays detailed information about a specific user with
            the ID: {userId}. You can see various details about the user, such
            as their name, email, phone number, and more.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:grid grid-cols-2 gap-4 mt-8">
          <button
            className="btn btn-outline btn-error w-40  mt-3 "
            onClick={handleDelete}
          >
            Delete
          </button>
          <Link
            href={`/users/${userId}/update`}
            className="btn btn-outline btn-success mt-3 w-40"
          >
            Update
          </Link>
          <Link href={"/"} className="btn mt-3 btn-outline btn-warning w-40">
            Go Back
          </Link>
          <Link href={"/"} className="btn mt-3 btn-outline btn-warning w-40">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
