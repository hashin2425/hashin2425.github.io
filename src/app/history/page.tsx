import React, { useMemo } from "react";
import { SectionComponent, OGPDisplay, WorkDisplay, SocialLinks, TechLinksGenerator, ArticleLinkGenerator } from "../../components/Utils";

const StatData: { [year: number]: { [month: number]: { commitCount: number; prCount: number; issueCount: number } } } = {
  2024: {
    12: { commitCount: 107, prCount: 5, issueCount: 2 },
    11: { commitCount: 97, prCount: 6, issueCount: 4 },
    10: { commitCount: 123, prCount: 11, issueCount: 8 },
    9: { commitCount: 206, prCount: 21, issueCount: 19 },
    8: { commitCount: 163, prCount: 27, issueCount: 21 },
    7: { commitCount: 188, prCount: 38, issueCount: 43 },
    6: { commitCount: 125, prCount: 32, issueCount: 0 },
    5: { commitCount: 187, prCount: 38, issueCount: 0 },
    4: { commitCount: 114, prCount: 36, issueCount: 0 },
    3: { commitCount: 179, prCount: 45, issueCount: 0 },
    2: { commitCount: 138, prCount: 32, issueCount: 0 },
    1: { commitCount: 141, prCount: 26, issueCount: 0 },
  },
  2023: {
    12: { commitCount: 192, prCount: 16, issueCount: 0 },
    11: { commitCount: 180, prCount: 31, issueCount: 4 },
    10: { commitCount: 74, prCount: 0, issueCount: 0 },
    9: { commitCount: 100, prCount: 11, issueCount: 0 },
    8: { commitCount: 94, prCount: 5, issueCount: 0 },
    7: { commitCount: 48, prCount: 0, issueCount: 0 },
    6: { commitCount: 63, prCount: 0, issueCount: 0 },
    5: { commitCount: 53, prCount: 0, issueCount: 0 },
    4: { commitCount: 101, prCount: 0, issueCount: 0 },
    3: { commitCount: 49, prCount: 0, issueCount: 0 },
    2: { commitCount: 45, prCount: 0, issueCount: 0 },
    1: { commitCount: 64, prCount: 0, issueCount: 0 },
  },
  2022: {
    12: { commitCount: 55, prCount: 0, issueCount: 0 },
    11: { commitCount: 88, prCount: 0, issueCount: 9 },
    10: { commitCount: 87, prCount: 0, issueCount: 2 },
    9: { commitCount: 53, prCount: 1, issueCount: 0 },
    8: { commitCount: 23, prCount: 0, issueCount: 0 },
    7: { commitCount: 0, prCount: 0, issueCount: 3 },
    6: { commitCount: 0, prCount: 0, issueCount: 4 },
    5: { commitCount: 8, prCount: 0, issueCount: 0 },
    4: { commitCount: 8, prCount: 0, issueCount: 0 },
    3: { commitCount: 25, prCount: 0, issueCount: 0 },
    2: { commitCount: 29, prCount: 0, issueCount: 0 },
    1: { commitCount: 35, prCount: 0, issueCount: 0 },
  },
  2021: {
    12: { commitCount: 30, prCount: 0, issueCount: 0 },
    11: { commitCount: 12, prCount: 0, issueCount: 0 },
    10: { commitCount: 57, prCount: 2, issueCount: 0 },
    9: { commitCount: 0, prCount: 0, issueCount: 0 },
    8: { commitCount: 0, prCount: 0, issueCount: 0 },
    7: { commitCount: 0, prCount: 0, issueCount: 0 },
    6: { commitCount: 0, prCount: 0, issueCount: 0 },
    5: { commitCount: 0, prCount: 0, issueCount: 0 },
    4: { commitCount: 0, prCount: 0, issueCount: 0 },
    3: { commitCount: 0, prCount: 0, issueCount: 0 },
    2: { commitCount: 0, prCount: 0, issueCount: 0 },
    1: { commitCount: 0, prCount: 0, issueCount: 0 },
  },
};

function ContributesGraphComponent({ year, month }: { year: number; month: number }) {
  const getMaxStatValue = () => {
    let maxStatValue = 0;
    for (const year in StatData) {
      for (const month in StatData[year]) {
        const { commitCount, prCount, issueCount } = StatData[year][month];
        const total = commitCount + prCount + issueCount;
        if (total > maxStatValue) {
          maxStatValue = total;
        }
      }
    }
    return maxStatValue;
  };
  const maxStatValue = getMaxStatValue();

  const calcWidth = (value: number) => {
    return Math.floor((value / maxStatValue) * 100);
  };

  const commitCount = StatData[year]?.[month]?.commitCount ?? 0;
  const prCount = StatData[year]?.[month]?.prCount ?? 0;
  const issueCount = StatData[year]?.[month]?.issueCount ?? 0;

  return (
    <div>
      <div>
        <span className="inline-block h-4 bg-green-600" style={{ width: `${calcWidth(commitCount)}%` }}></span>
        <span className="inline-block h-4 bg-blue-600" style={{ width: `${calcWidth(prCount)}%` }}></span>
        <span className="inline-block h-4 bg-red-600" style={{ width: `${calcWidth(issueCount)}%` }}></span>
      </div>
      <div>
        <span className="inline-block px-1 mr-2 rounded text-sm bg-green-300">Commits: {commitCount}</span>
        <span className="inline-block px-1 mr-2 rounded text-sm bg-blue-300">PullRequests: {prCount}</span>
        <span className="inline-block px-1 mr-2 rounded text-sm bg-red-300">Issues: {issueCount}</span>
      </div>
    </div>
  );
}

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
        <div>
          <ContributesGraphComponent year={year} month={month} />
        </div>
        {children}
      </div>
    </section>
  );
}

export default function HistoryPage() {
  return (
    <main>
      <p className="p-8">書きかけのページ</p>
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
    </main>
  );
}
