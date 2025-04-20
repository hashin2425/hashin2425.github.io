import Image from "next/image";
import ProfilePicture from "../images/profile.png";
import React from "react";
import { SectionComponent, OGPDisplay, WorkDisplay, SocialLinks, TechLinksGenerator, ArticleLinkGenerator } from "../components/Utils";
import WorksData from "../components/WorksData";
import Link from "next/link";
import ContributionsGraph from "@/components/ContributionsGraph";

export default function Home() {
  return (
    <main>
      <SectionComponent h2text="About me">
        <div className="flex flex-col md:flex-row py-4">
          <div className="mb-4 md:mb-0">
            <Image className="rounded-lg shadow-lg border-4 border-white" src={ProfilePicture} alt="hashin profile" width={240} height={240} />
          </div>
          <div className="md:pl-8">
            <p>hashinです。</p>
            <p>Webアプリを中心に、さまざまな開発に取り組んでいます。技術を追求することよりも、人の役に立つことを目標としています。</p>
            <p>アイコンは那智の滝と三重塔です。</p>
            <h3>各種リンク</h3>
            <SocialLinks />
          </div>
        </div>
      </SectionComponent>

      <SectionComponent h2text="Skills">
        <table className="responsive-table">
          <tbody>
            <tr>
              <th>競プロ</th>
              <td>
                <p>AtCoder 緑コーダー（Algorithm: レート900, 2024年7月6日）</p>
                <p>
                  <Link href={"https://atcoder.jp/users/HashIn2425"}>
                    <span className="text-blue-500 underline">ID: HashIn2425</span>
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <th>保有資格</th>
              <td>なし（応用情報技術者を勉強中）</td>
            </tr>
          </tbody>
        </table>

        <div className="border-l-4 border-purple-500 my-2">
          <h3 className="bg-purple-100 pl-2">技術スタック（実務経験あり）</h3>
          <p className="pl-2">それぞれの技術をクリックすると、その技術で開発したプロダクトを閲覧できます。</p>
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>プログラミング言語</th>
                <td>
                  <TechLinksGenerator techListText="JavaScript,TypeScript,Ruby" />
                </td>
              </tr>
              <tr>
                <th>フロントエンド</th>
                <td>
                  <TechLinksGenerator techListText="React,Tailwind CSS" />
                </td>
              </tr>
              <tr>
                <th>サーバーサイド</th>
                <td>
                  <TechLinksGenerator techListText="Node.js,Ruby on Rails" />
                </td>
              </tr>
              <tr>
                <th>クラウド</th>
                <td>
                  <TechLinksGenerator techListText="AWS Lambda" />
                </td>
              </tr>
              <tr>
                <th>その他</th>
                <td>
                  <TechLinksGenerator techListText="Docker" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-l-4 border-green-400 my-2">
          <h3 className="bg-green-100 pl-2">技術スタック（個人開発にて使用）</h3>
          <p className="pl-2">それぞれの技術をクリックすると、その技術で開発したプロダクトを閲覧できます。</p>
          <table className="responsive-table">
            <tbody>
              <tr>
                <th>プログラミング言語</th>
                <td>
                  <TechLinksGenerator techListText="Python,JavaScript,TypeScript,C Sharp,Ruby" />
                </td>
              </tr>
              <tr>
                <th>フロントエンド</th>
                <td>
                  <TechLinksGenerator techListText="Vue.js,React,Tailwind CSS,Sass" />
                </td>
              </tr>
              <tr>
                <th>サーバーサイド</th>
                <td>
                  <TechLinksGenerator techListText="FastAPI,Flask,Node.js,Ruby on Rails" />
                </td>
              </tr>
              <tr>
                <th>デスクトップアプリ</th>
                <td>
                  <TechLinksGenerator techListText="Windows Form App" />
                </td>
              </tr>
              <tr>
                <th>モバイルアプリ</th>
                <td>なし</td>
              </tr>
              <tr>
                <th>データ分析</th>
                <td>
                  <TechLinksGenerator techListText="Jupyter Notebook,Pandas" />
                </td>
              </tr>
              <tr>
                <th>ゲーム開発</th>
                <td>
                  <TechLinksGenerator techListText="Unity" />
                </td>
              </tr>
              <tr>
                <th>クラウド（Azure）</th>
                <td>
                  <TechLinksGenerator techListText="Azure App Service,Azure Functions,Azure Cosmos DB,Azure SQL Database" />
                </td>
              </tr>
              <tr>
                <th>クラウド（AWS）</th>
                <td>
                  <TechLinksGenerator techListText="AWS Lambda,AWS API Gateway,AWS Dynamo DB" />
                </td>
              </tr>
              <tr>
                <th>クラウド（その他）</th>
                <td>
                  <TechLinksGenerator techListText="Cloudflare,Firebase Auth,Google App Script,さくらのVPS" />
                </td>
              </tr>
              <tr>
                <th>CI/CD</th>
                <td>
                  <TechLinksGenerator techListText="GitHub Actions" />
                </td>
              </tr>
              <tr>
                <th>その他</th>
                <td>
                  <TechLinksGenerator techListText="Linux,Raspberry Pi,Docker,Redis,Nginx" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionComponent>

      <SectionComponent h2text="Works">
        <p>過去に開発したプロジェクトを紹介しています。</p>
        <div className="flex flex-nowrap relative">
          <div className="overflow-x-auto">
            {WorksData.sort((a, b) => b.priority - a.priority)
              .slice(0, 2) // Priorityが高いものを2つ表示
              .map((work) => (
                <WorkDisplay key={work.title} {...work} isShow={true} />
              ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
        </div>
        <Link href={"/works"}>
          <div className="text-center rounded-xl gray-gradient text-white p-4 my-4 shadow-xl">すべての作品を見る</div>
        </Link>
      </SectionComponent>

      <SectionComponent h2text="Experiences">
        <h3>団体経験</h3>
        <p>和歌山大学クリエ「ITものづくりプロジェクト AppLii」を2023年6月に立ち上げました。</p>
        <p>副代表として2年目も活動を継続しています。団体メンバー向けプログラミング講習会の企画・実施や、大学内利用者を対象としたアプリケーション開発をリードしました。</p>
        <OGPDisplay pageLink="https://applii-wu.net" imageLink="https://github.com/AppLii/AppLii.github.io/blob/release/docs/applii_ogp.png?raw=true" pageName="クリエ「ITものづくりプロジェクト AppLii」" pageDescription="ソフトウェア開発やプログラミング勉強会が主な活動内容です。和歌山大学のクリエ（学生主導のプロジェクト）であり、さまざまな支援を受けながら活動しています。" pageShortURL="applii-wu.net" />
        <h3 className="pt-8">受賞経験</h3>
        <p>詳細は履歴書などを参照いただくか、直接お尋ねください。</p>
        <ul className="list-disc list-inside mt-2"></ul>
        <h3 className="pt-8">実務経験</h3>
        <p>詳細は履歴書などを参照いただくか、直接お尋ねください。</p>
        {/* インターンの種別は、グループワーク型、実務型、セミナー型の3種類 */}
        <ul className="list-disc list-inside mt-2">
          <li>2024年09月：実務型インターンシップ（6ヶ月 / フロントエンドの実装など / Ruby on Rails）</li>
        </ul>
      </SectionComponent>

      <SectionComponent h2text="Contributions">
        <p>あらゆる開発プロジェクトに取り組んでおり、ほぼ毎日なにかしらのコードを書いています。</p>
        <ContributionsGraph />
      </SectionComponent>

      <SectionComponent h2text="Interests">
        <h3>興味のあるキーワード</h3>
        <p>UI/UX設計、CI/CD、サーバーレスアーキテクチャ、行動経済学、会計、フィンテック、プログレッシブウェブアプリ（PWA）</p>
        <h3>興味のある技術（いずれ勉強したいやつ）</h3>
        <p>PHP、Go、ユーザー認証系</p>
        <h3>勉強用リポジトリ</h3>
        <p>実装練習や勉強用に使っているリポジトリの一覧です。</p>
        <ul>
          <li className="list-disc list-inside">
            全般：
            <Link className="text-blue-500 underline" href={"https://github.com/hashin2425/samples-and-practices"}>
              hashin2425/samples-and-practices
            </Link>
          </li>
          <li className="list-disc list-inside">
            CI/CD：
            <Link className="text-blue-500 underline" href={"https://github.com/hashin2425/better-deploy-sample"}>
              hashin2425/better-deploy-sample
            </Link>
          </li>
        </ul>
      </SectionComponent>

      <SectionComponent h2text="Articles">
        <p>Qiitaに技術記事を投稿しています。</p>
        <p>主に、普段の開発での困りごと（解決に時間がかかった不具合）などを記録しています。</p>
        <ul className="pt-4 overflow-y-auto max-h-96">
          <li>2025年</li>
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/d038e0d3de61e51ee3e0" postedAt="2025-01-10" articleTitle="実はGitHub Copilotに前提情報を渡すことができる (.github/copilot-instructions.md)" />
          <li>2024年（6本）</li>
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/a2287f77d417faa5b2bc" postedAt="2024-12-26" articleTitle="【Python】Webアプリ開発におけるタイムゾーンの扱い方・注意点（datetime / zoneinfo）" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/21ffe5bfd3cd1fbfd64d" postedAt="2024-12-23" articleTitle="【オススメしない】Microsoft Azureでドメインを買うと、どんな感じ？ (App Service ドメイン)" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/8ea73327cf29a12510ec" postedAt="2024-10-21" articleTitle="PythonでGPT-4o-miniをサクッと使ってみた [Azure OpenAI]" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/b77186fad78e10304c8b" postedAt="2024-09-27" articleTitle="[App Service] Python環境でrequirements.txt通りにインストールされない不具合の解決方法" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/55ccc5e4b18455d1158d" postedAt="2024-03-14" articleTitle="【Python】デフォルト引数値は、関数実行時に計算されるわけではないので注意" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/0e6e0056035bc491a642" postedAt="2024-02-24" articleTitle="[Errno 3] Lookup timed outでCosmosDBに接続できない問題の解決方法【AppService】" />
          <li>2023年（2本）</li>
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/dd337f8de0024d6bc354" postedAt="2023-12-06" articleTitle="[App Service] Flask Socket.ioでリアルタイム通信を安定化させる方法" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/b30dbed78d9323ce15fd" postedAt="2023-11-23" articleTitle="Azure Functionsでトリガーが認識されなくなったら、環境変数を確かめよう" />
          <li>2022年（0本）</li>
          <li className="p-6">None</li>
        </ul>
      </SectionComponent>

      <SectionComponent h2text="Environments">
        <p>メインのPCに加え、24時間365日稼働の計算リソースとしてRaspberry Pi 4を運用しています。毎日7時間程度かかる作業を自動化したり、NASとして運用したりしています。</p>
        <h3>Systems</h3>
        <p>
          <a href="https://hashin.net/pi-infra-core/" target="_blank" className="underline">
            自宅サーバー生存確認用Webサイト
          </a>
        </p>
        <p>
          <a href="https://github.com/hashin2425/pi-infra-core" target="_blank" className="underline">
            自宅サーバーリポジトリ
          </a>
        </p>
        <h3>Machines</h3>
        <p>Main: Windows 10 Home</p>
        <p>Server: Raspberry Pi 4 (Linux PiOS)</p>
        <p>IoT: Raspberry Pi Pico WH</p>
        <h3>Others</h3>
        <p>Cloud: Microsoft Azure / Amazon Web Service / さくらのVPS</p>
        <p>Assistant: ChatGPT / Claude / GitHub Copilot</p>
      </SectionComponent>
    </main>
  );
}
