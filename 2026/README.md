# AIニケフェス 2026

AIニケちゃんDiscordサーバー1周年を記念した、2026年版AIニケフェス特設サイトです。

- 公開URL: https://fes2026.nikechan.com/
- ホスティング: Cloudflare Workers
- Worker名: `ai-nike-fest-2026`
- 構成: Vinext / React / TypeScript

## 開発

```bash
npm install
npm run dev
```

## 確認

```bash
npm run build
```

## 公開

Cloudflareへログイン済みの環境で実行します。

```bash
npm run deploy
```

このフォルダは2026年版だけで完結しており、他年度との共通コンポーネントや共通モジュールは持ちません。
