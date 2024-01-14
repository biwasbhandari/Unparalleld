"use client";
import React, { FormEvent, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm: React.FC = () => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [router, session]);

  const loginHandler = async () => {
    try {
      await signIn();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await signUp(value);
      if (user) {
        toast.success("Successfully Signed up. Please login");
      }
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 min-h-[95vh] items-center animate-fade-in">
      <div className="flex justify-center items-center border-gray-400 border-r-2 bg-gray-200 rounded-lg">
        <Image
          src="/p01.jpg"
          alt="Image"
          className="max-w-full h-auto "
          height={500}
          width={500}
          priority
        />
      </div>

      {/* Form Column */}
      <div className="flex flex-col justify-center items-center ">
        <form
          className="  p-8 max-w-md rounded-lg shadow-sm shadow-gray-400 h-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="username"
            className="w-full p-2 mb-4 border border-gray-500 rounded-md"
            required
            value={value.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className="w-full p-2 mb-4 border border-gray-500 rounded-md"
            required
            value={value.email}
            onChange={handleChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="w-full p-2 mb-4 border border-gray-500 rounded-md"
            required
            value={value.password}
            onChange={handleChange}
          />
          <Button type="submit">Sign Up</Button>
        </form>
        <span className="m-2">or Login with</span>
        <span className="flex gap-2 items-center">
          <AiFillGithub
            className="text-4xl cursor-pointer"
            onClick={loginHandler}
          />{" "}
          |
          <FcGoogle
            className="text-4xl cursor-pointer"
            onClick={loginHandler}
          />
          |
          <Button variant="outline" onClick={loginHandler}>
            Login using Email
          </Button>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
