import FolderList from '@@/Folder/FolderList'
import Searchbar from '@@/layout/Searchbar'
import SideNavbar from '@@/layout/SideNavbar'
import React from 'react'
import FileList from '@@/File/FileList'

const page = ({ file }) => {
  return (
    <div>
      <div className="flex bg-slate-200">
        <div>
          <SideNavbar/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="col-span-2 p-3">
            <Searchbar/>
            <FolderList/>
            <FileList/>
          </div>
          <div className="">Storage</div>
        </div>
      </div>
    </div>
  )
}

export default page
