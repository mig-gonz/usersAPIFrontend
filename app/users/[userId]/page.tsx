import getUser from "@/lib/getUser";

type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);

  const user = await userData;

  const features = [
    { name: "Name", description: `${user.name}` },
    {
      name: "user name",
      description: `${user.username}`,
    },
    { name: "Email", description: `${user.email}` },
    {
      name: "Phone",
      description: `${user.phone}`,
    },
    { name: "Website", description: `${user.website}` },
    {
      name: "Company name",
      description: `${user.company_name}`,
    },
  ];

  console.log("hello");
  return (
    <div className="bg-white">
      <div className="md:w-[500px] mx-auto max-w-2xl  items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Specific User Data
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
      </div>
    </div>
  );
}
