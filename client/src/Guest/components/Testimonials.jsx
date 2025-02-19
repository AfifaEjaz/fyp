import { motion } from "framer-motion";
import { IoStarSharp } from "react-icons/io5";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dana Gilmore",
      review: "A Lifesaver in Every Sense",
      detail_review:
        "I needed a rare blood type urgently for my father’s surgery, and Blood Buddy connected me with a donor within minutes. I can't thank the team enough",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client1-D30Pmk48.png",
    },
    {
      name: "Ana Anderson",
      review: "Effortless and Reliable",
      detail_review:
        "Finding blood used to be a stressful task, but not anymore. Blood Buddy makes the process so seamless, and the real-time updates are a game changer.",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client2-DKmsS_0P.png",
    },
    {
      name: "Albert adame",
      review: "Saved My Child’s Life",
      detail_review:
        "During an emergency, I was able to locate the nearest blood bank through the app. Blood Buddy truly saved my daughter’s life that day.",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client3-BqHPa5TD.png",
    },
    {
      name: "Dana Gilmore",
      review: "Excellent team",
      detail_review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elint eligendi corporis quaerat aspernatur? Iusto laudantium nihil qui iste.",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client4-BO1f_Kg1.png",
    },
    {
      name: "Alex gilmore",
      review: "Amazing Support for Donors",
      detail_review:
        "As a regular blood donor, I love how easy it is to manage my donations and track my eligibility with Blood Buddy. It feels good to be part of this community.",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client5-CdeW2JQk.png",
    },
    {
      name: "Sivay Ashbi",
      review: "Technology That Saves Lives",
      detail_review:
        "Blood Buddy isn’t just an app; it’s a platform that genuinely brings hope and help to those in need. Highly recommend it!",
      profile:
        "https://realestatereacttailwind.netlify.app/assets/client6-CMQS_wxT.png",
    },
  ];
  return (
    <>
      <div className="bg-baby-pink dark:bg-black">
        <section className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="uppercase text-red-500 dark:text-white aos-init aos-animate">
              Our Users
            </h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-red text-2xl font-semibold leading-10  aos-init aos-animate"
            >
              What are our users saying about us
            </motion.h1>
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-4">
            {testimonials.map((testimonial, key) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                key={key}
                className="bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-3 flex flex-col justify-center items-center gap-3 rounded-xl w-full aos-init aos-animate"
              >
                <div className="w-full flex justify-start items-center gap-4">
                  <img
                    src={testimonial.profile}
                    alt=""
                    className="w-[70px] transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col justify-center items-start gap-1">
                    <h1 className="text-xl text-black font-semibold">
                      {testimonial.name}
                    </h1>
                    <span className="text-slate-600">
                      {testimonial.review}
                    </span>
                  </div>
                </div>
                <p className="text-md text-slate-600">
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
