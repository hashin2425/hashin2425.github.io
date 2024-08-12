import React, { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
const SectionComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="py-6 px-6 odd:bg-gray-100 even:bg-white">
      <div className="max-w-[900px] mx-auto">{children}</div>
    </section>
  );
};

interface OGPDisplayProps {
  pageLink: string;
  imageLink: string;
  pageName: string;
  pageDescription: string;
  pageShortURL: string;
}

const OGPDisplay: React.FC<OGPDisplayProps> = ({ pageLink, imageLink, pageName, pageDescription, pageShortURL }) => {
  return (
    <a href={pageLink} className="block mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 my-4">
      <div className="flex">
        <div className="w-1/3">
          <Image src={imageLink} alt="OGP Image" className="object-cover w-full h-full" width={500} height={500} />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">{pageName}</h2>
          <p className="text-gray-600 text-sm mb-1 line-clamp-3">{pageDescription}</p>
          <span className="text-gray-500 text-xs">{pageShortURL}</span>
        </div>
      </div>
    </a>
  );
};

interface WorksDataItems {
  title: string;
  img: StaticImageData;
  description: string;
  githubUrl?: string;
  productionUrl?: string;
  techList: string[];
  priority: number;
}

const WorkDisplay: React.FC<WorksDataItems> = ({ title, img, description, githubUrl, productionUrl, techList }) => {
  return (
    <div className="w-1/2">
      <div className="shadow-around hover:bg-gray-100 bg-white rounded-xl p-4 m-4">
        <Image src={img} alt={title} width={500} height={500} />
        <h3>{title}</h3>
        <p className="line-clamp-3">{description}</p>
        <p className="flex items-center">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 rounded flex items-center p-1 mr-2 my-1">
              <FaGithub className="text-xl inline mr-1" />
              リポジトリ
            </a>
          )}
          {productionUrl && (
            <a href={productionUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 rounded flex items-center p-1 mr-2 my-1">
              <CgWebsite className="text-xl inline mr-1" />
              公開ページ
            </a>
          )}
        </p>
        <p className="flex flex-wrap">
          {techList.map((tech) => (
            <a key={tech} href={`/works/?tag=${tech.replace(" ", "-")}`} className="text-nowrap text-blue-500 hover:bg-blue-200 mr-1 my-1 px-2 border border-blue-500 rounded-md">
              {tech}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
};

export { SectionComponent, OGPDisplay, WorkDisplay };
export type { WorksDataItems };
