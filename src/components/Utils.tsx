"use client";

import React, { PropsWithChildren, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";

const SectionComponent: React.FC<PropsWithChildren & { h2text: string }> = ({ children, h2text }) => {
  return (
    <section className="py-6 px-6 odd:bg-gray-100 even:bg-white group" id={h2text}>
      <div className="max-w-[900px] mx-auto">
        <h2 className={"sticky top-8 group-odd:bg-gray-100 group-even:bg-white pb-0 z-[990]" + (h2text === "" ? " hidden" : "")}>{h2text}</h2>
        {children}
      </div>
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
  img?: StaticImageData;
  description: string;
  githubUrl?: string;
  productionUrl?: string;
  techList: string[];
  priority: number;
  isShow?: boolean;
  devStarted: string;
  devPeriod: string;
}

const WorkDisplay: React.FC<WorksDataItems> = ({ title, img, description, githubUrl, productionUrl, techList, isShow, devPeriod, devStarted }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (isShow === undefined) isShow = true;

  return (
    <div className={`w-full ${isShow ? "" : "hidden"}`}>
      <div className="shadow-around hover:bg-gray-100 bg-white rounded-xl p-4 m-4 sm:flex" onClick={toggleExpand}>
        <div className="sm:w-2/5">{img ? <Image src={img} alt={title} width={750} height={750} /> : <div className="w-full bg-gray-300" style={{ paddingBottom: "56.25%" }}></div>}</div>
        <div className="sm:w-3/5 sm:pl-4">
          <h3 className="sm:pt-0">{title}</h3>
          <p className="">
            <span className="text-sm">開始</span>
            <span className="px-2 underline">{devStarted}</span>
            <span className="text-sm">期間</span>
            <span className="px-2 underline">{devPeriod}</span>
          </p>
          <p className={isExpanded ? "my-2" : "my-2 line-clamp-2"}>{description}</p>
          <p className="flex items-center">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white gray-gradient rounded flex items-center p-1 mr-2 my-1">
                <FaGithub className="text-xl inline mr-1" />
                リポジトリ
              </a>
            )}
            {productionUrl && (
              <a href={productionUrl} target="_blank" rel="noopener noreferrer" className="text-white gray-gradient rounded flex items-center p-1 mr-2 my-1">
                <CgWebsite className="text-xl inline mr-1" />
                公開ページ
              </a>
            )}
          </p>
          <p className={"flex flex-wrap"}>
            {techList.map((tech) => (
              <Link key={tech} href={`/works/?tag=${tech.replaceAll(" ", "-")}`} className="inline-block text-nowrap text-sm text-blue-500 hover:bg-blue-200 mr-1 my-1 px-2 border border-blue-500 rounded-md">
                {tech}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export { SectionComponent, OGPDisplay, WorkDisplay };
export type { WorksDataItems };
