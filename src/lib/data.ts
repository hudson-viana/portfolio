import SouJuniorLogo from "../../public/SouJuniorLogo.png";
import calculator from "../../public/calculator.png";
import gitFind from "../../public/gitFind.png";
import img219after from "@public/219contribution/219-after.png";
import img219before from "@public/219contribution/219-before.png";
import img213before from "@public/213contribution/213-before.png";
import img213afterGroup from "@public/213contribution/213-after-group.png";
import dictionary from "../../public/dictionary.png";
import portfolio from "../../public/portfolio.png";
import freelancerLogo from "../../public/freelancerLogo.png";
import mentorshipPortal from "../../public/mentorshipPortal.png";

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
  "React",
  "TypeScript",
  "Next.js",
  "RESTful API",
  "Styled Components",
  "CSS",
  "Radix",
  "React Query",
  "Axios",
  "Formik",
  "Yup",
  "Scrum",
  "Kanban",
];

const freelancerTags1 = [
  "React",
  "Next.js",
  "Vite",
  "RESTful API",
  "TypeScript",
  "JavaScript",
  "CSS",
  "Styled Components",
  "Tailwind",
  "Unit Testing",
];

export const experiencesData = [
  {
    position: "Front-end Web Developer",
    company: "SouJunior",
    startDate: "Apr/2024",
    endDate: "current",
    location: "Remote",
    description:
      "- Development and maintenance of a SaaS (Software as a Service) project containing  responsive interfaces and components using React, TypeScript, Next, Styled Components (CSS in JavaScript), Radix;\n- Fixing layout issues and functionality bugs;\n- Transforming design prototypes from Figma into front-end code;\n- Interacting with Backend, Product, QA, UX, and Agile teams;\n- Participating in Sprint Plannings and Reviews with the team using agile methodologies (Scrum and Kanban on GitHub Projects);\n- Applying other knowledge such as Git, GitHub, HTML, SOLID principles;\n- Contributing to discussions on implementation strategies, processes, best practices, technologies, tools, and techniques.",
    imageUrl: SouJuniorLogo,
    projectTags: SouJuniorTags2,
  },
  {
    position: "Front-end Web Developer",
    company: "Freelancer",
    startDate: "Apr/2024",
    endDate: "current",
    location: "Remote",
    description:
      "- Voluntarily creating open source projects to gain more experience;\n- All projects are organized in my portfolio https://hudsonviana.vercel.app/\n- The two highlights are the English Dictionary project (applied knowledge of RESTful API, React (Vite), TypeScript, Tailwind CSS, asynchronous functions, iterators) and the GitFind project (applied similar knowledge to the English Dictionary but done in JavaScript and CSS);\n- Besides open source projects, I continuously study and practice to gain experience with topics such as: Bootstrap, MySQL, React Hooks, jQuery, Unit Testing, Shell Script, Linux (and WSL), Docker, front-end metrics (LCP, FID, CLS), UI/UX concepts, and CI/CD, state management (Redux), SPA.",
    imageUrl: freelancerLogo,
    projectTags: freelancerTags1,
  },
] as const;

export const projectsData = [
  {
    title: "Mentorship Portal",
    description:
      "This project connects tech students with senior mentors, featuring Calendly API integration. It's a voluntary, open-source, full-stack initiative. I contribute to the front-end, working with the SouJunior team, who own the product. The project is ongoing.",
    tags: ["React (Next)", "Typescript", "CSS in JavaScript", "Radix", "Scrum", "Kanban"],
    imageUrl: mentorshipPortal,
    liveUrl: "https://mentores-frontend.vercel.app/",
    githubUrl: "https://github.com/SouJunior/mentores-frontend",
  },
  {
    title: "English Dictionary",
    description:
      "This web app utilizes the Free Dictionary API to search for word meanings, synonyms and antonyms.",
    tags: ["React (Vite)", "Typescript", "TailwindCSS"],
    imageUrl: dictionary,
    liveUrl: "https://react-dictionary-hudson.vercel.app/",
    githubUrl: "https://github.com/hudson-viana/react-dictionary",
  },
  {
    title: "My portfolio",
    description:
      "This project was created to list my projects, experiences, contributions and skills",
    tags: ["Next.js (React)", "Typescript", "TailwindCSS"],
    imageUrl: portfolio,
    liveUrl: "https://hudsonviana.vercel.app/",
    githubUrl: "https://github.com/hudson-viana/portfolio",
  },
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
  "API RESTFul",
  "Unit Testing",
  "CSS in JavaScript",  
  "Tailwind",  
  "Radix",
  "Responsive Interfaces",
  "Mobile First",
  "Accessibility",  
  "HTML & CSS",
  "Git",
  "GitHub",
  "Scrum",
  "Kanban",
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
