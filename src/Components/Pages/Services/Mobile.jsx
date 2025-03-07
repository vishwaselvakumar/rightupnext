import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Footer from '../../Footer/Footer'
import ScrollToTop from '../../Pages/Services/Scrolltop';

const Mobile = () => {
  return (
   <>

<Navbar/>
<>

<ScrollToTop/>

<div className="bg-neutral-900 mt-20">
    {/* Approach */}
    <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
      {/* Title */}
      <div className="max-w-3xl mb-10 lg:mb-14">
        <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
         Website Development 
        </h2>
        <p className="mt-1 text-neutral-400">
        The global marketplace has become more competitive, and as a result, 
        whether a start-up or an established company, 
        it is required to portray a strong online presence. 
        With over ten years of industry experience, 
        we think outside the box and provide outstanding website 
        development solutions.
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
                User Experience Development
                </span>
                <br/>
                As India's leading website design and development firm, we prioritize user experience development. 
                Our skilled personnel will deliver best-in-class solutions for a flawless user experience.
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
                Website Revamp
                </span><br/>
                Taking your business to the next level by combining interactive designs, 
                improving the UI/UX of the website,
                 and optimizing content for the greatest experience within the existing system.
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
                <span className="text-white">Responsive Websites</span><br/>
                When it comes to responsive websites, we guarantee the best conversion rate, prolonged stay time, and seamless user experience across all devices. 
                We provide websites with responsive layouts that adapt seamlessly into all types of devices.
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
                <span className="text-white">E - Commerce Development</span><br/>
               
                Whether a single-brand website or a marketplace website, we design highly efficient e-commerce websites with the latest advanced technology. Our team of experienced professionals deliver customized E-commerce applications to outpace your business.



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
  {/* Approach */}
  <div className="bg-neutral-900 ">
    {/* Approach */}
    <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
      {/* Title */}
      <div className="max-w-3xl mb-10 lg:mb-14">
        <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
         Mobile Applications 
        </h2>
        <p className="mt-1 text-neutral-400">
        We tailor mobile applications to meet your unique requirements,
         combining innovative ideas with high-quality, user-friendly designs.
          Our mobile app development service helps you experience growth by 
        delivering custom solutions and ensuring timely delivery.
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
                iOS App Development
                </span>
                <br/>
                Our experience in developing excellent iOS apps has 
                allowed us to create brilliant iOS applications for major 
                corporations and startups.
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
                Android App Development
                </span><br/>
                Our skilled team of full-stack Android app developers is 
                dedicated to developing high-quality Android
                 apps that run smoothly and flawlessly on all Android devices.
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
                <span className="text-white">Mobile Web Development</span><br/>
                We offer end-to-end mobile web development services,
                 including wire-framing, design, market launch, support, and maintenance, 
                and ensure that mobile web development will adapt to new market trends.
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
                <span className="text-white">React Native App Development</span><br/>
               
                We offer a wide range of services for developing fully 
                functional mobile apps for the iOS and Android platforms
                 with a well-structured architecture utilizing React Native app development.
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

export default Mobile
