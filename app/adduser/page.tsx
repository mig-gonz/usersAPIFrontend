"use client";
import Link from "next/link";
import React, { useState } from "react";

type UserWithoutId = Omit<User, "id">;

const AddUser = () => {
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Split the name into segments to handle nested properties
    const nameSegments = name.split(".");
    let updatedData = { ...formData };

    // Traverse the nested structure to update the value
    let currentLevel: any = updatedData; // Using any type assertion here
    for (let i = 0; i < nameSegments.length; i++) {
      if (i === nameSegments.length - 1) {
        currentLevel[nameSegments[i]] = value;
      } else {
        currentLevel = currentLevel[nameSegments[i]];
      }
    }

    // Update the state with the modified data
    setFormData(updatedData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User added:", data);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Reset the form data after successful submission
        setFormData({
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

        // Handle success or redirect as needed
      } else {
        console.error("Error adding user:", response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle error
    }
  };

  return (
    <div>
      <h1 className="text-3xl ml-5">Add New User</h1>
      {/*  //  108  md:flex justify-center */}
      <div className="md:flex md:space-x-4 md:ml-5">
        <form onSubmit={handleSubmit}>
          {/* First set of 3 */}
          {/* // 111 flex items-center space-x-3 space-y-6 */}
          <div className="grid md:flex md:space-x-3 md:items-center">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="..."
              className="input input-bordered input-accent  w-full max-w-xs"
            />

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>

          {/* second set */}
          {/* flex space-y-6  space-x-3 items-center */}
          <div className="grid md:flex  md:items-center md:space-x-3 md:space-y-5">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <label htmlFor="website">Website:</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <label htmlFor="company_name">Company Name:</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>

          {/* third set */}
          {/* flex space-y-6 space-x-3 items-center */}
          <div className="grid md:flex md:items-center md:space-x-3 md:space-y-5">
            <label htmlFor="catch_phrase">Catch Phrase:</label>
            <input
              type="text"
              id="catch_phrase"
              name="catch_phrase"
              value={formData.catch_phrase}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <label htmlFor="bs">BS:</label>
            <input
              type="text"
              id="bs"
              name="bs"
              value={formData.bs}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <label htmlFor="street">Street:</label>
            <input
              type="text"
              id="street"
              name="Address.street"
              value={formData.Address.street}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>

          {/* fourth set */}
          {/* flex space-y-6 space-x-3 items-center */}
          <div className="grid md:flex md:items-center md:space-x-3 md:space-y-5">
            <label htmlFor="suite">Suite:</label>
            <input
              type="text"
              id="suite"
              name="Address.suite"
              value={formData.Address.suite}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="Address.city"
              value={formData.Address.city}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <label htmlFor="zipcode">Zip Code:</label>
            <input
              type="text"
              id="zipcode"
              name="Address.zipcode"
              value={formData.Address.zipcode}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>

          {/* Last set (2) */}
          {/* flex space-y-6  space-x-3 items-center */}
          <div className="grid md:flex  md:items-center md:justify-center md:space-x-3 md:space-y-5">
            <label htmlFor="lat">Latitude:</label>
            <input
              type="text"
              id="lat"
              name="Address.lat"
              value={formData.Address.lat}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />

            <label htmlFor="lng">Longitude:</label>
            <input
              type="text"
              id="lng"
              name="Address.lng"
              value={formData.Address.lng}
              onChange={handleInputChange}
              placeholder="..."
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
          <div className="md:flex  md:justify-center md:space-x-3">
            <button type="submit" className="btn btn-accent btn-wide mt-5">
              Add User
            </button>
            <Link href={"/"} className="btn btn-accent btn-wide mt-5">
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
