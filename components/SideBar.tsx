"use client";

import { routes } from "@/content/navMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function SideBar() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const pathname = usePathname();
  const itemClass =
    "w-full p-2 block rounded-md text-lg pl-8 my-2 flex gap-3 font-medium items-center";

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        className="mt-20 ml-5 md:hidden z-20"
        onClick={() => setIsAsideVisible(true)}
      >
        <path
          d="M1 1L17 1M1 7H17M1 13H17"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <aside
        className={`${
          isAsideVisible ? "block pt-8" : "hidden"
        } w-3/5 absolute bg-black md:w-1/5 h-3/5 md:h-full flex flex-col md:block md:fixed shadow-[0px_2px_20px_-2px_rgba(255,255,255,0.20)] z-10`}
      >
        {isAsideVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="absolute right-4 top-4"
            onClick={() => setIsAsideVisible(false)}
          >
            <path
              d="M13.3 0.70998C13.2075 0.617276 13.0976 0.543728 12.9766 0.493547C12.8556 0.443366 12.726 0.417535 12.595 0.417535C12.464 0.417535 12.3343 0.443366 12.2134 0.493547C12.0924 0.543728 11.9825 0.617276 11.89 0.70998L7 5.58998L2.11 0.699979C2.01742 0.607397 1.90751 0.533957 1.78654 0.483852C1.66558 0.433747 1.53593 0.407959 1.405 0.407959C1.27407 0.407959 1.14442 0.433747 1.02346 0.483852C0.902491 0.533957 0.79258 0.607397 0.699998 0.699979C0.607416 0.792561 0.533976 0.902472 0.483871 1.02344C0.433766 1.1444 0.407978 1.27405 0.407978 1.40498C0.407978 1.53591 0.433766 1.66556 0.483871 1.78652C0.533976 1.90749 0.607416 2.0174 0.699998 2.10998L5.59 6.99998L0.699998 11.89C0.607416 11.9826 0.533976 12.0925 0.483871 12.2134C0.433766 12.3344 0.407978 12.464 0.407978 12.595C0.407978 12.7259 0.433766 12.8556 0.483871 12.9765C0.533976 13.0975 0.607416 13.2074 0.699998 13.3C0.79258 13.3926 0.902491 13.466 1.02346 13.5161C1.14442 13.5662 1.27407 13.592 1.405 13.592C1.53593 13.592 1.66558 13.5662 1.78654 13.5161C1.90751 13.466 2.01742 13.3926 2.11 13.3L7 8.40998L11.89 13.3C11.9826 13.3926 12.0925 13.466 12.2135 13.5161C12.3344 13.5662 12.4641 13.592 12.595 13.592C12.7259 13.592 12.8556 13.5662 12.9765 13.5161C13.0975 13.466 13.2074 13.3926 13.3 13.3C13.3926 13.2074 13.466 13.0975 13.5161 12.9765C13.5662 12.8556 13.592 12.7259 13.592 12.595C13.592 12.464 13.5662 12.3344 13.5161 12.2134C13.466 12.0925 13.3926 11.9826 13.3 11.89L8.41 6.99998L13.3 2.10998C13.68 1.72998 13.68 1.08998 13.3 0.70998Z"
              fill="#ffffff"
            />
          </svg>
        ) : (
          ""
        )}
        <nav className="w-full h-auto py-6">
          <h2 className="my-5 cursor-pointe uppercase text-white px-3 text-center font-semibold text-xl">
            Select Category
          </h2>
          {routes.map((link) => {
            const { slug, label } = link;
            const isActive = pathname.startsWith(slug);

            return (
              <Link
                className={
                  isActive
                    ? `${itemClass} bg-green-800`
                    : `${itemClass} bg-transparent`
                }
                href={slug}
                key={label}
                onClick={() => setIsAsideVisible(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
