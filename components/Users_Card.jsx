"use client";
import React from "react";
import { motion } from "motion/react";
export default function Users_Cars({ username, email, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-48 sm:w-56 md:w-64 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={`https://api.dicebear.com/10.x/pixel-art/svg?seed=${id}`}
          alt={username}
          className="w-full h-48 object-cover hover:scale-125 transition-all duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="font-semibold text-gray-800 dark:text-white truncate">
          {username}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          {email}
        </p>
      </div>
    </motion.div>
  );
}
