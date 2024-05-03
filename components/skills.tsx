"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/skills-data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { skillsTextEN, skillsTextTR } from "@/lib/skills-text";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
    const [locale, setLocale] = useState<any>();
    useEffect(() => {
      const fromStorage = localStorage.getItem("locale");
      setLocale(fromStorage);
    }, []);

    let Data;
    let Page;
    let logicLocale;
    if (locale === undefined) {
      Data = skillsData;
      Page = skillsTextTR;
      logicLocale = "Yetenekler";
    } else if (locale === "tr") {
      Data = skillsData;
      Page = skillsTextTR;
      logicLocale = "Yetenekler";
    } else if (locale === "en") {
      Data = skillsData;
      Page = skillsTextEN;
      logicLocale = "Skills";
    } else {
      Data = skillsData;
      Page = skillsTextTR;
      logicLocale = "Yetenekler";
    }
  const { ref } = useSectionInView(logicLocale);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{Page[0].title}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Data.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
