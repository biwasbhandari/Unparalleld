"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignupForm: React.FC = () => {
  const [value, setValue] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 min-h-screen items-center animate-fade-in">
      <div className="flex justify-center items-center border-gray-400 border-r-2">
        <Image
          src="/p03.jpg"
          alt="Image"
          className="max-w-full h-auto rounded-lg"
          height={500}
          width={500}
          priority
        />
      </div>

      {/* Form Column */}
      <div className="flex flex-col justify-center items-center ">
        <form className="  p-8 max-w-md rounded-lg shadow-sm shadow-gray-400 h-full">
          <label className="block mb-2" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2 mb-4 border border-gray-500 rounded-md"
            required
            value={value.username}
            onChange={handleChange}
          />
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 mb-4 border border-gray-500 rounded-md"
            required
            value={value.email}
            onChange={handleChange}
          />

          <label className="block mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 mb-4 border border-gray-500 rounded-md"
            required
            value={value.password}
            onChange={handleChange}
          />

          <Button type="submit">Register</Button>
        </form>
        <span className="mt-2">
          Already have an account?
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignupForm;
