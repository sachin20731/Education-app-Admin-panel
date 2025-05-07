import React from 'react'
import logo1 from '../assets/file.png'
import { Link } from 'react-router-dom'


function Home() {
  return (

    <>
    <div class=" w-100vw  h-screen  bg-gradient-to-r from-blue-100  to-blue-500 pt-40">
    <div class=" container  flex justify-center items-center ">
    <div class =" grid grid-rows-1 grid-cols-2 gap-4 w-full h-100">
    
    <div class="flex flex-col items-center justify-center p-6">
        <div class="">
            <img src={logo1} alt="Logo" class="w-50 h-50 " />
        </div>

        <div class=" ">
        <h1 class =" text-5xl ml-33">WELCOME </h1>
        <h1 class="text-7xl font-bold bg-gradient-to-r from-black via-blue-950 to-blue-500 bg-clip-text text-transparent  ">G+ Education </h1>
            
        </div>

        

    </div>

        <div class="flex grid-cols-2 justify-center items-center">

        <div>
            <form  class="flex flex-col gap-4 p-6   w-96  border border-blue-200 border-10 bg-blue-100  font-[outfit] shadow-lg shadow-blue-500/50 rounded-4xl ">
                <h1 class=" text-6xl text-center  text-blue-950 font-outfit">Login</h1>

                <div>
                    <label class="text-2xl text-blue-950 mt-4  font-[outfit]" htmlFor='' >Email </label>
                    <input type="email" id="email" class="border border-gray-300 rounded-md p-2 mt-2 w-full" placeholder="Enter your email" required />
                </div>
                <div>
                    <label   class="text-2xl text-blue-950 mt-4  font-[outfit]" htmlFor='' >Password </label>
                    <input type="password" id="password" class="border border-gray-300 rounded-md p-2 w-full mt-2" placeholder="Enter your password" required />
                </div>
                <Link to ="/dashboard" type="submit" className="bg-blue-950 text-white rounded-md p-2 hover:bg-blue-900 text-center">Login</Link>

            </form>
        </div>

        </div> 
      
    </div>




        
    </div>

    <div class="pt-28 text-center text-blue-950 font-[outfit]">
     <p class="text-2xl">Admin panel  </p><p>G+ education</p>
    </div>

    </div>

   
    

    </>

    
  )
}

export default Home