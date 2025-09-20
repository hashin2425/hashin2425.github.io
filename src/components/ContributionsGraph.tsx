"use client";

import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

type StatDataType = {
  [year: number]: {
    [month: number]: {
      commitCount: number;
      prCount: number;
      issueCount: number;
    };
  };
};

const StatData: { [year: number]: { [month: number]: { commitCount: number; prCount: number; issueCount: number } } } = {
  2025: {
    9: { commitCount: 63 + 73, prCount: 5, issueCount: 0 },
    8: { commitCount: 48 + 2, prCount: 1, issueCount: 0 },
    7: { commitCount: 92, prCount: 5, issueCount: 0 },
    6: { commitCount: 171, prCount: 7, issueCount: 0 },
    5: { commitCount: 94, prCount: 3, issueCount: 0 },
    4: { commitCount: 109, prCount: 6, issueCount: 2 },
    3: { commitCount: 93, prCount: 2, issueCount: 0 },
    2: { commitCount: 112, prCount: 7, issueCount: 2 },
    1: { commitCount: 95, prCount: 8, issueCount: 11 },
  },
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

type TabType = "monthly" | "annual";

const ContributionsGraph: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("monthly");

  // 月次データの変換
  const monthlyData = Object.entries(StatData).flatMap(([year, months]) =>
    Object.entries(months).map(([month, stats]) => ({
      date: `${year}/${month}`,
      commits: stats.commitCount,
      pullRequests: stats.prCount,
      issues: stats.issueCount,
    }))
  );

  // 年次データの集計
  const yearlyData = Object.entries(StatData).map(([year, months]) => {
    const yearStats = Object.values(months).reduce(
      (acc, stats) => ({
        commits: acc.commits + stats.commitCount,
        pullRequests: acc.pullRequests + stats.prCount,
        issues: acc.issues + stats.issueCount,
      }),
      { commits: 0, pullRequests: 0, issues: 0 }
    );

    return {
      date: year,
      commits: yearStats.commits,
      pullRequests: yearStats.pullRequests,
      issues: yearStats.issues,
    };
  });

  const tabStyle = (isActive: boolean) => `
    px-4 py-2 text-sm font-medium 
    ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300"}
    cursor-pointer
    transition-colors
  `;

  return (
    <div className="w-full">
      {/* タブバー */}
      <div className="mb-4 border-b border-gray-200">
        <div className="flex space-x-4">
          <button className={tabStyle(activeTab === "monthly")} onClick={() => setActiveTab("monthly")}>
            月間
          </button>
          <button className={tabStyle(activeTab === "annual")} onClick={() => setActiveTab("annual")}>
            年間
          </button>
        </div>
      </div>

      {/* グラフ表示エリア */}
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activeTab === "monthly" ? monthlyData : yearlyData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              angle={0}
              textAnchor="middle"
              height={60}
              tickFormatter={(value) => {
                if (activeTab === "monthly") {
                  const [year, month] = value.split("/");
                  return [1, 7].includes(parseInt(month)) ? `${year}/0${month}` : "";
                }
                return value;
              }}
              interval={activeTab === "monthly" ? 0 : undefined}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="commits" stackId="a" fill="#4ade80" name="Commits" />
            <Bar dataKey="pullRequests" stackId="a" fill="#60a5fa" name="Pull Requests" />
            <Bar dataKey="issues" stackId="a" fill="#f87171" name="Issues" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContributionsGraph;
