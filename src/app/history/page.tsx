import React, { useMemo } from "react";
import { SectionComponent, OGPDisplay, WorkDisplay, SocialLinks, TechLinksGenerator, ArticleLinkGenerator } from "../../components/Utils";
import ContributionsGraph from "../../components/ContributionsGraph";

function YearSectionComponent({ year, children }: { year: number; children: React.ReactNode }) {
  return (
    <section className="py-6 px-6 odd:bg-gray-100 even:bg-white group" id={"y" + year.toString()}>
      <div className="max-w-[900px] mx-auto">
        <h2 className={"sticky top-8 pb-0 z-[991]"}>{year.toString() + "年"}</h2>
        {children}
      </div>
    </section>
  );
}

function MonthSectionComponent({ year, month, children }: { year: number; month: number; children?: React.ReactNode }) {
  return (
    <section className="" id={"m" + month.toString()}>
      <div className="">
        <h2 className={"sticky top-8 group-odd:bg-gray-100 group-even:bg-white pb-0 z-[990] pl-24"}>{month.toString() + "月"}</h2>
        {children}
      </div>
    </section>
  );
}

export default function HistoryPage() {
  return (
    <main>
      <SectionComponent h2text="Contributions">
        <ContributionsGraph />
      </SectionComponent>
      <div className="hidden">
        <YearSectionComponent year={2025}>
          <MonthSectionComponent year={2025} month={1}></MonthSectionComponent>
        </YearSectionComponent>
        <YearSectionComponent year={2024}>
          <MonthSectionComponent year={2024} month={12}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={11}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={10}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={9}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={8}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={7}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={6}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={5}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={4}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={3}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={2}></MonthSectionComponent>
          <MonthSectionComponent year={2024} month={1}></MonthSectionComponent>
        </YearSectionComponent>
        <YearSectionComponent year={2023}>
          <MonthSectionComponent year={2023} month={12}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={11}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={10}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={9}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={8}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={7}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={6}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={5}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={4}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={3}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={2}></MonthSectionComponent>
          <MonthSectionComponent year={2023} month={1}></MonthSectionComponent>
        </YearSectionComponent>
        <YearSectionComponent year={2022}>
          <MonthSectionComponent year={2022} month={12}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={11}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={10}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={9}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={8}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={7}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={6}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={5}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={4}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={3}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={2}></MonthSectionComponent>
          <MonthSectionComponent year={2022} month={1}></MonthSectionComponent>
        </YearSectionComponent>
        <YearSectionComponent year={2021}>
          <MonthSectionComponent year={2021} month={12}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={11}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={10}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={9}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={8}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={7}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={6}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={5}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={4}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={3}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={2}></MonthSectionComponent>
          <MonthSectionComponent year={2021} month={1}></MonthSectionComponent>
        </YearSectionComponent>
      </div>
    </main>
  );
}
