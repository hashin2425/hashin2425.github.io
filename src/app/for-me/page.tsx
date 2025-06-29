"use client";

import { SectionComponent } from "@/components/Utils";
import { useEffect, useState } from "react";
import { Noto_Sans_JP, Noto_Serif_JP, Zen_Kaku_Gothic_New } from "next/font/google";

const sampleText = '"Hello, world"は、プログラミング入門で最初に学ぶ典型的な例文で、新しい言語や環境での基本的な出力操作を確認するために使われます。プログラミング文化に深く根付いた簡単なフレーズです。';
const Noto_Sans_JP_400 = Noto_Sans_JP({ weight: ["400"], subsets: ["latin"] });
const Noto_Serif_JP_400 = Noto_Serif_JP({ weight: ["400"], subsets: ["latin"] });
const Zen_Kaku_Gothic_New_400 = Zen_Kaku_Gothic_New({ weight: ["400"], subsets: ["latin"] });

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = () => {
    setShowInstallButton(false);
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
    });
  };

  if (!showInstallButton) {
    return null;
  }

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleInstallClick}>
        アプリをインストール
      </button>
    </div>
  );
};

function clipboardWrite(text: string) {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("クリップボードにコピーしました");
    },
    (err) => {
      console.error("クリップボードへのコピーに失敗しました", err);
    }
  );
}

function ColorDisplay({ colorCode }: { colorCode: string }) {
  return (
    <div className="w-1/2">
      <div className="shadow-xl m-4 bg-white" onClick={() => clipboardWrite(colorCode)}>
        <div className="w-full" style={{ backgroundColor: colorCode }}>
          <div className="text-3xl font-bold text-black p-2">{colorCode}</div>
          <div className="text-3xl font-bold text-white p-2">{colorCode}</div>
        </div>
        <div className="w-full bg-white">
          <div className="text-3xl font-bold p-2" style={{ color: colorCode }}>
            {colorCode}
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundDisplay({ backgroundValue }: { backgroundValue: string }) {
  return (
    <div className="w-1/2">
      <div className="shadow-xl m-4" onClick={() => clipboardWrite(backgroundValue)}>
        <div className="w-full h-20 bg-white text-white p-2" style={{ background: backgroundValue }}>
          {"background: " + backgroundValue}
        </div>
      </div>
    </div>
  );
}

export default function ForMePage() {
  return (
    <main>
      <SectionComponent h2text="">
        <h2>自分用ページ</h2>
        <p>よく使うカラーパレットなどをまとめておく</p>
      </SectionComponent>

      <SectionComponent h2text="PWAインストール">
        <PWAInstallPrompt />
      </SectionComponent>

      <SectionComponent h2text="リンク集">
        <ul className="underline list-disc list-inside">
          <li>
            <a href="https://hashin.net/pi-infra-core/v2" target="">
              /pi-infra-core/v2
            </a>
          </li>
          <li>
            <a href="/coding-interview" target="">
              /coding-interview
            </a>
          </li>
        </ul>
      </SectionComponent>

      <SectionComponent h2text="カラーパレット">
        <div className="flex flex-wrap">
          <ColorDisplay colorCode="#009999" />
          <ColorDisplay colorCode="#55b535" />
          <ColorDisplay colorCode="#ee7a00" />
          <ColorDisplay colorCode="#404040" />
          <ColorDisplay colorCode="#f2f2f2" />
          <ColorDisplay colorCode="#f8f8f8" />
        </div>
      </SectionComponent>

      <SectionComponent h2text="グラデーションパレット">
        <div className="flex flex-wrap">
          {/* 行末にセミコロンを付けると、ページ読み込み時に正しく反映されないので付けない。 */}
          <BackgroundDisplay backgroundValue="linear-gradient(108.4deg, rgb(253, 44, 56) 3.3%, rgb(176, 2, 12) 98.4%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(110.1deg, rgb(241, 115, 30) 18.9%, rgb(231, 29, 54) 90.7%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(135deg, rgb(255, 168, 168) 10%, rgb(252, 255, 0) 100%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)" />
          <BackgroundDisplay backgroundValue="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)" />
          <BackgroundDisplay backgroundValue="radial-gradient(circle at -0.8% 4.3%, rgb(59, 176, 255) 0%, rgb(76, 222, 250) 83.6%)" />
          <BackgroundDisplay backgroundValue="radial-gradient(circle at 10% 20%, rgb(67, 144, 233) 0%, rgb(78, 226, 198) 90.1%)" />
          <BackgroundDisplay backgroundValue="radial-gradient(circle at 84.6% 77.8%, rgb(86, 89, 218) 0%, rgb(95, 208, 248) 90%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(109.6deg, rgb(78, 62, 255) 11.2%, rgb(164, 69, 255) 91.1%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(107deg, rgb(13, 198, 180) 8.1%, rgb(33, 198, 138) 79.5%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 37) 87.1%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(60deg, #29323c 0%, #485563 100%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)" />
        </div>
      </SectionComponent>

      <SectionComponent h2text="よく使うフォント">
        <a className="underline" href="https://fonts.google.com/?sort=popularity&subset=japanese&script=Hira">
          Google Fontsで探す
        </a>
        <div className="py-2 text-xl">
          <div className={Noto_Sans_JP_400.className}>Noto_Sans_JP_400 {sampleText}</div>
          <div className={Noto_Serif_JP_400.className}>Noto_Serif_JP_400 {sampleText}</div>
          <div className={Zen_Kaku_Gothic_New_400.className}>Zen_Kaku_Gothic_New_400 {sampleText}</div>
        </div>
      </SectionComponent>
    </main>
  );
}
