import { motion } from "framer-motion";
import banner from "../../assets/banner.jpg";

const HeroSection = () => {
  return (
    <div className="flex justify-center dark:bg-black relative">
      <section
        className="relative w-[100%] h-[500px] bg-cover bg-center px-10 lg:px-28 flex flex-col justify-center items-start gap-7"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

        {/* Text Content */}
       <div className="d-flex flex-col gap-6  justify-center w-100">
       <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-5xl leading-tight px-5 text-center text-white font-semibold  relative z-10"
        >
          Empowering You with Life-Saving Connections
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-white text-center text-lg relative z-10"
        >
          Join our community and connect with others to save lives. Whether
          you're looking for blood donations, offering help, or seeking health
          services, we provide a seamless platform for all. Together, we can
          make a difference.
        </motion.p>
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }} // Example hover effect
            className="text-whitee bg-red px-4 py-2 rounded relative z-10"
            onClick={() => (window.location.href = "/loginReg")}
          >
            Get Started
          </motion.button>
        </div>
       </div>
      </section>
    </div>
  );
};

export default HeroSection;
