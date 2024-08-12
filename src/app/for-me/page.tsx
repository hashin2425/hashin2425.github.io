import { SectionComponent } from "@/components/Utils";

export default function ForMePage() {
  return (
    <main>
      <SectionComponent>
        <h2>自分用ページ</h2>
        <p>よく使うカラーパレットなどをまとめておく</p>
      </SectionComponent>

      <SectionComponent>
        <h3>カラーパレット</h3>
        <p>よく使うカラーパレット</p>
      </SectionComponent>

      <SectionComponent>
        <h3>フォント</h3>
        <p>よく使うフォント</p>
      </SectionComponent>
    </main>
  );
}
