import { motion } from "framer-motion";

const Areas = () => {
  return (
    <>
      <div className="bg-baby-pink dark:bg-black">
        <section className="bg-red-100 dark:bg-gray-800 lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20">
          <div className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-8">
            <div>
              <h1 className="uppercase text-red-500 dark:text-white aos-init aos-animate">
                popular areas
              </h1>
              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white aos-init aos-animate"
              >
                Explore most <br /> popular areas
              </motion.h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                src="https://realestatereacttailwind.netlify.app/assets/area1-Bd11O3xH.jpg"
                alt=""
                className="h-[400px] object-cover rounded-xl"
              />
              <img
                src="https://realestatereacttailwind.netlify.app/assets/area2-Cda6bto8.jpg"
                alt=""
                className="h-[400px] object-cover rounded-xl"
              />
              <img
                src="https://realestatereacttailwind.netlify.app/assets/area3-C1rIox7-.jpg"
                alt=""
                className="h-[400px] object-cover rounded-xl"
              />
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
               className="uppercase w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6">
            <div className="flex justify-center lg:items-center gap-8 w-full">
              <h1 className="text-black text-7xl font-semibold dark:text-white">
                5K
              </h1>
              <h1 className="text-lg text-gray-600 dark:text-white">
                active <br /> listings
              </h1>
            </div>
            <div className="flex justify-center lg:items-center gap-8 w-full ">
              <h1 className="text-black text-7xl font-semibold dark:text-white">
                9K
              </h1>
              <h1 className="text-lg text-gray-600 dark:text-white">
                solid <br /> listings
              </h1>
            </div>
            <div className="flex justify-center lg:items-center gap-8 w-full">
              <h1 className="text-black text-7xl font-semibold dark:text-white">
                6K
              </h1>
              <h1 className="text-lg text-gray-600 dark:text-white">
                clients <br /> we've served
              </h1>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Areas;
