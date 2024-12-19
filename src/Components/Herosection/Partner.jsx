import React from 'react'
import buddy from "../../partner/buddy.png"
import manvasanai from '../../partner/manvasanai.png'
import app1 from "../../partner/app1.png"
import pechu from "../../partner/pechu.png"
import mand from "../../partner/mandala.png"
import vpn from "../../partner/mvp.png"

const Partner = () => {
  return (
   <>
   <section class="bg-white dark:bg-gray-200">
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900  md:text-4xl">You’ll be in good company</h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" class="flex justify-center items-center">
               <img src={pechu} alt="" />                      
            </a>
            <a href="#" class="flex justify-center items-center">
               <img src={manvasanai} alt="" />                                            
            </a>
            <a href="#" class="flex justify-center items-center">
                <img src={app1} alt="" />                                                               
            </a>

            <a href="#" class="flex justify-center items-center">
               <img src={buddy} alt="" />                                                                                 
            </a>
            <a href="#" class="flex justify-center items-center">
               <img src={mand} alt="" />                                                            
            </a>
            <a href="#" class="flex justify-center items-center">
               <img src={vpn} alt="" />                                                                                
            </a>
        </div>
    </div>
</section>
   </>
  )
}

export default Partner
