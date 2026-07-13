import { cn } from "@/lib/utils";

/** Matches the Navbar "Book a Call" button. */
export const marketingButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 text-[12px] font-semibold text-white shadow-[0_8px_18px_rgba(17,17,17,0.13)] transition hover:bg-[#F24202] active:scale-95 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F24202]";

/** Same shape as Book a Call, inverted for dark backgrounds. */
export const marketingButtonOnDarkClass =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[12px] font-semibold text-[#111111] shadow-[0_8px_18px_rgba(17,17,17,0.13)] transition hover:bg-[#F24202] hover:text-white active:scale-95 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function marketingButton(...classes: Array<string | false | null | undefined>) {
  return cn(marketingButtonClass, ...classes);
}

export function marketingButtonOnDark(...classes: Array<string | false | null | undefined>) {
  return cn(marketingButtonOnDarkClass, ...classes);
}
