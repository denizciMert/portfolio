"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { projectsTextEN, projectsTextTR } from "@/lib/projects-text";
import { projectDataEN, projectDataTR } from "@/lib/project-data";

export default function Projects() {
  const [locale, setLocale] = useState<any>();
  useEffect(() => {
    const fromStorage = localStorage.getItem("locale");
    setLocale(fromStorage);
  }, []);

  let Data;
  let Page;
  let logicLocale;
  if (locale === undefined) {
    Data = projectDataTR;
    Page = projectsTextTR;
    logicLocale = "Projeler";
  } else if (locale === "tr") {
    Data = projectDataTR;
    Page = projectsTextTR;
    logicLocale = "Projeler";
  } else if (locale === "en") {
    Data = projectDataEN;
    Page = projectsTextEN;
    logicLocale = "Projects";
  } else {
    Data = projectDataTR;
    Page = projectsTextTR;
    logicLocale = "Projeler";
  }
  const { ref } = useSectionInView(logicLocale, 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{Page[0].title}</SectionHeading>
      <div>
        {Data.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
