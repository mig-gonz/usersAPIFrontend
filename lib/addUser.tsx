export default async function addUser(newUser: any) {
  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    // This will activate an error handling mechanism
    throw new Error("Failed to add user");
  }

  return response.json();
}
