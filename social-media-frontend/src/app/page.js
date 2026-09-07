"use client"
import Image from "next/image";
//import { useState } from "react";
import { useRouter } from "next/navigation";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
export default function Home() {
  const router=useRouter()
  const [posts,setPosts]=useState([])
   async function getposts (){
      const res= await fetch (`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);

     const data = await res.json();
     if (res.ok)
     {setPosts(data)

     }
      else {
    console.log("Failed to get posts:", data);
  }
   }
    
  useEffect(()=>{
    
      const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }
   getposts()
  },[])

  function handleLogout() {
  localStorage.removeItem("token");
  router.replace("/login");
}
      
  return (
   <div className="min-h-screen bg-neutral-950">
    <Header />
    <div className="max-w-xl mx-auto p-6 pb-24 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
{posts.map((post)=>(<PostCard

key={post._id}
post={post}

/>))}
      </div>
    </div>
    <button onClick={()=>router.push('/addpost')} className="fixed bottom-6 left-6 bg-neutral-900 border border-neutral-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-neutral-900 transition-colors duration-200 shadow-lg shadow-black/40">+ add post</button>
    <button onClick={()=>handleLogout()} className="fixed bottom-6 right-6 bg-neutral-900 border border-neutral-700 text-neutral-300 text-sm font-medium px-4 py-2 rounded-lg hover:border-neutral-400 hover:text-white transition-colors duration-200 shadow-lg shadow-black/40">logout</button>
   </div>
  );
}
