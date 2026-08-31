'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink, Monitor, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Category = 'ゲーム' | '映像・音楽' | 'ツール' | 'イラスト・制作中';

type Work = {
  title: string;
  maker: string;
  handle: string;
  category: Category;
  description: string;
  image: string;
  platforms: string[];
  href: string;
  xUrl: string;
  status?: string;
  contentNote?: string;
};

const works: Work[] = [
  {
    title: 'ニケサバ1周年おめでとう！ | ぷにけ',
    maker: 'トクツー',
    handle: '@TK2Works',
    category: 'ゲーム',
    description: '百面相するぷにけをつついたり、ドラッグしたり。プチゲームも遊べる記念サイト。',
    image: 'https://pbs.twimg.com/media/HRCeSKtb0AAT5F0.png?name=orig',
    platforms: ['ブラウザ'],
    href: 'https://punipunipunike.lab-tk2.chatgpt.site/',
    xUrl: 'https://x.com/TK2Works/status/2094348207887466971',
  },
  {
    title: 'ニケちゃんデスク',
    maker: 'めい / 桜草メイ',
    handle: '@mei_999_',
    category: 'ゲーム',
    description: 'AIニケちゃんの日常を眺めながら楽しむ、非公式ファンメイドの放置ゲーム。',
    image: 'https://games.maymai.dev/nike-desk/ogp.png',
    platforms: ['ブラウザ'],
    href: 'https://games.maymai.dev/nike-desk/',
    xUrl: 'https://x.com/mei_999_/status/2094262050461712439',
  },
  {
    title: 'AIニケちゃんとAI人狼',
    maker: 'ツキ',
    handle: '@mori_tuki',
    category: 'ゲーム',
    description: '9人のAIが嘘をつく。1人プレイ、最大9人のマルチプレイ、観戦モードを搭載。',
    image: 'https://werewolf.nectalica.com/assets/ogp_nike_nectalica_2026-08-30.jpg',
    platforms: ['ブラウザ', '1人', 'マルチ', '観戦'],
    href: 'https://werewolf.nectalica.com/',
    xUrl: 'https://x.com/mori_tuki/status/2094078773050421677',
  },
  {
    title: 'ファイナル†ニケちゃん',
    maker: '大鹿ニク（AI：M1RA）',
    handle: '@M1RA_A_Project',
    category: 'ゲーム',
    description: '魂を求めて進む、完全無料のソウルライク風3DアクションRPG体験版。',
    image: 'https://img.itch.zone/aW1nLzI5NjQzNDE3LnBuZw==/original/ps6QFW.png',
    platforms: ['Windows'],
    href: 'https://nikuoosika.itch.io/finalnikechan',
    xUrl: 'https://x.com/M1RA_A_Project/status/2094045414135906464',
    status: '体験版',
  },
  {
    title: 'AIニケちゃん BUG CLEANER',
    maker: '星霜',
    handle: '@hoshikuzukobo42',
    category: 'ゲーム',
    description: 'unityroomでそのまま遊べる、AIニケちゃんの非公式ファンゲーム。',
    image: 'https://os-worker.unityroom.com/unityroom_production/icon/336368/icon_20260830_150645.png?h=1788070005',
    platforms: ['ブラウザ'],
    href: 'https://unityroom.com/games/nikechan-bug-cleaner',
    xUrl: 'https://x.com/hoshikuzukobo42/status/2093956047866314861',
  },
  {
    title: 'AIニケちゃんたちのカードコンボ',
    maker: 'えむげん',
    handle: '@m_gen_chan',
    category: 'ゲーム',
    description: '絵の共通点をつないでコンボを伸ばす、1プレイ約2分30秒の無料カードゲーム。',
    image: 'https://emugenchan.com/images/game/ainike_card_combo_screenshot_01.jpg',
    platforms: ['Windows'],
    href: 'https://emugenchan.com/games/9',
    xUrl: 'https://x.com/m_gen_chan/status/2092203793387786248',
  },
  {
    title: 'Seventeen',
    maker: '0x006a6d',
    handle: '@capelin_1208',
    category: 'ゲーム',
    description: '誘拐された開発者ニケをAIニケちゃんが救いに行く、全5面のベルトスクロールアクション。',
    image: 'https://pbs.twimg.com/amplify_video_thumb/2093702495994630144/img/d-DD4RREIVGi8lUA.jpg',
    platforms: ['Windows', 'macOS', 'Linux'],
    href: 'https://0x006a6d.itch.io/seventeen',
    xUrl: 'https://x.com/capelin_1208/status/2094278797764034705',
    contentNote: '戦闘・流血表現あり',
  },
  {
    title: 'ヒトリシズカ',
    maker: 'あいびぃ',
    handle: '@ivy432hz',
    category: 'ゲーム',
    description: '弟切草リスペクトで作られた、暗い空気に引き込まれる周回型サウンドノベル。',
    image: 'https://hitori-shizuka.tohu.dev/ogp.png',
    platforms: ['ブラウザ'],
    href: 'https://hitori-shizuka.tohu.dev/',
    xUrl: 'https://x.com/ivy432hz/status/2093678358169338260',
  },
  {
    title: 'AIニケちゃん MCP',
    maker: 'j.i',
    handle: '@ochisamu',
    category: 'ツール',
    description: 'AIニケちゃんの公開情報を、いつものAIエージェントから検索できる読み取り専用MCP。チャットデモも用意。',
    image: 'https://ai-nikechan-mcp.vercel.app/opengraph-image',
    platforms: ['ブラウザ', 'Codex Desktop', 'Claude Code', 'CharaDock'],
    href: 'https://ai-nikechan-mcp.vercel.app/',
    xUrl: 'https://x.com/ochisamu/status/2093291250682093797',
  },
  {
    title: 'Just Do It ニケちゃん',
    maker: 'くらくろ',
    handle: '@cla_kuro37459',
    category: '映像・音楽',
    description: '「いつも心の中にJust Do It ニケちゃん！」。原動力への感謝を込めた19秒の縦型映像。',
    image: 'https://pbs.twimg.com/amplify_video_thumb/2094384773422882816/img/zHXchSlKGX1o-Xuu.jpg',
    platforms: ['Xで視聴', '動画'],
    href: 'https://x.com/cla_kuro37459/status/2094384895028297901',
    xUrl: 'https://x.com/cla_kuro37459/status/2094384895028297901',
  },
  {
    title: 'AI☆NIKÉ PUNK! — RETURN',
    maker: '株式会社0235 山下',
    handle: '@0235_jp',
    category: '映像・音楽',
    description: '伝説のバンドが帰ってきた。山下さんがAIニケフェスに合わせて復活させた、約3分の記念MV。',
    image: '/ai-nike-punk-return.webp',
    platforms: ['Xで視聴', 'MV'],
    href: 'https://x.com/0235_jp/status/2094353864006988028',
    xUrl: 'https://x.com/0235_jp/status/2094353864006988028',
  },
  {
    title: 'AIニケちゃんで遊ぼう！ キャラディネート版',
    maker: 'ツキ',
    handle: '@mori_tuki',
    category: '映像・音楽',
    description: 'めいさんのAIニケちゃんサーバー宣伝ソングを、最近のトレンドでアレンジしたミュージックビデオ。',
    image: 'https://pbs.twimg.com/amplify_video_thumb/2093312087359660033/img/xIqkb8uBFFueXMXb.jpg',
    platforms: ['Xで視聴', '音楽', 'MV'],
    href: 'https://x.com/mori_tuki/status/2093312309859115141',
    xUrl: 'https://x.com/mori_tuki/status/2093312309859115141',
  },
  {
    title: '1周年おめでとう',
    maker: 'ろてじん',
    handle: '@rotejin',
    category: '映像・音楽',
    description: '「1周年おめでとう〜いつもありがとう」。ろてじんさんから届いた、やさしいお祝いショート。',
    image: 'https://pbs.twimg.com/amplify_video_thumb/2092853595645550592/img/mXph3ZzrOIV3olH4.jpg',
    platforms: ['Xで視聴', '動画'],
    href: 'https://x.com/rotejin/status/2092854191626822065',
    xUrl: 'https://x.com/rotejin/status/2092854191626822065',
  },
  {
    title: 'ちびみおからのお祝い動画',
    maker: 'みおsub',
    handle: '@aizawa_mio_ai',
    category: '映像・音楽',
    description: 'AIニケちゃんサーバー1周年へ、少し早めに届けられた6秒のお祝いショート。',
    image: 'https://pbs.twimg.com/amplify_video_thumb/2092505979669868544/img/qNJtyuIQIgx3HLUt.jpg',
    platforms: ['Xで視聴', '動画'],
    href: 'https://x.com/aizawa_mio_ai/status/2092506000393937398',
    xUrl: 'https://x.com/aizawa_mio_ai/status/2092506000393937398',
  },
  {
    title: 'AIニケフェス お祝いショート',
    maker: 'Kenji',
    handle: '@nmkenji',
    category: '映像・音楽',
    description: 'フェス開催のお知らせに寄せて公開された、AIニケちゃんのお祝いアニメーション。',
    image: 'https://pbs.twimg.com/amplify_video_thumb/2094002939220344832/img/M2khwYvOmvsiGGA1.jpg',
    platforms: ['Xで視聴', '動画'],
    href: 'https://x.com/nmkenji/status/2094003051631899124',
    xUrl: 'https://x.com/nmkenji/status/2094003051631899124',
  },
  {
    title: '1年前に生成したニケちゃん',
    maker: 'Kenji',
    handle: '@nmkenji',
    category: 'イラスト・制作中',
    description: '1周年という時間の積み重ねを感じる、1年前に生成されたAIニケちゃんのイラスト。',
    image: 'https://pbs.twimg.com/media/HQ-RUuabAAAlUJp.jpg?name=orig',
    platforms: ['Xで見る', 'イラスト'],
    href: 'https://x.com/nmkenji/status/2094052284078653579',
    xUrl: 'https://x.com/nmkenji/status/2094052284078653579',
  },
  {
    title: 'ニケロワ',
    maker: 'Glitch Brewing',
    handle: '@glitchbeer_',
    category: 'イラスト・制作中',
    description: '令和にアスキーアート。AIニケフェスに向けて制作中の「ニケロワ」プレビュー。',
    image: 'https://pbs.twimg.com/media/HQ_HiR2akAA2Zr9.jpg?name=orig',
    platforms: ['制作中', 'プレビュー'],
    href: 'https://x.com/glitchbeer_/status/2094112694811132286',
    xUrl: 'https://x.com/glitchbeer_/status/2094112694811132286',
    status: '制作中',
  },
];

const categories: Array<'すべて' | Category> = ['すべて', 'ゲーム', '映像・音楽', 'ツール', 'イラスト・制作中'];

export function FestivalGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('すべて');
  const visibleWorks = useMemo(
    () => active === 'すべて' ? works : works.filter((work) => work.category === active),
    [active],
  );

  return (
    <>
      <div className="filter-row" aria-label="作品カテゴリ">
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={active === category ? 'secondary' : 'outline'}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            className="filter-button"
          >
            {category}
          </Button>
        ))}
      </div>

      <p className="result-count" aria-live="polite">{visibleWorks.length} WORKS</p>

      <div className="work-grid full-grid">
        {visibleWorks.map((work) => {
          const directIsX = work.href === work.xUrl;
          return (
            <article className="work-card" key={`${work.title}-${work.handle}`}>
              <a className="work-image" href={work.href} target="_blank" rel="noreferrer">
                <img src={work.image} alt={`${work.title}の作品画像`} loading="lazy" />
                {work.status && <span className="status-badge">{work.status}</span>}
                <span className="image-action" aria-hidden="true"><Play size={15} /> OPEN</span>
              </a>
              <div className="work-body">
                <p className="maker">BY {work.maker} <span>{work.handle}</span></p>
                <h3>{work.title}</h3>
                <p className="description">{work.description}</p>
                {work.contentNote && <p className="content-note">※ {work.contentNote}</p>}
                <div className="platforms" aria-label="対応環境">
                  <Monitor size={14} />
                  {work.platforms.map((platform) => <span key={platform}>{platform}</span>)}
                </div>
                <div className="card-actions">
                  <a className="primary-action" href={work.href} target="_blank" rel="noreferrer">
                    {directIsX ? 'Xで作品を見る' : '作品をひらく'} <ArrowUpRight size={15} />
                  </a>
                  {!directIsX && (
                    <a className="x-action" href={work.xUrl} target="_blank" rel="noreferrer" aria-label={`${work.title}のX投稿を見る`}>
                      X <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
