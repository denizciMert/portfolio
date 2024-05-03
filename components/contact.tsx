"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { contactTextEN, contactTextTR } from "@/lib/contanct-text";

export default function Contact() {
  const [locale, setLocale] = useState<any>();
  useEffect(() => {
    const fromStorage = localStorage.getItem("locale");
    setLocale(fromStorage);
  }, []);

  let Text;
  let logicLocale;

  if (locale === undefined) {
    Text = contactTextTR;
    logicLocale = "İletişim";
  } else if (locale === "tr") {
    Text = contactTextTR;
    logicLocale = "İletişim";
  } else if (locale === "en") {
    Text = contactTextEN;
    logicLocale = "Contact";
  } else {
    Text = contactTextTR;
    logicLocale = "İletişim";
  }

  const { ref } = useSectionInView(logicLocale);

  let message = Text[4].success;

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{Text[0].title}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {Text[1].sentence1}{" "}
        <a className="underline" href="mailto:mertdenizci99@gmail.com">
          {Text[2].underline}
        </a>{" "}
        {Text[3].sentence2}
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success(message);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={Text[5].placeholder1}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={Text[6].placeholder2}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
