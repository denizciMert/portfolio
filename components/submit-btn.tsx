import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { submitBtnTextEN, submitBtnTextTR } from "@/lib/submit-btn-text";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const [locale, setLocale] = useState<any>();
  useEffect(() => {
    const fromStorage = localStorage.getItem("locale");
    setLocale(fromStorage);
  }, []);

  let Page;
  if (locale === undefined) {
    Page = submitBtnTextTR;
  } else if (locale === "tr") {
    Page = submitBtnTextTR;
  } else if (locale === "en") {
    Page = submitBtnTextEN;
  } else {
    Page = submitBtnTextTR;
  }
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {Page[0].title}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
