"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
const page = () => {
    const router= useRouter()
const [content,setContent]= useState()
const [img,setImg]= useState()
async function postcreator() {
    const newpost ={
        content:content,
        imageUrl:img
    }
   const token = localStorage.getItem("token");

const res = await fetch("http://localhost:3000/api/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(newpost),
});
router.replace('/')
}
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-700 shadow-2xl shadow-black/50 rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4">
        <div className="mb-2">
          <div className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-1">new post</div>
          <div className="text-2xl font-semibold text-white tracking-tight">create a post</div>
        </div>
        <input type="text" placeholder='put ur content here ' onChange={(e)=>setContent(e.target.value)} className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 w-full text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors" />
        <input type="text" placeholder='put ur image link here' onChange={(e)=>setImg(e.target.value)} className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 w-full text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"/>
        <button onClick={()=>postcreator()} className="bg-neutral-800 border border-neutral-600 text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-white hover:text-neutral-900 transition-colors mt-1">Create Post</button>
      </div>
    </div>
  )
}

export default page