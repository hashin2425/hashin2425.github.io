<!-- ProjectCard.vue -->
<template>
  <div class="search">
    <span>絞り込み：</span>
    <span v-for=" technology in uniqueTechnologies" :key="technology">
      <span v-if="selectedTechnologies.includes(technology)" class="search-tech technology-selected shadow-box"
        @click="selectTechnology(technology, true)">
        {{ technology }}
      </span>
      <span v-if="!selectedTechnologies.includes(technology)" class="search-tech technology-not-selected shadow-box"
        @click="selectTechnology(technology, false)">
        {{ technology }}
      </span>
    </span>
  </div>
  <div class="projects">
    <div v-for="project in projects" :key="project.name">
      <div v-if="hasCommonItem(selectedTechnologies, project.technologies) || selectedTechnologies.length === 0"
        class="project-card">
        <div class="table-box">
          <table>
            <thead>
              <tr>
                <td colspan="2">
                  <div class="project-name"> {{ project.name }} </div>
                  <div> {{ project.about }} </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>期間</th>
                <td>{{ project.period }}</td>
              </tr>
              <tr>
                <th>開発体制</th>
                <td>{{ project.team }}</td>
              </tr>
              <tr>
                <th>開発言語・技術</th>
                <td>
                  <div>
                    <span class="project-technologies" v-for="technology in project.technologies" :key="technology">
                      {{ technology }}
                    </span>
                  </div>
                  <div>{{ project.description }}</div>
                </td>
              </tr>
              <tr v-if="project.codeLink">
                <th>リンク</th>
                <td><a :href="project.codeLink" target="_blank">GitHubリポジトリ</a></td>
              </tr>
              <tr v-if="project.whyDid">
                <th>きっかけ</th>
                <td>{{ project.whyDid }}</td>
              </tr>
              <tr v-if="project.appealPoint">
                <th>アピールポイント</th>
                <td>{{ project.appealPoint }}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconDocument from '../assets/document.png';

export default {
  data() {
    return {
      iconDocument,
      selectedTechnologies: [],
      projects: [
        {
          name: "ポートフォリオサイト(このサイト)",
          period: "2023年10月",
          team: "個人開発",
          about: "ポートフォリオサイトをVue.jsによって作成しました。",
          description: "GitHub Pagesを用いることによって静的Webサイトを公開しています。Vue.jsファイルからビルドする作業はローカルで行わず、GitHub Actionsを用いて、自動的に行うように設定しています。具体的には、リポジトリのmainブランチにコードがプルされたときに自動的にビルドが開始し、GitHub Pagesへのデプロイまでを行うように設定しています。",
          technologies: ["Vue.js", "GitHub Actions"],
          codeLink: "https://github.com/hashin2425/hashin2425",
          whyDid: "GitHub ActionsによるCI/CDを勉強したかったので",
        }, {
          name: "ゲーム「競え！初夏の夢祭り」",
          period: "2023年8月から10月",
          team: "デザイナ・サウンドクリエイタを含む8名チームで、私はプログラマとして参加しました。",
          about: "夏祭りの気分を味わえるゲーム「競え！初夏の夢祭り」の作成に参加しました。",
          technologies: ["Unity", "C#"],
          codeLink: "https://github.com/hashin2425/CGP_team_2023_c",
        }, {
          name: "学生食堂の混雑度状況がわかるアプリ",
          period: "2023年5月から(継続)",
          team: "エンジニア2名チームで、私はバックエンド・フロントエンドでの開発に取り組みました。",
          about: "                 ",
          technologies: ["Python", "JavaScript", "MySQL", "Node.js", "Express.js", "Redis", "Docker", "サーバー構築", "FastAPI", "Linux",],
          codeLink: "https://github.com/hashin2425/dockerWebAppTemperate",
        }, {
          name: "ソーラーカー監視ソフトウェア",
          period: "2023年4月から6月",
          team: "個人開発",
          about: "ソーラーカーに搭載されたセンサー類を監視するためのGUIアプリケーション",
          technologies: ["Python", "eel-Python", "Chart.js",],
          codeLink: "https://github.com/hashin2425/SolarCarSensorMonitor",
        },
      ],
    };
  },
  computed: {
    uniqueTechnologies() {
      const allTechnologies = this.projects.reduce((acc, project) => {
        return acc.concat(project.technologies);
      }, []);
      return [...new Set(allTechnologies)].sort();
    },
  },
  methods: {
    selectTechnology: function (technology, isRemove) {
      if (isRemove) {
        const index = this.selectedTechnologies.indexOf(technology);
        if (index > -1) {
          this.selectedTechnologies.splice(index, 1);
        }
      } else {
        this.selectedTechnologies.push(technology);
      }
    },
    hasCommonItem: function (arr1, arr2) {
      const set1 = new Set(arr1);

      for (let item of arr2) {
        if (set1.has(item)) {
          return true;
        }
      }
      return false;
    }
  },
};
</script>

<style scoped>
.projects {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 50vh;
}

.project-card {
  display: block;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.4);
  user-select: none;
  background-color: white;
}


th {
  text-align: left;
  white-space: nowrap;
}

.image-box {
  max-width: 15rem;
  max-height: 15rem;
  min-width: 10rem;
  min-height: 10rem;
}

img {
  width: 100%;
  height: 100%;
}

.table-box {
  padding: 0.4rem;
  margin: 1rem;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr {
  border-bottom: solid 1px rgba(32, 32, 32, 0.5);
  padding: 10.2rem 0;
}

th {
  width: 8rem;
  padding: 0.3rem;
}

@media screen and (max-width: 600px) {

  th,
  td {
    display: block;
  }
}

.project-name {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.project-technologies {
  display: inline-block;
  background-image: linear-gradient(45deg, #0ba360 0%, #3cba92 100%);
  margin: 0.2rem 0.2rem;
  padding: 0rem 0.4rem;
  color: white;
  border-radius: 0.4rem;
}

.search {
  display: flex;
  align-items: baseline;
  justify-content: left;
  flex-wrap: wrap;
}

.search-tech {
  display: inline-block;
  white-space: nowrap;
  border-radius: 0.4rem;
  margin: 0.2rem 0.2rem;
  padding: 0 0.4rem;
  font-size: 1rem;
  user-select: none;
  border: #0ba360 0.1rem solid;
}

.technology-selected {
  background-image: linear-gradient(45deg, #0ba360 0%, #3cba92 100%);

  color: white;
}

.technology-not-selected {
  background-color: white;
  color: #0ba360;
}
</style>

<!--
  概要
  作業期間
  チーム・個人
  開発言語・技術
  参考URL
  きっかけ
  アピールポイント
-->