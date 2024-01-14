import sanityClient from "@/lib/sanity";
import { signUpHandler } from "next-auth-sanity";

export const POST = signUpHandler(sanityClient);
