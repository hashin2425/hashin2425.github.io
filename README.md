# hashin2425.github.io

## 技術スタックとか

- React (Next.js)
- GitHub Actions
- GitHub Pages

## 開発方法

### ホットリロードを起動する

実行：

- `cd src`
- `npm run dev`

### デプロイ

`main`ブランチにプッシュすると、自動でデプロイが始まる。

## メモ書き

`/docs` ディレクトリに `/docs` ディレクトリ内に `CNAME` ファイルを作成する必要があります。

詳細については、公式ドキュメントを参照してください：
[GitHub Pages サイトのカスタムドメインの設定](https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## アップデート

```sh
npx npm-check-updates -u
npm install
npm ci
npm run build
```
