import { motion } from "framer-motion";
import { FaClipboardCheck } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsClipboard2PlusFill } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaClipboardCheck,
      title: "Sell your home",
      description: "We sell your home at the best market price",
    },
    {
      icon: FaHome,
      title: "Home loan",
      description: "We offer you free consultancy to get a loan",
    },
    {
      icon: FaBalanceScale,
      title: "Legal services",
      description: "Expert legal help for all related property items",
    },
    {
      icon: FaSearch,
      title: "Home inspection",
      description: "We make sure you get what you were promised",
    },
    {
      icon: BsClipboard2PlusFill,
      title: "Evaluation",
      description: "We offer you free evaluation to get a mortgage loan",
    },
    {
      icon: FaCameraRetro,
      title: "Photoshoot",
      description: "We prepare your home visual presentation",
    },
  ];
  return (
    <>
      <div className="bg-baby-pink dark:bg-black">
        <section id="services" className="bg-red-100 dark:bg-gray-800 lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-start gap-10 lg:px-20 px-6 py-20">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="uppercase text-red-500 dark:text-white font-bold aos-init aos-animate">
              our services
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-black text-4xl font-semibold leading-10 dark:text-white aos-init aos-animate"
            >
              Top real estate <br /> services available
            </motion.h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 w-full justify-center items-center gap-8">
            {services.map((service, key) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                key={key}
                className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer aos-init aos-animate"
              >
                <div className="p-6 rounded-full bg-red-200">
                  {<service.icon size={40} color="red" />}
                </div>
                <h1 className="text-black text-[22px] font-semibold dark:text-white">
                  {service.title}
                </h1>
                <p className="text-lg text-slate-700 dark:text-white">
                  {service.description}
                </p>
                <button className="uppercase border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white">
                  read more
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
