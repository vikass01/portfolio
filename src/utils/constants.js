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
    company: "Routa Digital Pvt. Ltd.",
    designation: "Software Developer",
    duration: "March 2024 - Sept 2025",
    companyImg: "https://media.licdn.com/dms/image/v2/C4D0BAQF1c8ca6iK3vA/company-logo_200_200/company-logo_200_200/0/1673349957314?e=2147483647&v=beta&t=xiUSeNbCvMSCHSs7y6BprjbYZS2E20odxwz77gkuDUA",
    description: (
      <>
        <ul>
          <li>
            Developed web applications using React.js and Next.js integrated
            with REST APIs.
          </li>
          <li>
            Built reusable UI components, improved application performance,
            and enhanced SEO.
          </li>
          <li>
            Implemented dashboards and HRMS modules using Ant Design.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "OYO Corporate Office",
    designation: "Software Developer",
    duration: "October 2019 - January 2024",
    companyImg: "https://images.seeklogo.com/logo-png/44/1/oyo-rooms-logo-png_seeklogo-443633.png",
    description: (
      <>
        <ul>
          <li>
            Developed and maintained REST APIs for mobile and web applications.
          </li>
          <li>
            Debugged and resolved live production issues to ensure system stability.
          </li>
          <li>
            Designed responsive user interfaces using React.js.
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
    link: "https://vikaspanchal.tech",
    source: "https://github.com/vikass01/portfolio",
  }, 
  // {
  //   type: "WEB-APP",
  //   title: "Pure Source Shop (OrganixHub)",
  //   image: "organic",
  //   link: "https://organixhub.com/",
  //   source: "https://github.com/vikass01/pure-source-shop",
  // },
  {
    type: "WEB-APP",
    title: "OrganixHub (Vercel)",
    image: "organic",
    link: "https://organixhub.vercel.app/",
    source: "https://github.com/vikass01/pure-source-shop",
  },
  // {
  //   type: "WEB-APP",
  //   title: "Delicious Diet",
  //   image: "delicious-diet",
  //   link: "https://delicious-diet.vercel.app/",
  //   source: "https://github.com/vikass01/vikass01-delicious_diet",
  // },
  {
    type: "WEB-APP",
    title: "Golden Ghee Gateway",
    image: "triomm",
    link: "https://www.triomm.com/",
    source: "https://github.com/vikass01/golden-ghee-gateway",
  },
  {
    type: "WEB-APP",
    title: "Secure Pay Gateway",
    image: "payflow",
    link: "https://secure-pay-gateway.vercel.app/",
    source: "https://github.com/vikass01/secure-pay-gateway",
  },
  {
    type: "WEB-APP",
    title: "VP Meet (Video Conferencing)",
    image: "vp-meet",
    link: "https://vp-meet.vercel.app/",
    source: "https://github.com/vikass01/vp-meet",
  },
  {
    type: "WEB-APP",
    title: "iGlobe Trading UI",
    image: "iglobe",
    link: "https://www.iglobetrading.com/",
    source: "https://github.com/vikass01/initial-ink",
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
    title: "MBBS Study Overseas",
    image: "mbbs-study-overseas",
    link: "https://mbbsstudyoverseas.com/",
    source: "https://github.com/vikass01/mbbs-study-overseas",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://text-utils-beryl-six.vercel.app/",
    source: "https://github.com/vikass01/text-utils",
  },
  {
    type: "PROJECT",
    title: "Notes App",
    image: "react-notes-app",
    link: "",
    source: "",
  },
  {
    type: "PROJECT",
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
    type: "BIG-PROJECT",
    title: "Volvo Connected Architecture",
    image: "volvo",
    link: "https://www.volvogroup.com/en/",
    source: "",
  },
  {
    type: "BIG-PROJECT",
    title: "V2 Retails Enterprise System",
    image: "v2-retails",
    link: "https://v2parivar.v2retail.com:9988/login",
    source: "",
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
