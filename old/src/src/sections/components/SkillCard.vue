<!-- SkillCard.vue -->
<template>
  <div class="skill-card shadow-box">
    <table>
      <thead>
        <tr>
          <td class="nowrap-this"></td>
          <td class="nowrap-this">技術</td>
          <td class="nowrap-this">開発歴</td>
          <td class="nowrap-this">レベル</td>
          <td class="nowrap-this">概要</td>
        </tr>
      </thead>
      <tbody v-for="skill in skills" :key="skill.name">
        <tr v-for="(skill_contents, index) in skill.contents" :key="skill_contents.name">
          <th class="nowrap-this" v-if="index === 0" :rowspan="skill.contents.length">{{ skill.section }}</th>
          <td class="nowrap-this" style="background-color: rgb(235, 235, 235);">{{ skill_contents.name }}</td>
          <td class="nowrap-this">{{ skill_contents.years }}年目</td>
          <td class="nowrap-this">
            <LvIcon :level="skill_contents.level"></LvIcon>
          </td>
          <td>{{ skill_contents.message }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LvIcon from './LvIcon.vue';

export default {
  name: "SkillCard",
  components: {
    LvIcon,
  },
  data() {
    return [
      {
        section: "プログラミング言語",
        contents: [
          { name: "Python", years: calculateAge(2021, 9), level: 3, message: "もっとも頻繁に使っている言語だと思います。簡単な処理やアプリ開発、競技プログラミング(AtCoder)など、さまざまな場面で利用しています。" },
          { name: "JavaScript", years: calculateAge(2020, 5), level: 2, message: "Node.jsによるバックエンドやブラウザの拡張機能を開発するときに利用しています。" },
          { name: "C#", years: calculateAge(2020, 1), level: 2, message: "Unityでのゲーム開発や.NET Framework開発などに利用しています。" }
        ]
      }, {
        section: "フレームワークなど",
        contents: [
          { name: "Node.js", years: calculateAge(2023, 6), level: 1, message: "" },
          { name: "Vue.js", years: calculateAge(2023, 6), level: 2, message: "このページもVue.jsで作成しています。" },
          { name: "Scikit-learn", years: calculateAge(2022, 1), level: 2, message: "" },
        ]
      }, {
        section: "開発環境",
        contents: [
          { name: "Unity", years: calculateAge(2021, 1), level: 2, message: "" },
        ]
      }, {
        section: "コンテナ技術",
        contents: [
          { name: "Docker", years: calculateAge(2023, 7), level: 1, message: "" },
        ]
      }, {
        section: "データベース",
        contents: [
          { name: "MySQL", years: calculateAge(2023, 7), level: 1, message: "" },
          { name: "SQLite3", years: calculateAge(2021, 9), level: 2, message: "" },
        ]
      }, {
        section: "オペレーションシステム",
        contents: [
          { name: "Windows", years: calculateAge(2014, 8), level: 3, message: "XPの頃から、ほぼ毎日使っています。" },
          { name: "Debian/Linux", years: calculateAge(2021, 9), level: 2, message: "" },
        ]
      }, {
        section: "マイコン",
        contents: [
          { name: "Arduino", years: calculateAge(2021, 6), level: 2, message: "" },
        ]
      }, {
        section: "CI/CD",
        contents: [
          { name: "GitHub Actions", years: calculateAge(2023, 9), level: 1, message: "Webフロントエンドでのビルド・テストを自動化するために勉強しています。" },
        ]
      },
    ],
}
};
</script>

<style scoped>
.skill-card {
  background-color: white;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0;
}

table {
  border-collapse: collapse;
  min-width: 800px;
}

th,
td {
  padding: 0.2rem 0.8rem;
  border: rgba(32, 32, 32, 0.25) 1px solid;
  vertical-align: top;
  justify-content: left;
  text-align: left;
}

.nowrap-this {
  white-space: nowrap;
}
</style>
