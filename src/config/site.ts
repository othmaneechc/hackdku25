import authorAvatar from "../../public/images/author/devbertskie.png";
export const siteConfig = {
  name: "HΔCKDKU",
  description:
    "MDX Blog Template is a simple implementation of a markdown static blog. Built with Next.js 14 and velite js.",
  author: "DKU Computer Science Club",
  authorImage: authorAvatar,
  social: {
    cs_club: "https://www.dkucompsci.org/",
    github: "https://github.com/",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
