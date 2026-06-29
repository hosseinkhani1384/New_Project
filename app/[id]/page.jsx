"use client";
import Footer_Home from "@/components/Footer_Home";
import { notFound } from "next/navigation";
import React from "react";

export default function Userpage({ params }) {
  const { id } = React.use(params);
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId < 1 || numericId > 5) {
    notFound();
  }
  return (
    <div className="min-h-screen flex flex-col max-w-6xl px-4 pt-6 mx-auto">
      <div className="flex-1 flex justify-center">
        <p className="text-black dark:text-white">{id}</p>
      </div>
      <div>
        <Footer_Home page={id} />
      </div>
    </div>
  );
}
