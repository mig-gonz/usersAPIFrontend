export default async function getUser(userId: string) {
  const res = await fetch(`http://localhost:5000/users/${userId}`);

  if (!res.ok) throw new Error("failed to fetch user");

  return res.json();
}
