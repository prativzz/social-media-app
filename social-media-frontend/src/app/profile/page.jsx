"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
const page = () => {
    const [details,setDetails]=useState([])
async function getdetails() {
    const token = localStorage.getItem("token");
    const res= await fetch (`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,{
        headers: {
  Authorization: `Bearer ${token}`
}}
)
     const data = await res.json();
     setDetails(data)
     console.log(details)
}
useEffect(()=>{
getdetails()


},[])

    return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-700 shadow-2xl shadow-black/50 rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4">
        <div className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-1">profile</div>
        <button className="bg-neutral-800 border border-neutral-600 text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-white hover:text-neutral-900 transition-colors">logout</button>
      </div>
    </div>
  )
}

export default page