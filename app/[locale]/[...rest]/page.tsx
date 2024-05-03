"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const [locale, setLocale] = useState<any>();
  useEffect(() => {
    const fromStorage = localStorage.getItem("locale");
    setLocale(fromStorage);
  }, []);
  if (locale === undefined) {
    redirect(`/tr`);
  } else if (locale === "tr") {
    redirect(`/tr`);
  } else {
    redirect(`/en`);
  }
}
