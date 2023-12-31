import React,{useState} from "react";
import FolderItem from "./FolderItem";
import { useRouter } from "next/navigation";

const FolderList = ({folderList}) => {
  const [activeFolder, setActiveFolder] = useState();
  const router = useRouter();

  const onFolderClick = (index,folderId) => {
    setActiveFolder(index);
    router.push("/folder/"+folderId)
  }
  // const folderlist = [
  //   {
  //     id: 1,
  //     name: "Folder 1 to Test Big",
  //   },
  //   {
  //     id: 2,
  //     name: "Folder 1",
  //   },
  //   {
  //     id: 3,
  //     name: "Folder 2",
  //   },
  //   {
  //     id: 4,
  //     name: "Folder 3",
  //   },
  //   {
  //     id: 5,
  //     name: "Folder 4",
  //   },
  // ];
  return (
    <div className="p-5 mt-5 bg-white rounded-lg ">
      <div className="flex justify-between items-center">
        <h2 className="text-[17px] font-bold items-center">Recent Folders</h2>
        <span className="float-right text-blue-400 font-normal text-[13px] items-center">
          View All
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-sols-4 xl:grid-cols-5 mt-3">
        {folderList.map((item, index)=>(
            <div key={index} onClick={() => onFolderClick(index,item.id)}>
              <FolderItem key={item.id} folder={item} activeFolder={activeFolder==index}/>
              </div>
        ))}
      </div>
    </div>
  );
};

export default FolderList;
