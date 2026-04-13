# 無限クーポン LP（mugen-coupon-lp）

Next.js（App Router）+ TypeScript + Tailwind CSS v3 の業種別ランディングページです。10業種の LP を同じ構成で表示します。

---

## 起動の仕方（開発サーバー）

1. **このプロジェクトのフォルダを開く**（Cursor / VS Code の「フォルダーを開く」）  
   例: `…\移行用まとめフォルダー\mugen-coupon-lp`

2. **ターミナルを開く**（`` Ctrl+` `` など）。

3. **プロジェクト直下にいることを確認**し、初回のみ依存関係を入れてから開発サーバーを起動します。

   ```bash
   cd "C:\Users\PC user\OneDrive\Desktop\移行用まとめフォルダー\mugen-coupon-lp"
   npm install
   npm run dev
   ```

4. ターミナルに `Ready` と表示され、`Local: http://localhost:3000`（または表示された URL）が出れば起動成功です。

**注意**

- すでに別のターミナルで `next dev` が動いていると、ポートやロックで失敗することがあります。その場合は先にそちらを止める（`Ctrl+C`）か、`.next` フォルダを削除してから再度 `npm run dev` してください。
- `npm run dev` は **必ず `mugen-coupon-lp` フォルダ内**で実行してください。親フォルダで実行すると `Missing script: "dev"` になります。

---

## 開き方（ブラウザで見る）

1. ブラウザ（Chrome / Edge など）を開く。
2. アドレスバーに次を入力して Enter します。

   ```text
   http://localhost:3000
   ```

3. **トップ（業種一覧）** が表示されます。各カードから各 LP に進めます。

### 業種別 LP の URL（直接開く場合）

開発サーバー起動中に、次のどれかをアドレスバーに入力しても同じです（ポートが 3000 の場合）。

| ページ | URL |
|--------|-----|
| トップ（一覧） | http://localhost:3000/ |
| 美容室 | http://localhost:3000/beauty-salon |
| ネイルサロン | http://localhost:3000/nail-salon |
| 整体院 | http://localhost:3000/seitai |
| エステサロン | http://localhost:3000/esthe-salon |
| 歯科医院 | http://localhost:3000/dental |
| フィットネスジム | http://localhost:3000/fitness-gym |
| ペットサロン | http://localhost:3000/pet-salon |
| 学習塾・教室 | http://localhost:3000/school |
| 自動車整備 | http://localhost:3000/car-service |
| カフェ・ベーカリー | http://localhost:3000/cafe-bakery |

ターミナルに `Network: http://192.168.x.x:3000` のように表示されている場合は、同じ PC なら `localhost:3000` で問題ありません。スマホから試すときは表示された Network URL を使います。

---

## 開発コマンド一覧

```bash
npm install    # 初回・package.json 変更後
npm run dev    # 開発サーバー（ホットリロード）
npm run build  # 本番用ビルド
npm start      # 本番ビルド後の起動（別ターミナルで build 済みのとき）
npm run lint   # ESLint
```

Windows などで Turbopack が不安定な場合に備え、`dev` / `build` は **`--webpack`** 付き（Webpack モード）です。

---

## 本番ビルド

```bash
npm run build
npm start
```

---

## 環境変数（任意）

OGP の絶対 URL を揃える場合:

```env
NEXT_PUBLIC_SITE_URL=https://あなたのドメイン
```

## OGP 画像

`public/images/og-default.png`（推奨 1200×630px）を配置してください。未配置だと SNS プレビューで画像が欠ける場合があります。

---

## Vercel デプロイ

GitHub に push し、[Vercel](https://vercel.com) でリポジトリをインポートしてデプロイします。

---

## プレースホルダー

- 各 CTA・note 購入リンクは、必要に応じて `#` や実 URL に差し替えてください。
