"use client";
import React,{useState} from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@@/AuthProvider/AuthProvider";
import SideNavbar from "@@/layout/SideNavbar";
import Toast from "@@/ToastMsg/Toast";
import { ShowToastContext } from "../../context/ShowToastContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [showToastMsg, setShowToastMsg] = useState(null);
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ShowToastContext.Provider value={{showToastMsg, setShowToastMsg}}>
            <div>
              <div className="flex bg-slate-200">
                <div>
                  <SideNavbar />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                  <div className="col-span-2 p-3">{children}</div>
                  <div className="">Storage</div>
                </div>
              </div>
            </div>
            {showToastMsg ? <Toast msg={showToastMsg}/> : null}
          </ShowToastContext.Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
