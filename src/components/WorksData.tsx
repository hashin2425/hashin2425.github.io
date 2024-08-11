import { WorksDataItems } from "../components/Utils";

import imgTest from "../images/ogp.png";
import workPortfolio from "../images/work-portfolio.png";
import workAppLiiHP from "../images/work-applii-hp.png";
import workCGPGame2023 from "../images/work-cgp-game23.png";
import workCafeApp from "../images/work-cafe-app.png";

const WorksData: WorksDataItems[] = [
  {
    title: "ゲーム「競え！初夏の夢祭り」",
    img: workCGPGame2023,
    description: "夏祭りの気分を味わえるゲーム「競え！初夏の夢祭り」の制作に参加しました。エフェクトやアニメーションを使って、視覚的なゲーム体験を高めるようにしました。チームでの制作です。",
    githubUrl: "https://github.com/hashin2425/CGP_team_2023_c",
    productionUrl: "https://unityroom.com/games/midsummer-festa",
    techList: ["Unity", "C#"],
    priority: 90,
  },
  {
    title: "「どうこむ」和大の食堂混雑度アプリ",
    img: workCafeApp,
    description: "大学内食堂の混雑状況がわかるアプリと計測システムを開発しました。食堂内で検出されたBluetoothデバイスの件数を混雑データとして活用しています。この計測機器はRaspberry Piで稼働しており、収集されたデータはクラウド上のシステム・アプリからクライアントへ配信されます。",
    productionUrl: "https://cafe.applii-wu.net/",
    techList: ["Flask", "Python", "Raspberry Pi", "App Service", "Azure", "MySQL"],
    priority: 95,
  },
  {
    title: "「AppLii」ホームページ",
    img: workAppLiiHP,
    description: "「ITものづくりプロジェクト AppLii」のホームページを制作しました。デザインからコーディングまで一貫して担当しました。Vue.jsで作成し、GitHub Pagesで公開しています。",
    githubUrl: "https://github.com/AppLii/AppLii.github.io",
    productionUrl: "https://applii-wu.net/",
    techList: ["Vue.js", "GitHub Pages"],
    priority: 85,
  },
  {
    title: "ソーラーカー監視ソフトウェア",
    img: imgTest,
    description: "",
    githubUrl: "",
    productionUrl: "",
    techList: ["Python", "JavaScript"],
    priority: 80,
  },
  {
    title: "ポートフォリオサイト",
    img: workPortfolio,
    description: "このサイトです。Reactで作成し、GitHub Pagesで公開しています。デザインはTailwind CSSを使用しています。",
    githubUrl: "https://hashin.net/",
    productionUrl: "https://hashin2425.github.io/",
    techList: ["React", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    priority: 80,
  },
];

export default WorksData;
