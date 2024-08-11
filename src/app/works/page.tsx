import React, { PropsWithChildren } from "react";
import { SectionComponent, OGPDisplay, WorkDisplay } from "../../components/Utils";
import WorksData from "../../components/WorksData";

export default function WorksPage() {
  return (
    <main>
      <SectionComponent>
        <h1>Works</h1>
      </SectionComponent>

      <SectionComponent>
        <div className="flex flex-wrap justify-around">
          {WorksData.sort((a, b) => b.priority - a.priority).map((work) => (
            <WorkDisplay key={work.title} {...work} />
          ))}
        </div>
      </SectionComponent>
    </main>
  );
}
