"use client";

import { SectionComponent } from "@/components/Utils";

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
        <div className="w-full h-20" style={{ backgroundColor: colorCode }}>
          <span className="text-3xl font-bold text-white p-2">{colorCode}</span>
          <span className="text-3xl font-bold text-black p-2">{colorCode}</span>
        </div>{" "}
        <div className="w-full h-20 bg-white">
          <span className="text-3xl font-bold p-2" style={{ color: colorCode }}>
            {colorCode}
          </span>
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
      <SectionComponent>
        <h2>自分用ページ</h2>
        <p>よく使うカラーパレットなどをまとめておく</p>
      </SectionComponent>

      <SectionComponent>
        <h3>カラーパレット</h3>
        <div className="flex flex-wrap">
          <ColorDisplay colorCode="#009999" />
          <ColorDisplay colorCode="#55b535" />
          <ColorDisplay colorCode="#ee7a00" />
          <ColorDisplay colorCode="#404040" />
          <ColorDisplay colorCode="#f2f2f2" />
          <ColorDisplay colorCode="" />
        </div>
      </SectionComponent>

      <SectionComponent>
        <h3>グラデーションパレット</h3>
        <div className="flex flex-wrap">
          {/* 行末にセミコロンを付けると、ページ読み込み時に正しく反映されないので付けない。 */}
          <BackgroundDisplay backgroundValue="linear-gradient(110.1deg, rgb(241, 115, 30) 18.9%, rgb(231, 29, 54) 90.7%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 37) 87.1%)" />
          <BackgroundDisplay backgroundValue="" />
          <BackgroundDisplay backgroundValue="radial-gradient(circle at 84.6% 77.8%, rgb(86, 89, 218) 0%, rgb(95, 208, 248) 90%)" />
          <BackgroundDisplay backgroundValue="linear-gradient(109.6deg, rgb(78, 62, 255) 11.2%, rgb(164, 69, 255) 91.1%)" />
          <BackgroundDisplay backgroundValue="" />
          <BackgroundDisplay backgroundValue="" />
        </div>
      </SectionComponent>

      <SectionComponent>
        <h3>フォント</h3>
        <p>よく使うフォント</p>
      </SectionComponent>
    </main>
  );
}
