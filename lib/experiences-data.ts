import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesDataEN = [
  {
    title: "Istanbul Kültür University",
    location: "Istanbul, TR",
    description:
      "Completed my degree program with the highest grade-winning graduation project of the year.",
    icon: React.createElement(LuGraduationCap),
    date: "09.2017 - 04.2023",
  },
  {
    title: "Club Rintintin - Marketing Manager Assistant",
    location: "Istanbul, TR",
    description:
      "Conducted market research. Developed marketing strategies and helped achieve profit targets.",
    icon: React.createElement(CgWorkAlt),
    date: "08.2019 - 10.2019",
  },
  {
    title: "CK Enerji - IT Help Desk Intern",
    location: "Istanbul, TR",
    description:
      "Utilized Active Directory. Conducted inventory tracking. Installed company computers, phones, and terminals.",
    icon: React.createElement(CgWorkAlt),
    date: "02.2023 - 03.2023",
  },
  {
    title: "CK Enerji - Network Security and Management Intern",
    location: "Istanbul, TR",
    description:
      "Simulated network topologies, protocols, and vulnerabilities. Implemented security protocols and used Fortinet Firewall.",
    icon: React.createElement(FaReact),
    date: "03.2023 - 04.2023",
  },
] as const;

export const experiencesDataTR = [
  {
    title: "İstanbul Kültür Üniversitesi",
    location: "İstanbul, TR",
    description:
      "Bölümümü mezun olduğum yılın en yüksek notunu alan bitirme projesiyle tamamladım.",
    icon: React.createElement(LuGraduationCap),
    date: "09.2017 - 04.2023",
  },
  {
    title: "Club Rintintin - Pazarlama Yönetici Yardımcısı",
    location: "İstanbul, TR",
    description:
      "Pazar araştırmaları yaptım. Pazarlama stratejileri geliştirdim ve kâr hedeflerine ulaşılmasında yardımcı oldum.",
    icon: React.createElement(CgWorkAlt),
    date: "08.2019 - 10.2019",
  },
  {
    title: "CK Enerji - BT Yardım Masası Stajyeri",
    location: "İstanbul, TR",
    description:
      "Active Directory kullandım. Şirket bilgisayarlarını, telefonlarını ve terminallerini kurdum.",
    icon: React.createElement(CgWorkAlt),
    date: "02.2023 - 03.2023",
  },
  {
    title: "CK Enerji - Ağ Güvenliği ve Yönetimi Stajyer",
    location: "İstanbul, TR",
    description:
      "Ağ topolojileri kurarak, protokolleri ve zafiyetleri simüle ettim. Güvenlik protokolleri uyguladım ve Fortinet Firewall kullandım.",
    icon: React.createElement(FaReact),
    date: "03.2023 - 04.2023",
  },
] as const;