import { comerciosCopy } from "@/content/comercios";
import { pymesCopy } from "@/content/pymes";
import type { Audience, MarketingCopy } from "@/content/types";

export { brand } from "@/content/brand";
export type {
  Audience,
  ContactFormCopy,
  Differential,
  MarketingCopy,
  NavItem,
  PainPoint,
  ProcessStep,
  Solution,
} from "@/content/types";

export const audienceLinks = [
  { audience: "comercios" as const, href: "/", label: "Comercios" },
  { audience: "pymes" as const, href: "/pymes", label: "Empresas" },
];

export function getCopy(audience: Audience): MarketingCopy {
  return audience === "pymes" ? pymesCopy : comerciosCopy;
}
