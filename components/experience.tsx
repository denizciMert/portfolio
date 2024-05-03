"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesDataEN, experiencesDataTR } from "@/lib/experiences-data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { experiencesPageTR, experiencesPageEN } from "@/lib/experiences-text";

export default function Experience() {
  const { theme } = useTheme();
  
  const [locale, setLocale] = useState<any>();
  useEffect(() => {
    const fromStorage = localStorage.getItem("locale");
    setLocale(fromStorage);
  }, []);

  let Data;
  let Text;
  let logicLocale;
  if (locale === undefined) {
    Data = experiencesDataTR;
    Text = experiencesPageTR;
    logicLocale="Tecrübeler"
  } else if (locale === "tr") {
    Data = experiencesDataTR;
    Text = experiencesPageTR;
    logicLocale="Tecrübeler"
  } else if (locale === "en") {
    Data = experiencesDataEN;
    Text = experiencesPageEN;
    logicLocale="Experience"
  } else {
    Data = experiencesDataTR;
    Text = experiencesPageTR;
    logicLocale="Tecrübeler"
  }

  const { ref } = useSectionInView(logicLocale);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{Text[0].title}</SectionHeading>

      <VerticalTimeline lineColor="">
        {Data.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
