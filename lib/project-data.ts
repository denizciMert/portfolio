import cafemenu from "@/public/cafemenu.png";
import games from "@/public/games.png";
import libraryapp from "@/public/libraryapp.png";
import schoolmanagement from "@/public/schoolmanagement.png";
import todolist from "@/public/todolist.png";

export const projectDataEN = [
  {
    title: "Öykümeşe",
    description:
      "Öykümeşe is a library app that works with user registeration, users can rent books and view details. Administrators can manage users, records, and books through the control panel.",
    tags: ["C#", ".Net8 MVC", "MySQL", "Bootstrap", "BCrypt", "Pomelo"],
    imageUrl: libraryapp,
    sourceUrl: "https://github.com/denizciMert/library-app-mvc",
  },
  {
    title: "EduMaster",
    description:
      "EduMaster is a comprehensive system that manages school data such as campuses, students, teachers, classes, and exams through a database.",
    tags: ["C#", "MsSQL", "WinForms", "EntityFramework", "GunaUI"],
    imageUrl: schoolmanagement,
    sourceUrl: "https://github.com/denizciMert/sql-project-cs-form",
  },
  {
    title: "CuisineCraft",
    description:
      "CuisineCraft is a web and mobile application integrated with a database, allowing users to quickly access the menu and place orders via QR codes.",
    tags: ["JavaScript", "HTML", "CSS", "MongoDB", "Express", "FS"],
    imageUrl: cafemenu,
    sourceUrl: "https://github.com/denizciMert/online-menu",
  },
  {
    title: "Spinorama",
    description:
      "Spinorama spins at variable intervals determined by the random rotation speed. Users can control the starting angle. The winner is determined only when wheel stops completely.",
    tags: ["JavaScript#", "C#", "WCF", "XAML", "Fetch", "HTML", "CSS"],
    imageUrl: games,
    sourceUrl: "https://github.com/denizciMert/roulette-js",
  },
  {
    title: "Taskify",
    description:
      "Taskify allows users to set alarms, create counters, and store active and completed tasks in a file for both time-focused and non-time-focused tasks.",
    tags: ["C#", "JSON", "WinForms", "OpenXML", "BunifuUI"],
    imageUrl: todolist,
    sourceUrl: "https://github.com/denizciMert/todo-cs-form",
  },
] as const;

export const projectDataTR = [
  {
    title: "Öykümeşe",
    description:
      "Öykümeşe, kullanıcıların sisteme kayıt olarak, kitapları kiralayıp özelliklerini görüntülemesine olanak tanır. Yöneticiler, kontrol paneli üzerinden kullanıcıları, kayıtları ve kitapları yönetebilir.",
    tags: ["C#", ".Net8 MVC", "MySQL", "Bootstrap", "BCrypt", "Pomelo"],
    imageUrl: libraryapp,
    sourceUrl: "https://github.com/denizciMert/library-app-mvc",
  },
  {
    title: "EduMaster",
    description:
      "EduMaster, okulların kampüs, öğrenci, öğretmen, ders ve sınav gibi verilerini veritabanı üzerinden yöneten kapsamlı bir sistemdir.",
    tags: ["C#", "MsSQL", "WinForms", "EntityFramework", "GunaUI"],
    imageUrl: schoolmanagement,
    sourceUrl: "https://github.com/denizciMert/sql-project-cs-form",
  },
  {
    title: "CuisineCraft",
    description:
      "CuisineCraft, web ve mobil platformlarda kullanılabilen, veritabanı entegreli bir uygulamadır. Kullanıcılar, karekodlar aracılığıyla menüye hızlıca erişebilir ve sipariş verebilirler.",
    tags: ["JavaScript", "HTML", "CSS", "MongoDB", "Express", "FS"],
    imageUrl: cafemenu,
    sourceUrl: "https://github.com/denizciMert/online-menu",
  },
  {
    title: "Spinorama",
    description:
      "Spinorama, rastgele belirlenen dönme hızıyla, değişken sürelerde döner. Kullanıcı başlangıç açısını kontrol edebilir. Kazanan sadece çark tamamen durduğunda belirlenir.",
    tags: ["JavaScript#", "C#", "WCF", "XAML", "Fetch", "HTML", "CSS"],
    imageUrl: games,
    sourceUrl: "https://github.com/denizciMert/roulette-js",
  },
  {
    title: "Taskify",
    description:
      "Taskify, kullanıcıların zamana odaklı veya odaklı olmayan görevleri için alarm, sayaç oluşturmasına, aktif ve tamamlanmış görevleri bir dosyada saklamasına olanak tanır.",
    tags: ["C#", "JSON", "WinForms", "OpenXML", "BunifuUI"],
    imageUrl: todolist,
    sourceUrl: "https://github.com/denizciMert/todo-cs-form",
  },
] as const;