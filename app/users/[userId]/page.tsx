import getUser from "@/lib/getUser";

type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);

  const user = await userData;

  console.log("hello");
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
