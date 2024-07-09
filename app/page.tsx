"use client";

import { isLoggedIn, logOut } from "@/functions/authFunctions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState("");

  const cjeckLoggedIn = async () => {
    const _isLoggedIn = await isLoggedIn();
    if(!_isLoggedIn){
      router.push("/auth/login");
    }
    
    if (typeof _isLoggedIn === "boolean" && !_isLoggedIn) {
      router.push("/auth/login");
    } else {
      if (typeof _isLoggedIn === "object" && _isLoggedIn !== null)
        setData(_isLoggedIn.wallet);
    }
  };

  const handleLogOut = async () => {
    await logOut();
    setData("");
    router.push("/auth/login");
  };

  const getDataRender = (data: string): string => {
    return `${data.slice(0, 8)}...`;
  };

  useEffect(() => {
    cjeckLoggedIn();
  }, []);

  useEffect(() => {}, [data]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        id="navBar"
        className="w-full flex justify-between items-center gap-4 p-4 fixed top-0 left-0 bg-slate-50 shadow-md"
      >
        <Image width={60} height={60} alt="Logo" src={"/logo.png"} />
        <button className="bg-white p-6 py-2 rounded-md" onClick={handleLogOut}>
          {getDataRender(data)} | SignOut
        </button>
      </div>
      <div className="w-full p-4 md:p-16 mt-12">
      <Image width={60} height={60} alt="Logo" src={"/banner.gif"} className="w-full h-full rounded-md"/>
      </div>
    </main>
  );
}
