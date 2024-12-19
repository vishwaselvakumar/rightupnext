import React, { useEffect, useRef } from "react";
import Card from "./Card";
import image1 from "../../images/Price/1.png";
import image2 from "../../images/Price/2.png";
import image3 from "../../images/Price/3.png";
import { useAnimation, useInView, motion } from "framer-motion";

const CardComponent = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <div className="w-full pt-[100px] px-4 bg-white -mt-28">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-center sm:text-5xl mt-[6%] text-black">
            Some of our Packages{" "}
          </h2>
        </div>
        <p className="flex text-xl justify-center sm:mb-24 mb-16 text-center mt-6 sm:mt-0 ">
          Find your Package that fits your needs, weather your a new company or
          a Enterprise wee got you covered!
        </p>
        {/* cards */}
        <>
          {Width < 631 ? (
            <>
              <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
                <div>
                  <Card
                    image={image1}
                    Package={"IT Solutions"}
                    // Price={"11111"}
                    Feature1={"Software Devlopment"}
                    Feature2={"Mobile Application"}
                    Feature3={"Chat Bots"}
                    Feature4={"AI & ML"}
                    Feature5={"Native Apps"}
                    Feature6={"Custom CRMs "}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-300"}
                    iconColor5={"text-green-300"}
                    iconColor6={"text-green-300"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </div>
                <div>
                  <Card
                    image={image2}
                    Package={"Digital Marketing"}
                    // Price={"001200"}
                    Feature1={"Meta Ads"}
                    Feature2={"SEO Ranking"}
                    Feature3={"Google Ads"}
                    Feature4={"SOcial Media Handing"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Continuous Innovation"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-500"}
                    iconColor5={"text-green-300"}
                    iconColor6={"text-green-300"}
                    buttonBg={"bg-green-400"}
                    hoverBgButton={"hover:bg-green-500"}
                    buttonTextColor={"text-white"}
                    standOutBg={"bg-blue-100/30"}
                    marginMiddle={"md:my-6"}
                  />
                </div>
                <div>
                  <Card
                    image={image3}
                    Package={"IoT & Animations"}
                    // Price={"70500"}
                    Feature1={"Advanced Algorithmic Solutions"}
                    Feature2={"Trained Personnel Support"}
                    Feature3={"Innovative Technology Integration"}
                    Feature4={"Powerful Analytics Capabilities"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Continuous Innovation"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-500"}
                    iconColor5={"text-green-500"}
                    iconColor6={"text-green-500"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                    image={image1}
                    Package={"IT Solutions"}
                    // Price={"100000"}
                    Feature1={"Software Development"}
                    Feature2={"Mobile Applications"}
                    Feature3={"AR / VR"}
                    Feature4={"Chat Bots"}
                    Feature5={"Shopify"}
                    Feature6={"Woo Commerce "}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-300"}
                    iconColor5={"text-green-300"}
                    iconColor6={"text-green-300"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <Card
                    image={image2}
                    Package={"Digital Marketing"}
                    // Price={"12000"}
                    Feature1={"Advanced SEO "}
                    Feature2={"Google Adds"}
                    Feature3={"META Adds"}
                    Feature4={"Social Marketing"}
                    Feature5={"Personalized Solutions"}
                    Feature6={"Digital Presence"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-500"}
                    iconColor5={"text-green-300"}
                    iconColor6={"text-green-300"}
                    buttonBg={"bg-green-400"}
                    hoverBgButton={"hover:bg-green-500"}
                    buttonTextColor={"text-white"}
                    standOutBg={"bg-blue-100/30"}
                    marginMiddle={"md:my-6"}
                  />
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                    image={image3}
                    Package={"IoT and Animation"}
                    // Price={"75000"}
                    Feature1={"Advanced Algorithmic Solutions"}
                    Feature2={"Smart Home"}
                    Feature3={"Innovative Solutions"}
                    Feature4={"Powerful Solutions"}
                    Feature5={"IoT Support "}
                    Feature6={"Continuous Support"}
                    iconColor1={"text-green-500"}
                    iconColor2={"text-green-500"}
                    iconColor3={"text-green-500"}
                    iconColor4={"text-green-500"}
                    iconColor5={"text-green-500"}
                    iconColor6={"text-green-500"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </motion.div>
              </div>
            </>
          )}
        </>

        {/* cards end */}
      </div>
      
    </div>
  );
};

export default CardComponent;
