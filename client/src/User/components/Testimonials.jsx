import { motion } from "framer-motion";
import { IoStarSharp } from "react-icons/io5";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dana Gilmore",
      review: "Excellent team",
      detail_review:
        "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client1-D30Pmk48.png",
    },
    {
      name: "Ana Anderson",
      review: "Very good work",
      detail_review:
        "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client2-DKmsS_0P.png",
    },
    {
      name: "Albert adame",
      review: "Very well",
      detail_review:
        "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client3-BqHPa5TD.png",
    },
    {
      name: "Dana Gilmore",
      review: "Excellent team",
      detail_review:
        "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client4-BO1f_Kg1.png",
    },
    {
      name: "Alex gilmore",
      review: "Excellent team",
      detail_review:
        "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client5-CdeW2JQk.png",
    },
    {
      name: "Sivay Ashbi",
      review: "Excellent team",
      detail_review:
        "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client6-CMQS_wxT.png",
    },
  ];
  return (
    <>
      <div className="bg-baby-pink dark:bg-black">
        <section className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="uppercase text-red-500 dark:text-white aos-init aos-animate">
              Our clients
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-black text-4xl font-semibold leading-10 dark:text-white aos-init aos-animate"
            >
              What are our clients <br /> saying about us
            </motion.h1>
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
            {testimonials.map((testimonial, key) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                key={key}
                className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-10 flex flex-col justify-center items-center gap-6 rounded-xl w-full aos-init aos-animate"
              >
                <div className="w-full flex justify-start items-center gap-4">
                  <img
                    src={testimonial.profile}
                    alt=""
                    className="w-[70px] transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col justify-center items-start gap-1">
                    <h1 className="text-xl text-black font-semibold dark:text-white">
                      {testimonial.name}
                    </h1>
                    <span className="text-slate-600 dark:text-white">
                      {testimonial.review}
                    </span>
                  </div>
                </div>
                <p className="text-md text-justify text-slate-600 dark:text-white">
                  {testimonial.detail_review}
                </p>
                <div className="flex justify-start items-start w-full gap-2 text-yellow-500">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
