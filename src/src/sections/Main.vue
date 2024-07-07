<template>
  <div id="main">

    <sectionContainer>
      <div id="about-container">
        <div class="about-icon">
          <img :src="myIcon" alt="icon" height="150" />
        </div>
        <div class="about-desc">
          <p>経済学部2年生のしゅ（Hashin2425）です。</p>
          <p>個人開発とか競プロとかをやっています。プログラミングそのものよりも、実用的なものを作ることに興味があります。</p>
        </div>
        <h2>SNS</h2>
        <div class="about-sns">
          <a v-for="s in sns" :key="s.name" :href="s.url" target="_blank" rel="noopener noreferrer">
            <span class="sns-button" :style="{ backgroundColor: s.color }">{{ s.name }}</span>
            <span class="sns-id">{{ s.id }}</span>
          </a>
        </div>
      </div>
    </sectionContainer>

    <sectionContainer>
      <div id="skills-container">
        <h1>Skills</h1>
        <h2>General</h2>
        <p></p>
        <table class="responsive-table">
          <tbody>
            <tr>
              <th>競プロ</th>
              <td>AtCoder 緑コーダー</td>
            </tr>
            <tr>
              <th>代表経験</th>
              <td><a href="https://applii-wu.net/pages/" target="_blank">ITものづくりプロジェクト「AppLii」</a>副代表 2年目</td>
            </tr>
            <tr>
              <th>保有資格</th>
              <td>なし<br>（応用情報技術者試験を勉強中）</td>
            </tr>
          </tbody>
        </table>
        <h2>Technologies</h2>
        <p></p>
        <table class="responsive-table">
          <tbody>
            <tr>
              <th>主な言語</th>
              <td>Python / JavaScript / C#</td>
            </tr>
            <tr>
              <th>フロントエンド</th>
              <td>Vue.js / Sass / HTML / CSS</td>
            </tr>
            <tr>
              <th>バックエンド</th>
              <td>FastAPI / Flask</td>
            </tr>
            <tr>
              <th>データ分析</th>
              <td>Jupyter Notebook / Scikit-Learn / Pandas</td>
            </tr>
            <tr>
              <th>ゲーム開発</th>
              <td>Unity</td>
            </tr>
            <tr>
              <th>OS</th>
              <td>Windows / Linux</td>
            </tr>
            <tr>
              <th>IaaS</th>
              <td>Azure VM</td>
            </tr>
            <tr>
              <th>PaaS / FaaS</th>
              <td>Azure App Service / Azure Functions</td>
            </tr>
            <tr>
              <th>SaaS</th>
              <td>Firebase Authentication / Google App Script</td>
            </tr>
            <tr>
              <th>CI/CD</th>
              <td>GitHub Actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </sectionContainer>

    <sectionContainer>
      <div id="works-container">
        <h1>Works</h1>
        <div class="parents">
          <div class="child">
          </div>
        </div>
        <CreativeCard></CreativeCard>
      </div>
    </sectionContainer>

    <sectionContainer>
      <div id="articles-container">
        <h1>Articles</h1>
        <p>Qiitaにて技術ブログを執筆しております。基本的な掲載内容は、対処に時間がかかった不具合とその対処方法です。</p>
        <a target="_blank" href="https://qiita.com/hashin2425/items/55ccc5e4b18455d1158d">
          【Python】デフォルト引数値は、関数実行時に計算されるわけではないので注意
        </a>
        <a target="_blank" href="https://qiita.com/hashin2425/items/0e6e0056035bc491a642">
          [Errno 3] Lookup timed outでCosmosDBに接続できない問題の解決方法【AppService】
        </a>
        <a target="_blank" href="https://qiita.com/hashin2425/items/dd337f8de0024d6bc354">
          [App Service] Flask Socket.ioでリアルタイム通信を安定化させる方法
        </a>
        <a target="_blank" href="https://qiita.com/hashin2425/items/b30dbed78d9323ce15fd">
          Azure Functionsでトリガーが認識されなくなったら、環境変数を確かめよう
        </a>
      </div>
    </sectionContainer>

    <sectionContainer>
      <div id="environment-container">
        <h1>Environments</h1>
        <p>メインのPCに加え、24時間365日稼働の計算リソースとしてRaspberry Pi 4を運用しています。毎日7時間程度かかる作業を自動化したり、NASとして運用したりしています。</p>
        <h2>Systems</h2>
        <p><a href="https://hashin.net/pi-infra-core/" target="_blank">自宅サーバー生存確認用Webサイト</a></p>
        <p><a href="https://github.com/hashin2425/pi-infra-core" target="_blank">自宅サーバーリポジトリ</a></p>
        <h2>Machines</h2>
        <p>Main: Windows 10 Home</p>
        <p>Server: Raspberry Pi 4 (Debian)</p>
        <p>IoT-System: Raspberry Pi Pico WH</p>
        <h2>Others</h2>
        <p>Cloud: Microsoft Azure</p>
        <p>Assistant: ChatGPT 4o / Claude 3.5 Sonnet / GitHub Copilot</p>
      </div>
    </sectionContainer>

  </div>
</template>

<script>
import CreativeCard from "./components/CreativeCard.vue";
import myIcon from "./assets/icon.png";
import sectionContainer from "./components/sectionContainer.vue";

export default {
  name: "Main-section",
  components: {
    CreativeCard,
    sectionContainer,
  },
  data() {
    return {
      myIcon,
      sns: [
        { name: "Twitter (X)", color: "#1DA1F2", url: "https://x.com/HashIn2425", id: "@HashIn2425" },
        { name: "GitHub", color: "#24292e", url: "https://github.com/hashin2425", id: "@hashin2425" },
        { name: "Qiita", color: "#55C500", url: "https://qiita.com/hashin2425", id: "@hashin2425" },
        { name: "AtCoder", color: "green", url: "https://atcoder.jp/users/HashIn2425", id: "@HashIn2425" },
      ],
    };
  },
};
</script>

<style>
#main {

  p {
    margin: 0;
    padding: 0.2rem 0;
  }

  h1 {
    font-size: 1.8rem;
    padding: 0 0 0.5rem 0;
    margin: 0;
  }

  h2 {
    font-size: 1.3rem;
    padding: 1.25rem 0 0.25rem 0;
    margin: 0;
  }

  h3 {
    font-size: 1.0rem;
    padding: 0;
    margin: 0;
  }
}

#about-container {
  .about-icon {
    img {
      border-radius: 25%;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    }
  }

  .about-sns {
    a {
      display: block;
      text-decoration: none;
    }

    a:hover {
      background-color: #ebebeb;
    }

    .sns-button {
      display: inline-block;
      height: 2rem;
      min-width: 5rem;
      padding: 0.2rem 1.0rem 0 1.0rem;
      margin: 0.25rem 0.5rem 0.25rem 0;
      border-radius: 0.75rem;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
      text-align: center;
      justify-content: center;
      color: white;
    }

    .sns-id {
      display: inline-block;
    }
  }
}

#articles-container {
  a {
    display: block;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    min-height: 2rem;
    color: #404040;
    background-color: white;
    text-decoration: none;
    align-content: center;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }

  a:hover {
    background-color: #f5f5f5;
  }
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  padding: 0;



  tr:nth-child(odd) {
    background-color: #f8f8f8;
  }

  th {
    width: 0%;
    min-width: 8rem;
    white-space: nowrap;
    padding: 0.4rem 0;
  }
}

@media screen and (max-width: 600px) {
  .responsive-table {

    th,
    td {
      display: block;
      text-align: left;
      padding: 0.2rem 0.5rem 0.1rem 0.5rem;
    }
  }

}
</style>
