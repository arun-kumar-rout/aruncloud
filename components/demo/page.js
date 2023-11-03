"use client";
import FolderList from "@@/Folder/FolderList";
import Searchbar from "@@/layout/Searchbar";
import SideNavbar from "@@/layout/SideNavbar";
import React, { useEffect, useState } from "react";
import FileList from "@@/File/FileList";
import Toast from "@@/ToastMsg/Toast";
import { ShowToastContext } from "../../context/ShowToastContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import app from "../../firebase.config";

const Page = ({ file }) => {
  // toast message
  const [toastMsg, setToastMsg] = useState(null);

  // unauthenticated user routed to login page
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if(!session.data){
      // router.push("/login")
    }else{
      getFolderList();
      // console.log("User Session", session)
    }
  })

  // fetching folder list from firebase
  const db = getFirestore(app);
  const [folderList, setFolderList] = useState([])

  const getFolderList = async () => {
    const q = query(
      collection(db, "Folders"),
      where("createdBy", "==", session.data.user.email)
    );
    const querySnapshot = await getDocs(q);
    setFolderList([]);
    querySnapshot.forEach((doc) => {

      setFolderList(folderList => ([...folderList, doc.data()]))
    });
  };
  return (
    <ShowToastContext.Provider value={{ toastMsg, setToastMsg }}>
      <div>
        <div className="flex bg-slate-200">
          <div>
            <SideNavbar />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            <div className="col-span-2 p-3">
              <Searchbar />
              <FolderList folderList={folderList}/>
              <FileList />
            </div>
            <div className="">Storage</div>
          </div>
        </div>
        {toastMsg ? <Toast msg={toastMsg} /> : null}
      </div>
    </ShowToastContext.Provider>
  );
};

export default Page;
