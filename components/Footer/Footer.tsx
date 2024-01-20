import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: info@yourstore.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p>Stay connected on social media:</p>
          <div className="social-icons mt-2 flex gap-4">
            <Link href="https://twitter.com/biwas2059" target="_blank">
              <TwitterIcon />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </Link>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="list-none">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tshirts">Shop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around flex-wrap">
        <p className="text-center mt-8 text-gray-600">
          &copy; {new Date().getFullYear()} Unparalleld. All rights reserved.
        </p>
        <p className="flex flex-col justify-center items-center">
          <span className="font-semibold">Powered by:</span>
          <Link
            href="https:github.com/s-biwas"
            className="flex justify-center items-center hover:underline"
            target="_blank"
          >
            <GithubIcon />
            Biwas Bhandari
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
