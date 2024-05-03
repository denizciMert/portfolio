"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const getImagePath = () => {
    if (localActive === "tr") {
      return "/tr.svg";
    } else {
      return "/gb.svg";
    }
  };

  const getLocale = () => {
    if (localActive === "tr") {
      return "en";
    } else {
      return "tr";
    }
  };

  const changeLocale = () => {
    const nextLocale = getLocale();
    localStorage.setItem("locale",nextLocale)
    startTransition(() => {
      router.replace(`/${nextLocale}`);
      router.refresh();
    });
  };
  return (
    <button
      className="fixed bottom-5 left-5 bg-transparent bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={changeLocale}
      disabled={isPending}
    >
      <Image
      className="rounded-full"
        alt="language"
        width={30}
        height={30}
        src={getImagePath()}
      ></Image>
    </button>
  );
}
