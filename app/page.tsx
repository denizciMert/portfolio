import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Index() {
  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE");
  if (locale === undefined) {
    redirect(`/tr`);
  } else {
    redirect(`/${locale.value}`);
  }
}
