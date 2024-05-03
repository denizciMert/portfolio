"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TbSquareRoundedLetterK } from "react-icons/tb";
import profilephoto from "@/public/profilephoto.jpg";
import { introTextEN, introTextTR } from "@/lib/intro-text";

export default function Intro() {
  const [locale, setLocale] = useState<any>();
  useEffect(() => {
    const fromStorage = localStorage.getItem("locale");
    setLocale(fromStorage);
  }, []);

  let Text;
  let logicLocale;
  let cvHref;
  if (locale === undefined) {
    Text = introTextTR;
    logicLocale = "Başlangıç";
    cvHref = "mert-denizci-CVtr.pdf";
  } else if (locale === "tr") {
    Text = introTextTR;
    logicLocale = "Başlangıç";
    cvHref = "mert-denizci-CVtr.pdf";
  } else if (locale === "en") {
    Text = introTextEN;
    logicLocale = "Home";
    cvHref = "mert-denizci-CVen.pdf";
  } else {
    Text = introTextTR;
    logicLocale = "Başlangıç";
    cvHref = "mert-denizci-CVtr.pdf";
  }

  const { ref } = useSectionInView(logicLocale, 0.4);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilephoto}
              alt="Mert portrait"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {logicLocale === "Home" ? (
          <div>
            <span className="font-bold">Hello, I'm Mert.</span>
            <br /> I'm an{" "}
            <span className="italic">electrical-electronics engineer.</span> I
            enjoy building <span className="italic">sites & apps</span>. My
            focus is <span className="underline">ASP.NET and React</span>.
          </div>
        ) : (
          <div>
            <span className="font-bold">Merhaba, ben Mert.</span>
            <br /> {" "}
            <span className="italic">Elektrik-elektronik mühendisiyim.</span>
            <span className="italic"> Siteler & uygulamalar</span> oluşturmaktan
            keyif alıyorum. Odağım{" "}
            <span className="underline">ASP.NET ve React</span>.
          </div>
        )}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {Text[7].contact}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href={cvHref}
          download
        >
          {Text[8].cv}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/mert-denizci/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/denizciMert"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.kariyer.net/ozgecmis/mertdenizci"
          target="_blank"
        >
          <TbSquareRoundedLetterK />
        </a>
      </motion.div>
    </section>
  );
}
