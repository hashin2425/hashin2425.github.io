import { WorksDataItems } from "../components/Utils";

import imgTest from "../images/ogp.png";
import workPortfolio from "../images/work-portfolio.png";
import workAppLiiHP from "../images/work-applii-hp.png";
import workCGPGame2023 from "../images/work-cgp-game23.png";
import workCafeApp from "../images/work-cafe-app.png";
import workFindFreeClassroom from "../images/work-find-free-classroom.png";
import workPiInfraCore from "../images/work-pi-infra-core.png";
import workSolarCarMonitor from "../images/work-solar-car-monitor.png";
import workLightWriter from "../images/work-light-writer.png";
import workExplorerHP from "../images/work-explorers-hp.png";
import workExplorersBackend from "../images/work-explorers-backend.png";

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
    img: workSolarCarMonitor,
    description: "和歌山大学ソーラーカープロジェクトで開発したソフトウェア。ソーラーカーから送られてきたセンサー値をグラフ化するためのツールです。",
    githubUrl: "https://github.com/hashin2425/SolarCarSensorMonitor",
    productionUrl: "https://github.com/hashin2425/SolarCarSensorMonitor/releases",
    techList: ["Python", "JavaScript"],
    priority: 0,
  },
  {
    title: "ポートフォリオサイト",
    img: workPortfolio,
    description: "このサイトです。Reactで作成し、GitHub Pagesで公開しています。デザインはTailwind CSSを使用しています。",
    githubUrl: "https://hashin.net/",
    productionUrl: "https://hashin2425.github.io/",
    techList: ["React", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    priority: 0,
  },
  {
    title: "和大の空き教室検索システム",
    img: workFindFreeClassroom,
    description: "シラバスに基づいて、空き教室を検索できるシステムを開発しました。学生大会で「空き教室を周知して欲しい」という要望が挙げられていたことをきっかけに、プログレッシブウェブアプリ(PWA) として制作しました。",
    githubUrl: "https://github.com/AppLii/find-free-classroom",
    productionUrl: "https://applii-wu.net/find-free-classroom/",
    techList: ["TypeScript", "React", "Sass", "GitHub Actions"],
    priority: 0,
  },
  {
    title: "light-writer",
    img: workLightWriter,
    description: "文字数指定のあるミニレポートを取り組むためのツール。ちょうど良いソフトが無かったので、自作しました。最低限の文字数カウント機能が付いています。",
    githubUrl: "https://github.com/hashin2425/light-writer",
    productionUrl: "https://github.com/hashin2425/light-writer/releases",
    techList: ["C#", "Windows Form App"],
    priority: 0,
  },
  {
    title: "自宅サーバー監視システム",
    img: workPiInfraCore,
    description: "自宅サーバー（Raspberry Pi）の監視システム。クラウド（Azure）上にシステムを構築しており、サーバーの状態やタスクの実行状況を監視しています。",
    githubUrl: "https://github.com/hashin2425/pi-infra-core",
    productionUrl: "https://hashin.net/pi-infra-core/",
    techList: [],
    priority: 0,
  },
  {
    title: "「エクスプロラーズ」ホームページ",
    img: workExplorerHP,
    description: "スマホアプリ「エクスプロラーズ」のホームページを制作しました。Bootstrapを使いましたが、それ以外のフレームワークは使っていません。",
    githubUrl: "https://github.com/prokonjo-team/prokonjo-team.github.io",
    productionUrl: "https://prokonjo.com/",
    techList: ["Bootstrap"],
    priority: 0,
  },
  {
    title: "「エクスプローラーズ」サーバーサイド",
    img: workExplorersBackend,
    description: "スマホアプリ「エクスプロラーズ」のバックエンドシステムを開発しました。ユーザー管理やプレイ記録の保存などを行います。サーバーレスアーキテクチャで構築しました。",
    techList: ["Azure Functions", "Azure Cosmos DB", "Azure SQL Database"],
    priority: 0,
  },
];

export default WorksData;
