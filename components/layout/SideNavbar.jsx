"use client"
import Image from "next/image";
import Link from "next/link";
import list from "../../data/menu";
import { useState } from "react";
import CreateFolderModal from "@@/Folder/CreateFolderModal";


const SideNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div className="w-[200px] h-screen sticky top-0 left-0  shadow-blue-600 shadow-lg z-10 p-5 text-center bg-white">
        <Link href="/"><Image src="/assets/images/logo.png" alt="logo" width={150} height={60} /></Link>
        <button className="flex gap-2 items-center bg-blue-500 p-3 text-white rounded-md hover:scale-105 transition-all mt-5 w-full">
          Add new File
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        <button className="flex gap-2 items-center bg-sky-400 p-3 text-sky-50 rounded-md hover:scale-105 transition-all mt-1 w-full text-center" onClick={() => document.getElementById("createFolderModal").showModal()}>
          Create Folder
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <ul>
          {list.map((item, index) => (
            <li
              onClick={() => setActiveIndex(index)}
              key={item.id}
              className={`flex gap-2 p-2 mt-3 text-gray-500 hover:bg-blue-500 hover:text-white cursor-pointer rounded-md ${
                activeIndex == index ? "bg-sky-500 text-sky-50" : null
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.logo}
                />
              </svg>
              {item.name}
            </li>
          ))}
        </ul>
        <CreateFolderModal />
      </div>
    </div>
  );
};

export default SideNavbar;
