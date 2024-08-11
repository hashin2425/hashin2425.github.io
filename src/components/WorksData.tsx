import imgTest from "../images/ogp.png";
import { WorksDataItems } from "../components/Utils";

const WorksData: WorksDataItems[] = [
  {
    title: "Webアプリ",
    img: imgTest,
    description: "Webアプリです",
    githubUrl: "https://github.com",
    productionUrl: "https://production.com",
    techList: ["React", "TypeScript", "Tailwind CSS"],
    priority: 1,
  },
  {
    title: "Webアプリ2",
    img: imgTest,
    description: "Webアプリです2",
    githubUrl: "https://github.com",
    productionUrl: "https://production.com",
    techList: ["React", "TypeScript", "Tailwind CSS"],
    priority: 2,
  },
];

export default WorksData;
