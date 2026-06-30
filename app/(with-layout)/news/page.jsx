// app/news/page.jsx
import NewsContent from "@/components/Newscontent";
import { Suspense } from "react";

export default function NewsPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">در حال بارگذاری اخبار...</p>
        </div>
      </div>
    }>
      <NewsContent />
    </Suspense>
  );
}