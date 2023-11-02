import React, { useState } from "react";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const callbackUrl = process.env.NEXTAUTH_URL;
  const [isOpen, setIsOpen] = useState(false);
  // const { data: session } = useSession();
  return (
    <nav className="sticky z-10 top-0 shadow-md bg-white border-gray-200 dark:bg-gray-900">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex navbar__img text-purple-900 font-extrabold items-center cursor-pointer"
        >
          <Image className="img" width={100} height={100} src={Logo} alt="logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "hidden" : ""} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium font- flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-600 md:p-0 dark:text-white md:dark:text-purple-500"
              >
                Home
              </Link>
            </li>
            <Link href={"/pc-builder"}>
              <span className="px-4 py-1 border border-purple-200 rounded-full text-purple-600 font-bold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                PC Builder
              </span>
            </Link>
            {/* {session?.user ? ( */}
              <li
                className="cursor-pointer block py-2 md:py-0 pl-3 pr-4"
                onClick={() =>
                  signOut({
                    callbackUrl
                  })
                }
              >
                Logout
              </li>
            {/* ) : ( */}
              <li
                className="cursor-pointer block py-2 md:py-0 pl-3 pr-4"
                onClick={() =>
                  signIn("github", {
                    callbackUrl
                  })
                }
              >
                Login
              </li>
            {/* )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
