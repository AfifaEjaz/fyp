import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="bg-whitee dark:bg-black py-10">
        <section id="contact" className="bg-red-100 dark:bg-gray-800 lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col lg:flex-row justify-center items-center lg:px-36 px-6 py-20 gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="p-8 border bg-baby-pink dark:bg-black w-full flex flex-col justify-center items-start gap-4 rounded-xl"
          >
            <h1 className="text-2xl text-black font-semibold dark:text-white">
              Send us a message today
            </h1>
            <form className="flex flex-col gap-2 w-full">
              <input
                className="p-2 border-2 border-black-300 rounded-xl w-full"
                type="text"
                placeholder="Enter your full name here"
              />
              <input
                className="p-2 border-2 border-black-300 w-full rounded-xl"
                type="text"
                placeholder="Enter your valid email"
              />
              <input
                className="p-2 border-2 border-black-300 w-full rounded-xl"
                type="text"
                placeholder="Enter your mobile number"
              />
              <textarea
                className="p-2 border-2 border-black-300 w-full rounded-xl"
                placeholder="Enter your message here..."
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="uppercase bg-red w-full text-md px-5 py-2 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer"
              >
                Send Email
              </button>
            </form>
          </motion.div>
          <div className="w-full flex flex-col justify-center items-start gap-4 lg:p-10 p-6">
            <h1 className="uppercase text-red dark:text-white aos-init aos-animate">
            Contact Us
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-black text-[35px] font-semibold leading-10 dark:text-white aos-init aos-animate"
            >
              Get in touch with us today and our team will assist you
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                 className="text-lg text-gray-600 dark:text-white aos-init aos-animate">
              Have a question, need assistance, or want to know more about Blood Buddy? Reach out to us! Our team is dedicated to supporting you in every step of your lifesaving journey.

            </motion.p>
            <motion.button initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                 className=" bg-red text-medium px-4 py-2 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
              Contact us
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
