import { signUpHandler } from "next-auth-sanity";
import sanityClient from "@/lib/sanity";

export const POST = signUpHandler(sanityClient);
