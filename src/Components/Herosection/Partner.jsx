import React from 'react'
import buddy from "../../partner/buddy.png"
import manvasanai from '../../partner/manvasanai.png'
import app1 from "../../partner/app1.png"
import pechu from "../../partner/pechu.png"
import mand from "../../partner/mandala.png"
import vpn from "../../partner/mvp.png"
import dhanya from '../../partner/dhyana.png'
import dream from '../../partner/dream1.png'

const Partner = () => {
  return (
   <>
   <section class="bg-white dark:bg-gray-200">
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900  md:text-4xl"> Worked with Us</h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
            <a href="#" class="flex justify-center items-center">
               <img src={pechu} alt="" />                      
            </a>
            <a href="#" class="flex justify-center items-center">
               <img src={manvasanai} alt="" height={200} width={200}/>                                            
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
            <a href="#" class="flex justify-center items-center">
               <img src={dhanya} alt="" />                                                                                
            </a>
            <a href="#" class="flex justify-center items-center">
  <img 
    src={dream} 
    alt=""  
    class="w-[60%] h-[60%] md:w-40 md:h-40" 
  />
</a>

        </div>
    </div>
</section>
   </>
  )
}

export default Partner
