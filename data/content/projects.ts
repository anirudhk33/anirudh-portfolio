import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "AceVision",
    desc: "Real-time tennis refereeing, technique analysis, ball speed measurement, and more. WORK IN PROGRESS.",
    img: "/static/projects/acevision5.png",
    tags: ["Python", "YOLOv5", "OpenCV", "MediaPipe", "Pytorch"],
  },
  {
    id: 1,
    title: "Formula Data",
    desc: "Build the optimal Formula 1 fantasy team with AI assistance and access an extensive repository of F1 data via our intuitive API.",
    img: "/static/projects/formuladata2.png",
    link: "https://formuladata.vercel.app/Home",
    github: "https://github.com/anirudhk33/FormulaData",
    tags: ["React", "Python", "Tensorflow", "Beautiful Soup", "Flask"],
  },

  {
    id: 2,
    title: "BruinLeasy",
    desc: "A centralized platform connecting sublessors and sublessees. This service is for bruins only.",
    img: "/static/projects/bruinleasy.png",
    github: "https://github.com/maxinewu5/bruinleasy",
    tags: ["React", "CSS", "Firebase"],
  },

  {
    id: 3,
    title: "CoConnect",
    desc: "A mobile application to dynamically match on-campus tutors and tutees for an hourly price.",
    img: "/static/projects/coconnect2.png",
    github: "https://github.com/danieltherealyang/lahacks2023-coconnect",
    tags: ["React Native", "MongoDB", "NodeJS", "Express"],
  },
  {
    id: 4,
    title: "Investrix",
    desc: "A tool to automate stock research through web crawling, news summarization, sentiment analysis.",
    img: "/static/projects/investrix.png",
    github: "https://github.com/anirudhk33/Investrix",
    tags: ["Python", "Beautiful Soup", "Hugging Face"],
  },
  {
    id: 5,
    title: "Flix++",
    desc: "Personalized film recommendation system. Built efficient user and movie database from scratch.",
    img: "/static/projects/flix.jpg",
    github: "https://github.com/anirudhk33/FlixPlusPlus",
    tags: ["C++"],
  },
  {
    id: 6,
    title: "Mario Peach Party",
    desc: "A two-player game with 9 levels of increasing difficulty - closely resembles the Mario Party series.",
    img: "/static/projects/mario.png",
    github: "https://github.com/anirudhk33/PeachParty-Mario",
    tags: ["C++"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
