import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

const Properties = () => {
  const properties = [
    {
      image:
        "https://realestatereacttailwind.netlify.app/assets/prop1-DyCTk8t_.webp",
      title: "Villa with Amazing View",
      price: "$ 213.23",
      description:
        "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
      owner: "Alice Adams",
      location: "6Downtown, Las Vegas",
    },
    {
      image:
        "https://realestatereacttailwind.netlify.app/assets/prop2-jZp6mjIB.webp",
      title: "Townhouse For Sale",
      price: "$ 213.23",
      description:
        "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
      owner: "Drew Alice",
      location: "6Downtown, Las Vegas",
    },
    {
      image:
        "https://realestatereacttailwind.netlify.app/assets/prop1-DyCTk8t_.webp",
      title: "Duplex Sea facing for rent",
      price: "$ 213.23",
      description:
        "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
      owner: "Fursi Bam",
      location: "6Downtown, Las Vegas",
    },
    {
      image:
        "https://realestatereacttailwind.netlify.app/assets/prop4-DAQbXzH1.webp",
      title: "Villa with Side View",
      price: "$ 213.23",
      description:
        "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
      owner: "Neon Alice",
      location: "6Downtown, Las Vegas",
    },
    {
      image:
        "https://realestatereacttailwind.netlify.app/assets/prop5-BspEoPym.webp",
      title: "Awesome Villa for Rent",
      price: "$ 213.23",
      description:
        "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
      owner: "Firari Alice",
      location: "6Downtown, Las Vegas",
    },
    {
      image:
        "https://realestatereacttailwind.netlify.app/assets/prop6-Ct-NBJUm.webp",
      title: "Street farm for Sale",
      price: "$ 213.23",
      description:
        "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood",
      owner: "Jordan Bram",
      location: "6Downtown, Las Vegas",
    },
  ];

  return (
    <>
      <div className="bg-baby-pink dark:bg-black">
        <section className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="uppercase text-red-500 dark:text-white aos-init aos-animate">
              Properties
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-black text-4xl font-semibold leading-10 dark:text-white aos-init aos-animate"
            >
              Explore the latest <br /> properties available
            </motion.h1>
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
            {properties.map((property, key) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl w-full"
                key={key}
              >
                <div
                  className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between text-white"
                  style={{ backgroundImage: `url('${property.image}')` }}
                >
                  <div className="flex justify-between items-end w-full">
                    <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                      Featured
                    </button>
                    <div className="flex justify-between items-center gap-3">
                      <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                        Sales
                      </button>
                      <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
                        Active
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <div className="flex justify-start items-center gap-2">
                      <FaLocationDot />
                      <span>{property.location}</span>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <FaVideo />
                      <FaCamera />
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full">
                  <h1 className="text-xl text-black font-semibold dark:text-white">
                    {property.title}
                  </h1>
                  <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                    {property.price}
                  </h1>
                  <p className="dark:text-white">{property.description}</p>
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center gap-2">
                      <FaBath color="red" />
                      <span className="dark:text-white">250 sq ft</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <FaBed color="red" />
                      <span className="dark:text-white">250 sq ft</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <BsGrid1X2Fill color="red" />
                      <span className="dark:text-white">250 sq ft</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full border-t-2 border-black-300 py-3 mt-6">
                    <div className="flex justify-center items-center gap-2">
                      <FaRegCircleUser color="red" />
                      <span className="dark:text-white">{property.owner}</span>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaShareAlt color="red" />
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaHeart color="red" />
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <IoAdd color="red" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div></div>
            <div></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Properties;
