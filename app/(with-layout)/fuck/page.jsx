"use client";
import React, { useEffect, useState } from "react";

export default function Fich() {
  const [user, set_user] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((response) => response.json())
      .then((data) => set_user(data))
      .catch((err) => console.error("خطا:", err));
  }, []);

  // ✅ بررسی وجود user قبل از نمایش
  return <div>{user ? user.message : "⏳ در حال بارگذاری..."}</div>;
}
