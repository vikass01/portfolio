import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Certifications", path: "/blogs" },
  { text: "Contact", path: "/contact" },
  { text: "Resume", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
  },
  {
    name: "Electron Js",
    icon: IoLogoElectron,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  // {
  //   name: "C/C++",
  //   icon: TbBrandCpp,
  // },
  // {
  //   name: "Python",
  //   icon: FaPython,
  // },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "PugJs",
    icon: SiPug,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  // {
  //   name: "ChatGPT",
  //   icon: GiArtificialIntelligence,
  // },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  // {
  //   name: "Markdown",
  //   icon: BsMarkdown,
  // },
];

export const workData = [
  {
    company: "1Digitalstack.ai",
    designation: "Software Engineer 1",
    duration: "March 2022 - Present",
    companyImg: "1ds.jpg",
    description: (
      <>
        <ul>
          <li>
            I work on Reviniti, an analytics product designed for e-commerce
            players in the bid management domain. Solely migrated the old
            codebase from a templating engine (PugJS) to React with TypeScript.
          </li>
          <li>
            Engaged in developing new features, refactoring code, enhancing
            product performance, bug fixes and contributing towards achieving
            high scalability for the product.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Fact.MR",
    designation: "Associate Consultant Level 01",
    duration: "Dec 2020 - July 2021",
    companyImg: "fmr.svg",
    description: (
      <>
        <ul>
          <li>
            Engaged in creating comprehensive client-specific and syndicated
            research reports, along with SEO-focused articles and collateral
            materials within the domains of chemicals, materials, consumer
            goods, and industrial goods.
          </li>
          <li>
            Expertly estimated market valuations and conducted primary research
            in collaboration with industry experts to validate data, extract
            valuable market insights.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Magnet",
    image: "movie-magnet",
    link: "https://movie-magnet-jade.vercel.app/",
    source: "https://github.com/vikass01/Movie-Magnet",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/vikass01/portfolio",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    link: "https://weather-app-orpin-xi-63.vercel.app/",
    source: "https://github.com/vikass01/Weather_App",
  },
  {
    type: "WEB-APP",
    title: "World Wide Visa",
    image: "landing-page",
    link: "https://worldwide-visa.vercel.app/",
    source: "https://github.com/vikass01/world_wide_visa",
  },
  {
    type: "WEB-APP",
    title: "Mbbs Study Overseas",
    image: "guess-game",
    link: "https://mbbsstudyoverseas.com/",
    source: "https://github.com/vikass01/mbbs-study-overseas",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "",
    source: "",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://text-utils-beryl-six.vercel.app/",
    source: "https://github.com/vikass01/text-utils",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/vikass01",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/",
    icon: FaTwitter,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "",
    icon: FaHashnode,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
