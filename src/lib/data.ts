import SouJuniorLogo from "../../public/SouJuniorLogo.png";
import calculator from "../../public/calculator.png";
import gitFind from "../../public/gitFind.png";
import img219after from "@public/219contribution/219-after.png";
import img219before from "@public/219contribution/219-before.png";
import img213before from "@public/213contribution/213-before.png";
import img213afterGroup from "@public/213contribution/213-after-group.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contributions",
    hash: "#contributions",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

const SouJuniorTags1 = [
  "Next.js",
  "TypeScript",
  "React",
  "CSS",
  "Styled Components",
  "Radix",
];

const SouJuniorTags2 = [
  "Next.js",
  "TypeScript",
  "React",
  "CSS",
  "Styled Components",
  "Radix",
  "React Query",
  "Axios",
  "Formik",
  "Yup",
  "Agile",
];

export const experiencesData = [
  {
    position: "Frontend Developer",
    company: "SouJunior",
    startDate: "Apr/2024",
    endDate: "current",
    location: "Remote",
    description:
      "- Creation of reusable components using React.js, Next.js, Styled Components (CSS in Javascript), Typescript\n- Corrections of layout formatting and functionality bugs.\n- Transformation of Figma prototypes into front-end code.\n- Participation in Reviews and Sprint Plannings with the team, using the agile Scrum methodology along with a Kanban on GitHub Projects.",
    imageUrl: SouJuniorLogo,
    projectTags: SouJuniorTags2,
  },
] as const;

export const projectsData = [
  {
    title: "GitHub Repository Search",
    description:
      "This web app utilizes the GitHub API to search for a GitHub username and retrieve a list of the associated repositories.",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: gitFind,
    liveUrl: "https://react-git-find-hudson.vercel.app/",
    githubUrl: "https://github.com/hudson-viana/react-git-find",
  },
  {
    title: "JavaScript-Only Calculator",
    description: "A calculator using only JavaScript and CSS.",
    tags: ["JavaScript", "CSS"],
    imageUrl: calculator,
    liveUrl: "https://hudson-viana.github.io/react-calculator/",
    githubUrl: "https://github.com/hudson-viana/react-calculator",
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "CSS",
  "Tailwind",
  "Styled Components",
  "Radix",
  "Git",
  "GitHub",
  "HTML",
] as const;

export const contributionsData = [
  {
    imageUrlBefore: img213before,
    titleBefore: "Before",
    descriptionBefore:
      "A modal with only one step that simply redirects the user to the Calendly website.",
    imageUrlAfter: img213afterGroup,
    titleAfter: "After",
    descriptionAfter:
      "A new pagination-dot-stepper custom component, a new modal with 4 steps, and a new input that validates the Calendly URL.",
    githubPrUrl: "https://github.com/SouJunior/mentores-frontend/pull/213",
    openSourceName: "SouJunior/mentores-frontend",
    openSourceLogo: SouJuniorLogo,
    openSourceProjectUrl: "https://github.com/SouJunior/mentores-frontend",
    openSourceProjectTags: SouJuniorTags1,
  },
  {
    imageUrlBefore: img219before,
    titleBefore: "Before",
    descriptionBefore:
      "The character count was not dynamically displayed, leaving users unaware of how many characters they had used.",
    imageUrlAfter: img219after,
    titleAfter: "After",
    descriptionAfter:
      "Now the field dynamically displays the current character count. If exceeded, it shows the number of extra characters in red. This provides real-time feedback for better content management.",
    githubPrUrl: "https://github.com/SouJunior/mentores-frontend/pull/219",
    openSourceName: "SouJunior/mentores-frontend",
    openSourceLogo: SouJuniorLogo,
    openSourceProjectUrl: "https://github.com/SouJunior/mentores-frontend",
    openSourceProjectTags: SouJuniorTags1,
  },
] as const;
