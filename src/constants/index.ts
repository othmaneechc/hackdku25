import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Calendar, CheckCircle2, Home, PersonStanding, Rss } from "lucide-react";

export const NAV_LIST = [
  { label: "Home", path: "/", icon: Home },
  { label: "Timeline", path: "/timeline", icon: Calendar },
  { label: "Instructions", path: "/instructions", icon: CheckCircle2 },
  { label: "Blog", path: "/blog", icon: Rss },
  { label: "Staff", path: "/about", icon: PersonStanding },
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Facebook", path: siteConfig.social.facebook, icon: Icons.facebook },
  { label: "Twitter", path: siteConfig.social.twitter, icon: Icons.x },
];
