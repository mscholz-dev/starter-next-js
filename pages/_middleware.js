import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

// trigger at every page load to add /fr to the default language (not handled by next-translate)
export function middleware({ nextUrl }) {
  const changeLocaleValue = !PUBLIC_FILE.test(nextUrl.pathname) && !nextUrl.pathname.includes("/api/") && nextUrl.locale === "default";

  // not change locale in url
  if (!changeLocaleValue) return null;

  // change locale in url
  const url = nextUrl.clone();
  url.pathname = `/fr/${nextUrl.pathname}`;
  return NextResponse.redirect(url);
}
