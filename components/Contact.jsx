import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";

function Contact() {
   const formRef = useRef();
   const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;

      setForm({
         ...form,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
         .send(
            "service_o7ihygj",
            "template_a47aeyu",
            {
               from_name: form.name,
               to_name: "malek Zishan",
               from_email: form.email,
               to_email: "malekzishan1110@gmail.com",
               message: form.message,
            },
            "Vcy3Il6ja8K6cYKA4"
         )
         .then(
            () => {
               setLoading(false);
               alert("Thank you. I will get back to you as soon as possible.");

               setForm({
                  name: "",
                  email: "",
                  message: "",
               });
            },
            (error) => {
               setLoading(false);
               console.error(error, "err");
               setForm({
                  name: "",
                  email: "",
                  message: "",
               });
               alert("Thank you. I will get back to you as soon as possible.");
            }
         );
   };

   return (
      <motion.div
         variants={slideIn("left", "tween", 0.2, 1)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
         id="contact">
         <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
         <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

         <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
            <label className="flex flex-col">
               <span className="text-ctnPrimaryDark font-medium mb-4">Your Name</span>
               <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="What is your good name?"
                  className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
               />
            </label>
            <label className="flex flex-col">
               <span className="text-ctnPrimaryDark  font-medium mb-4">Your email</span>
               <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="What is your email address?"
                  className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
               />
            </label>
            <label className="flex flex-col">
               <span className="text-ctnPrimaryDark  font-medium mb-4">Your Message</span>
               <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="What do you want to say?"
                  className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark  placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
               />
            </label>

            <button
               type="submit"
               className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in">
               {loading ? "Sending..." : "Send"}
            </button>
         </form>
      </motion.div>
   );
}

export default Contact;
