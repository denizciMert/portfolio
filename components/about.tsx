"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { aboutTextEN, aboutTextTR } from "@/lib/about-text";

export default function About() {
  const [locale, setLocale] = useState<any>();
  useEffect(() => {
    const fromStorage = localStorage.getItem("locale");
    setLocale(fromStorage);
  }, []);

  let Text;
  let logicLocale;
  if (locale === undefined) {
    Text = aboutTextTR;
    logicLocale = "Hakkımda";
  } else if (locale === "tr") {
    Text = aboutTextTR;
    logicLocale = "Hakkımda";
  } else if (locale === "en") {
    Text = aboutTextEN;
    logicLocale = "About";
  } else {
    Text = aboutTextTR;
    logicLocale = "Hakkımda";
  }

  const { ref } = useSectionInView(logicLocale);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{Text[0].title}</SectionHeading>
      {logicLocale === "About" ? (
        <div>
          <p className="mb-3">
            After graduating in{" "}
            <span className="font-medium">E-E Engineering</span>, I decided to
            pursue my passion for{" "}
            <span className="font-medium">programming</span>. I attended
            numerous software and coding courses. I trained myself and obtained
            certifications.{" "}
            <span className="italic">My favorite aspect of programming</span> is
            bringing a functional product to life. I{" "}
            <span className="underline">love</span> seeing a product complete
            and automate processes. The tools I frequently use are{" "}
            <span className="font-medium">React.js and ASP.NET MVC</span>. I am
            also familiar with MongoDB and MsSQL. I am always looking to learn
            new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a
            software developer.
          </p>

          <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movies and spending time with my friends. I
            also enjoy <span className="font-medium">learning new things</span>.
            I am currently learning about{" "}
            <span className="font-medium">Next.js</span>.
          </p>
        </div>
      ) : (
        <div>
          <p className="mb-3">
            <span className="font-medium">E-E Mühendisliği</span> alanından
            mezun olduktan sonra,{" "}
            <span className="font-medium">programlamaya </span>
            olan tutkumu takip etmeye karar verdim. Birçok yazılım ve kodlama
            kursuna katıldım. Kendimi eğittim ve sertifikalar aldım.{" "}
            <span className="italic">Programlamadaki en sevdiğim kısım</span>,
            fonksiyonel bir ürün ortaya koymak. Bir ürün tamamlandıktan sonra
            çözümlediği ve otomatikleştirdiği işlemleri görmek bana{" "}
            <span className="underline">keyif</span> veriyor. Sık kullandığım
            araçlar <span className="font-medium">React.js ve ASP.NET MVC</span>
            . Ayrıca MongoDB ve MsSQL'e de aşinayım. Her zaman yeni teknolojiler
            öğrenmeye açığım. Şu anda bir yazılım geliştirici olarak{" "}
            <span className="font-medium">tam zamanlı bir pozisyon</span>{" "}
            arıyorum.
          </p>

          <p>
            <span className="italic">Kod yazmadığım zamanlarda</span>, video
            oyunları oynamaktan, film izlemekten ve arkadaşlarımla olmaktan
            keyif alırım. Ayrıca{" "}
            <span className="font-medium">yeni şeyler öğrenmekten</span>{" "}
            hoşlanıyorum. Şu anda <span className="font-medium">Next.js</span>{" "}
            öğreniyorum.
          </p>
        </div>
      )}
    </motion.section>
  );
}
