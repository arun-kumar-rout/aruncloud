import React, {useContext, useState} from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import app from "../../firebase.config";
import {doc, getFirestore, setDoc} from 'firebase/firestore';
import { ShowToastContext } from "../../context/ShowToastContext";

const CreateFolderModal = () => {
    const [folderName, setFolderName] = useState(null);
    const {data:session} = useSession();
    
    // toast message setup
    const {toastMsg, setToastMsg} = useContext(ShowToastContext);
    
    const docId = Date.now().toString();

    // firebase setup with firwstore database
    const db = getFirestore(app);
    const createFolder = async() => {
        console.log(folderName)
        await setDoc(doc(db,"Folders", docId),{
            name: folderName,
            id : docId,
            createdBy:session.user.email
        })
        setToastMsg(`Folder ${folderName}, created!`)
    }

    
  return (
    <>
      <dialog id="createFolderModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="w-full items-center flex flex-col justify-center gap-3">
              <Image src="/assets/images/folder.png" alt="folder" width={50} height={50} />
              <input
                type="text"
                onChange={(e) => setFolderName(e.target.value)}
                placeholder="Folder Name"
                className="p-2 border-[1px] outline-none rounded-md"
              />
              <button onClick={createFolder} className="bg-blue-500 text-white rounded-md p-2 w-full">
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CreateFolderModal;
