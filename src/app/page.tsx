import Image from "next/image";
import ProfilePicture from "../images/profile.png";
import React, { PropsWithChildren } from "react";
import { SectionComponent, OGPDisplay, WorkDisplay } from "../components/Utils";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { SiQiita } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";
import WorksData from "../components/WorksData";
import Link from "next/link";

const SocialLinks = () => {
  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/hashin2425", color: "text-gray-800" },
    { name: "Twitter", icon: FaTwitter, url: "https://x.com/HashIn2425", color: "text-blue-400" },
    { name: "Qiita", icon: SiQiita, url: "https://qiita.com/hashin2425", color: "text-green-500" },
  ];

  return (
    <div className="flex space-x-6 my-1">
      {socialLinks.map((link) => (
        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`${link.color} hover:opacity-80 transition-opacity duration-300 flex justify-center content-center`}>
          {link.icon && <link.icon className="text-4xl" />}
          <span className="sr-only">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

function TechLinksGenerator({ techListText }: PropsWithChildren<{ techListText: string }>) {
  const techList = techListText.split(",");
  return (
    <div className="flex flex-wrap">
      {techList.map((tech) => (
        <Link key={tech} href={`/works/?tag=${tech.replaceAll(" ", "-")}`} className="whitespace-nowrap text-blue-500 hover:bg-blue-200 m-1 px-2 border border-blue-500 rounded-md">
          {tech}
        </Link>
      ))}
    </div>
  );
}

function ArticleLinkGenerator({ articleLink, articleTitle }: PropsWithChildren<{ articleLink: string; articleTitle: string }>) {
  return (
    <li>
      <a className="block shadow-around hover:bg-gray-100 bg-white rounded-xl p-2 m-4" href={articleLink} target="_blank" rel="noopener noreferrer">
        <IoIosDocument className="inline-block text-2xl align-middle" />
        {articleTitle}
      </a>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      <SectionComponent h2text="About me">
        <div className="flex flex-col md:flex-row py-4">
          <div className="mb-4 md:mb-0">
            <Image className="rounded-lg shadow-lg border-4 border-white" src={ProfilePicture} alt="hashin profile" width={240} height={240} />
          </div>
          <div className="md:pl-8">
            <p>しゅ（hashin）です。</p>
            <p>Webアプリを中心に、さまざまな開発に取り組んでいます。技術を追求することよりも、人の役に立つことを目標としています。</p>
            <p>アイコンは那智の滝と三重塔です。</p>
            <h3>SNS</h3>
            <SocialLinks />
          </div>
        </div>
      </SectionComponent>

      <SectionComponent h2text="Skills">
        <h3>色々</h3>
        <table className="responsive-table">
          <tbody>
            <tr>
              <th>競プロ</th>
              <td>AtCoder 緑コーダー</td>
            </tr>
            <tr>
              <th>保有資格</th>
              <td>なし（応用情報技術者を勉強中）</td>
            </tr>
          </tbody>
        </table>
        <h3>技術スタック</h3>
        <p>それぞれの技術をクリックすると、その技術で開発したプロダクトを閲覧できます。</p>
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
                <TechLinksGenerator techListText="Firebase Auth,Google App Script" />
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
                <TechLinksGenerator techListText="Linux,Raspberry Pi,Docker,Redis" />
              </td>
            </tr>
          </tbody>
        </table>
      </SectionComponent>

      <SectionComponent h2text="Works">
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
        <p>和歌山大学クリエ「ITものづくりプロジェクト AppLii」を立ち上げ・副代表2年目</p>
        <OGPDisplay pageLink="https://applii-wu.net" imageLink="https://github.com/AppLii/AppLii.github.io/blob/release/docs/applii_ogp.png?raw=true" pageName="クリエ「ITものづくりプロジェクト AppLii」" pageDescription="ソフトウェア開発やプログラミング勉強会が主な活動内容です。和歌山大学のクリエ（学生主導のプロジェクト）であり、さまざまな支援を受けながら活動しています。" pageShortURL="applii-wu.net" />
        <h3>実務経験</h3>
        <p>詳細は履歴書などを参照いただくか、直接お尋ねください。</p>
        {/* インターンの種別は、グループワーク型、実務型、セミナー型の3種類 */}
        <ul className="list-disc list-inside mt-2">
          <li>2024年09月：実務型インターンシップ（2週間 / フロントエンドの実装など）</li>
        </ul>
      </SectionComponent>

      <SectionComponent h2text="Interests">
        <h3>興味のあるキーワード</h3>
        <p>UI/UX設計、プログレッシブウェブアプリ（PWA）、サーバーレスアーキテクチャ、行動経済学、フィンテック、マーケティング</p>
        <h3>興味のある技術（いずれ勉強したいやつ）</h3>
        <p>PHP、Go、Docker、ユーザー認証系</p>
      </SectionComponent>

      <SectionComponent h2text="Articles">
        <p>たまに、Qiitaに記事を投稿しています。普段の開発での困りごと（解決に時間がかかった不具合）などを記録しています。</p>
        <ul>
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/55ccc5e4b18455d1158d" articleTitle="【Python】デフォルト引数値は、関数実行時に計算されるわけではないので注意" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/0e6e0056035bc491a642" articleTitle="[Errno 3] Lookup timed outでCosmosDBに接続できない問題の解決方法【AppService】" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/dd337f8de0024d6bc354" articleTitle="[App Service] Flask Socket.ioでリアルタイム通信を安定化させる方法" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/b30dbed78d9323ce15fd" articleTitle="Azure Functionsでトリガーが認識されなくなったら、環境変数を確かめよう" />
          <ArticleLinkGenerator articleLink="https://qiita.com/hashin2425/items/b77186fad78e10304c8b" articleTitle="[App Service] Python環境でrequirements.txt通りにインストールされない不具合の解決方法" />
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
        <p>Cloud: Microsoft Azure / Amazon Web Service / さくらインターネット</p>
        <p>Assistant: ChatGPT / Claude / GitHub Copilot</p>
      </SectionComponent>
    </main>
  );
}
