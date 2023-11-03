"use client";
import React, { useEffect, useState } from "react";
import Searchbar from "@@/layout/Searchbar";
import FileList from "@@/File/FileList";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import app from "../../firebase.config";
import FolderList from "@@/Folder/FolderList";


const Page = () => {
   

  // unauthenticated user routed to login page
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status == "unauthenticated"){
      router.push("/login");
    }else if(session.status == "authenticated"){
      getFolderList();
    }
  });

  // fetching folder list from firebase
  const db = getFirestore(app);
  const [folderList, setFolderList] = useState([]);

  const getFolderList = async () => {
    const q = query(
      collection(db, "Folders"),
      where("createdBy", "==", session.data.user.email)
    );
    const querySnapshot = await getDocs(q);
    setFolderList([]);
    querySnapshot.forEach((doc) => {
      setFolderList((folderList) => [...folderList, doc.data()]);
    });
  };
  return (
    <>
      <div className="col-span-2 p-3">
        <Searchbar />
        <FolderList folderList={folderList} />
        <FileList />
      </div>
    </>
  );
};

export default Page;
