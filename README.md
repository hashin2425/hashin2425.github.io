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

## パッケージのアップデート

```sh
# 現在のパッケージ状況を確認
npm outdated

npm install -g npm-check-updates

npx npm-check-updates
npx npm-check-updates -u

rm -rf node_modules package-lock.json
npm install

npm run dev
npm run build
npm run lint
```

### セキュリティ脆弱性の修正

```sh
# セキュリティ監査を実行
npm audit

# 脆弱性を自動修正
npm audit fix

# 強制的に修正（破壊的変更を含む可能性あり）
npm audit fix --force
```
