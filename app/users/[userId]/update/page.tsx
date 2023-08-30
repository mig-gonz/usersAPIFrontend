"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Params = {
  params: {
    userId: string;
  };
};

type UserWithoutId = Omit<User, "id">;

export default function UpdateUserPage({ params: { userId } }: Params) {
  const router = useRouter();
  const [formData, setFormData] = useState<UserWithoutId>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company_name: "",
    catch_phrase: "",
    bs: "",
    Address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      lat: "",
      lng: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/${userId}`);
        const userData = await res.json();
        setFormData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push(`/users/${userId}`);
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-center mt-5 font-bold mb-4">
        Edit User Information
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <label htmlFor="name" className="text-sm font-medium self-center">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border rounded-md py-2 px-4"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <label htmlFor="username" className="text-sm font-medium self-center">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border rounded-md py-2 px-4"
          />
        </div>
        {/* Add input fields for other properties */}
        <div className="grid grid-cols-2 gap-4">
          <label htmlFor="email" className="text-sm font-medium self-center">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border rounded-md py-2 px-4"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <label htmlFor="phone" className="text-sm font-medium self-center">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border rounded-md py-2 px-4"
          />
        </div>
        {/* Add more input fields for other properties */}
        <button type="submit" className="btn btn-sm btn-outline btn-success">
          Update
        </button>
        <Link href={"/"} className="btn btn-sm btn-outline btn-warning">
          Go Home
        </Link>
      </form>
    </div>
  );
}
