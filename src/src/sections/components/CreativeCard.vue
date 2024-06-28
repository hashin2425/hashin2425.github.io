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
                <th>技術</th>
                <td>
                  <div>
                    <span class="project-technologies" v-for="technology in project.technologies" :key="technology">
                      {{ technology }}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>リンク</th>
                <td>
                  <a v-if="project.codeLink" :href="project.codeLink" target="_blank"
                    class="link-github">GitHubリポジトリ</a>
                  <a v-if="project.websiteLink" :href="project.websiteLink" target="_blank"
                    class="link-artifact">ウェブサイト</a>
                </td>
              </tr>
              <tr>
                <th>期間</th>
                <td>{{ project.period }}</td>
              </tr>
              <tr>
                <th>開発体制</th>
                <td>{{ project.team }}</td>
              </tr>
              <tr v-if="project.whyDid">
                <th>きっかけ</th>
                <td>{{ project.whyDid }}</td>
              </tr>
              <tr v-if="project.description">
                <th>説明</th>
                <td>{{ project.description }}</td>
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
          name: "ゲーム「競え！初夏の夢祭り」",
          period: "2023年8～10月",
          team: "チーム開発。デザイナーやサウンドクリエイターを含む8名で、私はプログラマーとして参加しました。",
          about: "夏祭りの気分を味わえるゲーム「競え！初夏の夢祭り」の作成に参加しました。",
          appealPoint: "エフェクトやアニメーションを使って、視覚的なゲーム体験を高めました。",
          technologies: ["Unity", "C#"],
          codeLink: "https://github.com/hashin2425/CGP_team_2023_c",
          websiteLink: "https://unityroom.com/games/midsummer-festa",
        }, {
          name: "どうこむ｜和大の食堂混雑度アプリ",
          period: "2023年5月～(継続)",
          team: "チーム開発。エンジニア2名チームで、私はサーバーサイド・フロントエンドで開発に取り組みました。",
          about: "大学内食堂の混雑状況がわかるアプリと計測システムを開発しました。",
          description: "食堂内で検出されたBluetoothデバイスの件数を混雑データとして活用しています。この計測機器はRaspberry Piで稼働しており、収集されたデータはクラウド上のシステム・アプリから学生へ配信されます。",
          technologies: ["Python", "JavaScript", "Azure Cosmos DB", "Azure App Service", "Azure Functions", "FastAPI", "Flask", "Vue.js", "socket.io", "GitHub Actions", "Saas", "Linux", "Raspberry Pi", "SQLite"],
          websiteLink: "https://cafe.applii-wu.net/",
        }, {
          name: "AppLiiホームページ",
          period: "2024年1月",
          team: "個人開発",
          about: "「ITものづくりプロジェクトAppLii」のホームページを作成しました。",
          description: "和歌山大学のITエンジニアコミュニティ「ITものづくりプロジェクト AppLii」のWebサイトを制作しました。WebデザインからSEO対策まで取り組みました。",
          technologies: ["Vue.js", "Nuxt.js", "GitHub Actions", "Saas"],
          codeLink: "https://github.com/AppLii/AppLii.github.io",
          websiteLink: "https://applii-wu.net/",
        }, {
          name: "ソーラーカー監視ソフトウェア",
          period: "2023年4～6月",
          team: "個人開発",
          about: "ソーラーカーに搭載されたセンサー類を監視するためのGUIアプリケーション",
          description: "和歌山大学ソーラーカープロジェクトにおいて、ソーラーカーに搭載されたセンサー類を監視するためのGUIアプリケーションを作成しました。メンバーにヒアリングを行いながら要件定義し、リリースまで行いました。",
          technologies: ["Python", "eel-Python", "Chart.js",],
          codeLink: "https://github.com/hashin2425/SolarCarSensorMonitor",
        }, {
          name: "ポートフォリオサイト(このサイト)",
          period: "2023年10月",
          team: "個人開発",
          about: "ポートフォリオサイトをVue.jsによって作成しました。",
          description: "プルから公開までをGitHub Actionsで自動化しています。",
          technologies: ["Vue.js", "GitHub Actions"],
          codeLink: "https://github.com/hashin2425/hashin2425",
          websiteLink: "https://hashin.net/",
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
.search {
  display: flex;
  align-items: baseline;
  justify-content: left;
  flex-wrap: wrap;

  .search-tech {
    display: inline-block;
    white-space: nowrap;
    border-radius: 0.4rem;
    margin: 0.2rem 0.2rem;
    padding: 0 0.4rem;
    font-size: 1rem;
    user-select: none;
    border: #0ba360 0.1rem solid;
    box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.4);
    }

    &.technology-selected {
      background-image: linear-gradient(45deg, #0ba360 0%, #3cba92 100%);
      color: white;
    }

    &.technology-not-selected {
      background-color: white;
      color: #0ba360;
    }
  }
}

.projects {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 50vh;

  div:not(:last-child) {
    margin-bottom: 2rem;
  }

  .project-card {
    display: block;
    width: 100%;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.3);
    user-select: none;

    .table-box {
      padding: 0.4rem;
      margin: 1rem;

      table {
        border-collapse: collapse;
        width: 100%;

        tr {
          border-bottom: solid 1px rgba(32, 32, 32, 0.5);
          padding: 10.2rem 0;

          &:last-child {
            border-bottom: none;
          }
        }

        th {
          text-align: center;
          width: 4.5rem;
          padding: 0.3rem;
        }

        @media screen and (max-width: 600px) {

          th,
          td {
            width: 100%;
            text-align: left;
            display: block;
          }
        }

        .project-name {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .project-technologies {
          display: inline-block;
          margin: 0.2rem 0.2rem;
          padding: 0rem 0.4rem;
          border-radius: 0.4rem;
          color: white;
          background-image: linear-gradient(45deg, #0ba360 0%, #3cba92 100%);
          box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
        }

        .link-github,
        .link-artifact {
          display: inline-block;
          text-decoration: none;
          white-space: nowrap;
          margin: 0.2rem;
          padding: 0.1rem 0.5rem;
          color: white;
          border-radius: 0.4rem;
          box-shadow: 0 0 0.75rem 0 rgba(0, 0, 0, 0.2);
        }

        .link-github {
          background-color: #24292e;
        }

        .link-artifact {
          background: linear-gradient(45deg, rgb(10, 30, 190), rgb(60, 10, 200));
        }
      }
    }
  }
}

.image-box {
  max-width: 15rem;
  max-height: 15rem;
  min-width: 10rem;
  min-height: 10rem;

  img {
    width: 100%;
    height: 100%;
  }
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