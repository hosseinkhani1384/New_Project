"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Footer_Home({ page }) {
  const currentpage = Number(page)
  const router = useRouter()
  const totalPages = 5;

  return (
    <nav
      className="flex justify-center my-8"
      aria-label="Page navigation example"
    >
      <ul className="flex items-center gap-1 text-sm">
        <li>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white transition-all duration-200 hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={currentpage === 1}
            aria-label="Previous"
            onClick={()=>router.push(`/${currentpage - 1}`)}
          >
            <svg
              className="w-4 h-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <li key={num}>
            <button
              className={`flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:cursor-pointer ${
                currentpage === num
                  ? "bg-blue-500 text-white shadow-sm hover:bg-blue-600"
                  : "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`
            }
              aria-current={currentpage === num ? "page" : undefined}
              onClick={()=>router.push(`/${num}`)}
            >
              {num}
            </button>
          </li>
        ))}

        <li>
          <button
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white transition-all duration-200 hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={currentpage === totalPages}
            aria-label="Next"
            onClick={()=>router.push(`/${currentpage + 1}`)}
          >
            <svg
              className="w-4 h-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
