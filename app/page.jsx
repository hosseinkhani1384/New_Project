"use client";
import Users_Card from "@/components/Users_Card";
import { ToggleTheme } from "@/store/themeslice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [counterImage, set_counterImage] = useState(null);
  const [seeImage, set_seeImage] = useState(10);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const dispatch = useDispatch();
  useEffect(() => {
    if (darkmode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkmode]);
  useEffect(() => {
    const alluser = fetch("https://67d334758bca322cc2698366.mockapi.io/Users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        set_counterImage(data.length);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mt-5 mb-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-black dark:text-white text-xl font-bold md:text-3xl">
          Hello and Welcome to my website
        </p>
      </div>
      <div className="flex justify-center mt-10 gap-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded-xl hover:cursor-pointer dark:bg-gray-700 dark:text-white"
          onClick={() => dispatch(ToggleTheme())}
        >
          {darkmode ? "set light" : "set dark"}
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded-xl hover:cursor-pointer dark:bg-gray-700 dark:text-white"
        onClick={()=>{router.push("/1")}}
        >
          go to first page
        </button>
      </div>
      <div className="flex flex-wrap justify-around max-w-6xl gap-4 mx-auto mt-8">
        {users.slice(0, seeImage).map((user) => (
          <Users_Card
            username={user.username}
            email={user.email}
            id={user.id}
            key={user.id}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto flex justify-center my-5">
        {counterImage - seeImage > 20 && seeImage < counterImage && (
          <button
            className="bg-gray-300 px-4 py-2 rounded-xl hover:cursor-pointer dark:bg-gray-700 dark:text-white"
            onClick={() => {
              (counterImage - seeImage) / 20 >= 1
                ? set_seeImage(seeImage + 20)
                : set_seeImage(counterImage - seeImage);
            }}
          >
            see more?
          </button>
        )}
      </div>
    </div>
  );
}
