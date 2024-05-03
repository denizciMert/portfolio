"use client";

import { footerTextEN, footerTextTR } from "@/lib/footer-text";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [locale, setLocale] = useState<any>();
  useEffect(() => {
    const fromStorage = localStorage.getItem("locale");
    setLocale(fromStorage);
  }, []);

  let Text;

  if (locale === undefined) {
    Text = footerTextTR;
  } else if (locale === "tr") {
    Text = footerTextTR;
  } else if (locale === "en") {
    Text = footerTextEN;
  } else {
    Text = footerTextTR;
  }

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; {Text[0].copy}</small>
      <p className="text-xs">
        <span className="font-semibold">{Text[0].bold}</span> {Text[0].text}
        <br />
        <br />
        <br />
      </p>
    </footer>
  );
}
