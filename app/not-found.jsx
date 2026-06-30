// app/not-found.jsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <div className="text-8xl mb-6">⛏️</div>
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">۴۰۴</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
          صفحه پیدا نشد!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد یا به جای دیگری منتقل شده است.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition shadow-lg hover:shadow-green-500/25"
          >
            <Home className="w-5 h-5" />
            بازگشت به خانه
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-xl transition"
          >
            <ArrowLeft className="w-5 h-5" />
            بازگشت
          </button>
        </div>
      </motion.div>
    </div>
  );
}