"use client";

import React, { useState, useEffect, Suspense } from "react";
import { SectionComponent, OGPDisplay, WorkDisplay } from "../../components/Utils";
import WorksData from "../../components/WorksData";
import { useSearchParams } from "next/navigation";

// 技術カテゴリーの定義
const TECH_CATEGORIES: Record<string, readonly string[]> = {
  言語: ["Python", "Ruby", "JavaScript", "TypeScript", "C-Sharp"],
  Webフロント: ["React", "Next.js", "Vue.js", "Bootstrap", "HTML", "CSS", "Sass", "Tailwind CSS"],
  Webバックエンド: ["Node.js", "Express", "Ruby on Rails", "Flask", "FastAPI"],
  Azure: ["Azure Functions", "Azure SQL Database", "Azure Cosmos DB", "Azure App Service"],
  AWS: ["AWS Lambda", "AWS S3", "AWS RDS", "AWS Dynamo DB", "AWS API Gateway"],
  ミドルウェア: ["Docker", "Kubernetes", "Nginx", "Apache", "Redis"],
  その他: [],
};

// 技術をカテゴリーに分類する関数
const categorizeTech = (tech: string): string => {
  for (const [category, techs] of Object.entries(TECH_CATEGORIES)) {
    if (techs.includes(tech)) {
      return category;
    }
  }
  return "その他";
};

interface TechFilterProps {
  techs: string[];
  activeTechs: string[];
  onChange: (tech: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
}

const TechFilter: React.FC<TechFilterProps> = ({ techs, activeTechs, onChange, onSelectAll, onDeselectAll }) => {
  // 技術をカテゴリー別にグループ化
  const techsByCategory = Object.keys(TECH_CATEGORIES).reduce((acc, category) => {
    acc[category] = techs.filter(tech => categorizeTech(tech) === category);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="my-4">
      <table>
        <tbody>
          {Object.keys(TECH_CATEGORIES).map((category) => (
            techsByCategory[category]?.length > 0 && (
              <tr key={category} className="odd:bg-white">
                <th className="text-nowrap py-4 px-2 text-left">{category}</th>
                <td className="">
                  {techsByCategory[category].map((tech) => (
                    <label key={tech} className="inline-flex items-center mr-4">
                      <input type="checkbox" className="form-checkbox" checked={activeTechs.includes(tech)} onChange={() => onChange(tech)} />
                      <span className="ml-2">{tech}</span>
                    </label>
                  ))}
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
      <div className="my-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={onSelectAll}>
          全てオン
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={onDeselectAll}>
          全てオフ
        </button>
      </div>
    </div>
  );
};

function WorksPageContent() {
  const searchParams = useSearchParams();
  const allTechs = Array.from(new Set(WorksData.flatMap((work) => work.techList)));

  const [activeTechs, setActiveTechs] = useState(() => {
    if (searchParams.get("tag") === null) return allTechs;
    const tagParam = searchParams.get("tag")?.replaceAll("-", " ").replaceAll("%20", " ");
    if (tagParam && allTechs.includes(tagParam)) {
      return [tagParam];
    }
    return [];
  });
  const [filteredWorks, setFilteredWorks] = useState(WorksData);

  const handleTechChange = (tech: string) => {
    setActiveTechs((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]));
  };

  const handleSelectAll = () => {
    setActiveTechs(allTechs);
  };

  const handleDeselectAll = () => {
    setActiveTechs([]);
  };

  useEffect(() => {
    setFilteredWorks(WorksData.filter((work) => work.techList.some((tech) => activeTechs.includes(tech))));
  }, [activeTechs]);

  return (
    <>
      <SectionComponent h2text="">
        <h1>Works</h1>
        <p>このページでは、これまでに開発に携わったプロダクトを紹介しています。</p>
        <p>それぞれの作品をクリックすると、説明文がすべて表示されます。</p>
        <TechFilter techs={allTechs} activeTechs={activeTechs} onChange={handleTechChange} onSelectAll={handleSelectAll} onDeselectAll={handleDeselectAll} />
      </SectionComponent>

      <SectionComponent h2text="">
        <div className="flex flex-wrap justify-around">
          {WorksData.sort((a, b) => b.priority - a.priority).map((work) => (
            <WorkDisplay key={work.title} isShow={work.techList.some((tech) => activeTechs.includes(tech))} {...work} />
          ))}
        </div>
      </SectionComponent>
    </>
  );
}

export default function WorksPage() {
  return (
    <main>
      <Suspense>
        <WorksPageContent />
      </Suspense>
    </main>
  );
}
