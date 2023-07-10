import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface navbarProps {
  active: number;
}

export default function Navbar(props: navbarProps) {
  const { active } = props;
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <nav className="w-full h-20 px-10 py-4 flex justify-between border-b-2 shadow-lg">
      <div className="flex-1 flex items-center gap-5">
        <Image
          src="https://www.jasamarga.com/static/media/Logo.282998ca.png"
          width="200"
          height="100"
          objectFit="contain"
          alt="logo"
        />
        <Link
          href="/dashboard"
          className={`${active === 1 ? "underline font-bold" : ""} text-xl`}
        >
          Dasboard
        </Link>
        <Link
          href="/"
          className={`${active === 2 ? "underline font-bold" : ""} text-xl`}
        >
          Master Data
        </Link>
      </div>
      <div className="flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 peer cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg absolute right-10 cursor-pointer">
            <div className="px-5 py-3 hover:bg-gray-200" onClick={onLogout}>
              Logout
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
