import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { MdEmergencyShare } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


const Services = () => {
  const services = [
    {
      icon: FaSearch,
      title: "Blood Search",
      description: "Quickly search for available blood by type and location.",
    },
    {
      icon: MdEmergencyShare,
      title: "Request Blood",
      description: "Request specific blood types and notify nearby donors or blood banks instantly.",
    },
    {
      icon: MdMyLocation,
      title: "Nearest Blood Banks",
      description: "Locate and navigate to the closest blood banks with real-time availability.",
    },
    {
      icon: FaHeart,
      title: "Become a Donor",
      description: "Register as a donor and help others in need.",
    },
    // {
    //   icon: BsClipboard2PlusFill,
    //   title: "Evaluation",
    //   description: "We offer you free evaluation to get a mortgage loan",
    // },
    // {
    //   icon: FaCameraRetro,
    //   title: "Photoshoot",
    //   description: "We prepare your home visual presentation",
    // },
  ];
  return (
    <>
      <div className="bg-baby-pink dark:bg-black">
        <section id="services" className="bg-red-100 dark:bg-gray-800 lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-start gap-10 lg:px-20 px-6 py-20">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="uppercase text-xl text-red-500 dark:text-white font-bold aos-init aos-animate">
              our services
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 w-full justify-center items-center gap-2">
            {services.map((service, key) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                key={key}
                className="bg-white dark:bg-black h-[210px] px-4 py-1 flex flex-col justify-center items-start gap-3 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer aos-init aos-animate"
              >
                <div className="d-flex justify-center items-center gap-2">
                <div className="rounded-full bg-red-200">
                  {<service.icon size={30} color="red" />}
                </div>
                <h1 className="text-black text-[19px] font-semibold dark:text-white">
                  {service.title}
                </h1>
                </div>
                <p className="text-md text-slate-700">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
