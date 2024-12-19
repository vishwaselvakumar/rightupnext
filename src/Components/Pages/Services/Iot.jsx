import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Footer from '../../Footer/Footer'
import ScrollToTop from '../../Pages/Services/Scrolltop';

const Iot = () => {
  return (
   <>

<Navbar/>
<>
<ScrollToTop/>
  {/* Approach */}
  <div className="bg-neutral-900 mt-20">
    {/* Approach */}
    <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
      {/* Title */}
      <div className="max-w-3xl mb-10 lg:mb-14">
        <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
         Internet Of Things
        </h2>
        <p className="mt-1 text-neutral-400">
        We provide comprehensive IoT services, covering hardware design, 
        firmware development, cloud integration, and data analytics. 
        Our team works with you to create an IoT strategy tailored to your
         business goals and objectives, and we support you
         throughout the implementation and deployment of your IoT solution.
        </p>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
        <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img
            className="w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Features Image"
          />
        </div>
        {/* End Col */}
        {/* Timeline */}
        <div>
          {/* Heading */}
          <div className="mb-4">
            <h3 className="text-[#ff0] text-xs font-medium uppercase">Steps</h3>
          </div>
          {/* End Heading */}
          {/* Item */}
          <div className="flex gap-x-5 ms-1">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                  1
                </span>
              </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <p className="text-sm lg:text-base text-neutral-400">
                <span className="text-white">
              IoT
                </span><br/>
                We offer end-to-end IoT services, including hardware design, 
                firmware development, cloud integration and data analytics. Our team can help you develop a comprehensive IoT strategy that aligns with your business goals and objectives and we assist you in 
                implementing and deploying your IoT solution.
              </p>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          {/* Item */}
          <div className="flex gap-x-5 ms-1">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                  2
                </span>
              </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <p className="text-sm lg:text-base text-neutral-400">
                <span className="text-white">
                Electronics Development
                </span><br/>
                We provide unique mobile application services that enable a 
                seamless experience on all devices. Delivering software as a service (SAAS)
                 in mobile applications to 
                your products in an efficient manner that handles all computing requirements.
              </p>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          {/* Item */}
          <div className="flex gap-x-5 ms-1">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                  3
                </span>
              </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <p className="text-sm md:text-base text-neutral-400">
                <span className="text-white">Smart Home</span><br/>
                Asset tracking, energy management, smart homes, and industrial 
                automation are just a few of the many uses for our IoT services. We have the resources and know-how to help you achieve your goals, whether they be to increase customer satisfaction,
                 optimize energy use, or streamline processes.
              </p>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          {/* Item */}
          <div className="flex gap-x-5 ms-1">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                  4
                </span>
              </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <p className="text-sm md:text-base text-neutral-400">
                <span className="text-white">Data management and Analytics</span><br/>
                With our IoT services, we enable companies to connect their devices, collect data and 
                analyse it to make better-informed decisions.
              </p>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          <a
            className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
            href="https://wa.me/9159260221" target='_blank'
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path
                className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                d="M14.05 2a9 9 0 0 1 8 7.94"
              />
              <path
                className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                d="M14.05 6A5 5 0 0 1 18 10"
              />
            </svg>
            Schedule a call
          </a>
        </div>
        {/* End Timeline */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Approach */}
</>
<Footer/>

   </>
  )
}

export default Iot
