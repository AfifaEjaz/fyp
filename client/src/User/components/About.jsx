import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section id="about" className="bg-baby-pink dark:bg-black h-full w-full grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-10 w-full lg:px-40 px-10 py-20 lg:pt-32 lg:pb-20">
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileinview={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            src="https://realestatereacttailwind.netlify.app/assets/about-Cyz-uuF2.jpg"
            alt="about-img"
            className="object-cover rounded-2xl lg:w-[500px] lg:h-[600px]"
          />
        </div>
        <div
          initial={{ opacity: 0, scale: 0 }}
          whileinview={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center items-start gap-8"
        >
          <h1 className="text-red-500 dark:text-white ">WHO WE ARE</h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileinview={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            We help clients buy and sell houses since 1989
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileinview={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-white text-justify"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
            eaque inventore voluptatum rem consectetur quae magni optio quis
            incidunt?
          </motion.p>
          <button className="bg-red-600 text-md px-10 py-4 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-105">
            View more
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
