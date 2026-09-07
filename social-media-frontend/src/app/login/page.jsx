"use client";
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter()
        const[mail,setMail]=useState()
      const[pass,setPass]=useState()
      const[error,setError]=useState()
      const [showPassword,setShowPassword]=useState(false)
   
      async function handlereg(){
        const user={
          email:mail,
          password:pass
        }
       const res= await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(user),
      });
    
         const loguser = await res.json();


        if (res.ok) {
      localStorage.setItem("token", loguser.token);
      router.replace("/");
    } else {
      setError(loguser.error || "Login failed");
    }
  }
      
  return (
  <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center gap-5 p-4">
    <div className="bg-neutral-900 border border-neutral-700 shadow-2xl shadow-black/50 rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4">
      <div className="mb-2">
        <div className="text-neutral-500 text-xs tracking-[0.2em] uppercase mb-1">welcome back</div>
        <div className="text-2xl font-semibold text-white tracking-tight">login</div>
      </div>
      <input type="text" placeholder='enter you email' onChange={(e)=>setMail(e.target.value)} className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 w-full text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors" />
      <div className="relative">
        <input type={showPassword ? "text" : "password"} placeholder='enter you password'onChange={(e)=>setPass(e.target.value)} className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 pr-11 w-full text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors" />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors leading-none"
        >
          👁
        </button>
      </div>
      <button onClick={()=>handlereg()} className="bg-neutral-800 border border-neutral-600 text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-white hover:text-neutral-900 transition-colors mt-1">Login</button>
      {error && <p className="text-neutral-300 bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-2 text-sm">{error}</p>}
    </div>
    <button onClick={()=>router.push('/register')} className="text-neutral-500 text-sm hover:text-white transition-colors">create account</button>
  </div>
  )
}

export default page