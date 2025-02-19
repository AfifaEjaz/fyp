import { motion } from "framer-motion";
import aboutUs from "../../assets/aboutUs.jpg";


const About = () => {
  return (
    <>
      <section id="about" className="bg-whitee dark:bg-black h-full w-full grid lg:grid-cols-2 grid-cols-1  justify-center gap-10 w-full lg:px-40 px-10 py-20 lg:pt-26 lg:pb-20">
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            src={aboutUs}
            alt="about-img"
            className="object-cover rounded-2xl lg:w-[380px] lg:h-[430px]"
          />
        </div>
        <div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center items-start gap-4"
        >
          <h1 className="text-red dark:text-blue ">WHO WE ARE</h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-black-900 dark:text-white text-[35px] font-semibold leading-10 "
          >
            We help people to access blood easily!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-white "
          >
            At Blood Buddy, we’re more than just a platform — we’re a lifesaving network. Our mission is to connect blood donors, seekers, and blood banks seamlessly, making blood availability accessible to everyone, everywhere.
          <br />  Our Vision is to create a world where no life is lost due to the unavailability of blood. We aim to build a community where compassion, technology, and humanity come together to save lives
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
