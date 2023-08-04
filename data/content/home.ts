import airtel from "../../public/static/experience/airtel.png";

type SWESkills = {
  title: string;
  icon: string;
  style?: object;
};
type MLSkills = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
  image: string;
  alt: string;
  link: string;
  style?: string;
  gpa: string;
  years: string;
};

export const SWEskills: SWESkills[] = [
  {
    title: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },

  {
    title: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    title: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  {
    title: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

export const MLskills: MLSkills[] = [
  {
    title: "Tensorflow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    title: "Numpy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    title: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    title: "Pytorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    title: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    title: "OpenAI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openal/openal-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  {
    title: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    title: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    style: { filter: "invert(1)" },
  },

  {
    title: "Apache Kafka",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
    style: { filter: "invert(1)" },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "University of California - Los Angeles",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
    image: "/static/education/ucla.png",
    alt: "UCLA Icon",
    link: "https://www.ucla.edu/",
    gpa: "3.96",
    years: "2021-2025",
  },
  {
    quote: "The Shri Ram School - Aravali",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
    image: "/static/education/tsrs.jpg",
    alt: "TSRS Icon",
    link: "https://www.tsrs.org/",
    style: "rounded-full",
    gpa: "98%",
    years: "2009-2021",
  },
];

export const experiences = [
  {
    company: "Airtel Digital",
    jobTitle: "Software Engineering Intern",
    startDate: "Jul 2023",
    endDate: "Present",
    stack: "Java, Spring, Oracle",
    image: "/static/experience/airtel.png",
    desc: "Ongoing.",
  },
  {
    company: "The Rowchowdhary Group",
    jobTitle: "Researcher",
    startDate: "Apr 2023",
    endDate: "Present",
    stack: "Pytorch, MNE-Python",
    image: "/static/experience/airtel.png",
    desc: "Mapping neural spread of Epilepsy for real-patient EEG data to assist surgical decision making.",
  },

  {
    company: "YourNest Venture Capital",
    jobTitle: "Data Science Intern",
    startDate: "Jul 2022",
    endDate: "Sep 2022",
    stack: "Tensorflow, Javascript, Python",
    image: "/static/experience/airtel.png",
    desc: "Setup internal data cleaning pipelines. Predicted success of startups to aid investment decisions.",
  },
  {
    company: "Bruin Formula Racing",
    jobTitle: "Software Engineer",
    startDate: "Sep 2022",
    endDate: "Mar 2023",
    stack: "C++ (Qt Software), Python",
    image: "/static/experience/airtel.png",
    desc: "Built Graphical User Interface for formula car's dashboard. Retrieved and analyzed live-car data.",
  },
  {
    company: "UCLA Transportation",
    jobTitle: "CRM Representative",
    startDate: "May 2022",
    endDate: "Present",
    stack: "Salesforce, T2 Systems",
    image: "/static/experience/airtel.png",
    desc: "Automated Salesforce replies to customer queries. Managed customer data using T2 Flex.",
  },
  {
    company: "Bruin Sports Analytics",
    jobTitle: "Sports Analyst",
    startDate: "Sep 2022",
    endDate: "Jan 2023",
    stack: "Python, NLTK",
    image: "/static/experience/airtel.png",
    desc: "Performed NLP toxicity analysis for football team sub-reddits. Implemented minimax algorithm for chess games.",
  },
];
