"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (  
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
          ⛏️ Mine
          <span className="text-green-600 dark:text-green-400">News</span>
        </p>
        <p>ساخته شده با ❤️ برای ماینکرفت‌بازها</p>
        <p className="mt-1 text-xs opacity-70">تمامی حقوق محفوظ است © ۱۴۰۴</p>
        <div className="flex justify-center gap-4 mt-3 text-xs">
          <Link
            href="/about"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            درباره
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            تماس
          </Link>
          <Link
            href="/privacy"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            حریم خصوصی
          </Link>
        </div>
      </div>
    </footer>
  );
}