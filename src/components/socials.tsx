import { SOCIALS } from "@/constants";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export default function Socials() {
    return (
<div className="flex items-center space-x-2 text-white ">
          {SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={social.path}
              rel="noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "default" }),
                "p-2 size-8 text-white"
              )}
            >
              <social.icon className="size-6" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>);}