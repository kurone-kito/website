# website

# Structure

- comps - ページをまたぐ共通部品
  - footer.js - フッター
  - header.js - ヘッダーとナビゲーションバー
- pages - ページを作る、1 ページにつき 1 ファイル
  - contact.js - 連絡先
  - index.js - トップ
  - members.js - メンバー紹介
  - news.js - 記事
- static - 静的コンテンツとデータ
  - articles - マークダウン形式記事フォルダ
  - articles.json - articles フォルダ内で公開するファイル名リスト
  - favicon.ico
  - members.json - メンバーのデータ
  - vpn_logo.svg

## To debug

Run:

```
% yarn dev
```
