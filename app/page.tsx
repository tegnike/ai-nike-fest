import { ArrowUpRight, CalendarDays, Gamepad2, History, MessageCircle, Sparkles } from 'lucide-react';
import { FestivalGallery } from './festival-gallery';

export default function Home() {
  return (
    <main>
      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label="AIニケフェス トップ">
          <span>AI</span> ニケフェス
        </a>
        <a className="nav-link" href="#works">
          作品を見る <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-art">
          <img
            src="/ai-nike-fest-2026-key-visual.webp"
            alt="AIニケフェス 2026年9月5日土曜日22時開催。1年の振り返り、AIキャラクターLT、作品コンテスト"
            width="1672"
            height="941"
            fetchPriority="high"
          />
          <span className="floating-label">2026 FESTIVAL KEY VISUAL</span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={15} /> NIKE SERVER 1ST ANNIVERSARY</p>
            <h1>
              つくって、遊んで、<br />
              <em>みんなで祝う。</em>
            </h1>
            <p className="hero-lead">
              AIニケちゃんDiscordサーバー1周年を記念して集まった、ゲーム・映像・音楽・ツールの作品展です。
            </p>
          </div>
          <div className="hero-details">
            <div className="event-note">
              <CalendarDays size={20} />
              <span><strong>2026.09.05 SAT 22:00</strong> AIニケちゃんDiscordサーバーで開催</span>
            </div>
            <div className="hero-actions">
              <a className="hero-cta hero-venue" href="https://discord.gg/nikechan" target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Discord会場へ参加 <ArrowUpRight size={17} />
              </a>
              <a className="hero-secondary" href="#works">
                18作品を見る <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-feature" aria-labelledby="timeline-title">
        <a className="timeline-card" href="https://nike.nectalica.com/" target="_blank" rel="noreferrer">
          <div className="timeline-copy">
            <p className="eyebrow"><History size={15} /> UNOFFICIAL ANNIVERSARY TIMELINE</p>
            <h2 id="timeline-title">
              AIニケちゃんサーバー<br />
              <em>1周年・非公式年表</em>
            </h2>
            <p>世界の生成AIとサーバーのできごとを、同じ1年の流れでたどれるファンメイドの大作年表です。</p>
            <div className="timeline-meta">
              <span className="timeline-author">
                <small>年表制作</small>
                <strong>ツキさん</strong>
                <em>@mori_tuki</em>
              </span>
              <span className="timeline-cta">年表をじっくり見る <ArrowUpRight size={18} /></span>
            </div>
          </div>
          <div className="timeline-years" aria-hidden="true">
            <span>2025</span>
            <i />
            <strong>2026</strong>
            <small>1 YEAR OF MEMORIES</small>
          </div>
        </a>
      </section>

      <section className="works-section" id="works">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><Gamepad2 size={15} /> FESTIVAL WORKS</p>
            <h2>フェスを彩る作品たち</h2>
          </div>
          <p>データベースに保存された投稿と、それぞれの公開先を確認してまとめました。対応環境も作品カードで確認できます。</p>
        </div>
        <p className="stats-label">掲載作品と参加クリエイター</p>
        <div className="stats" aria-label="掲載作品と参加クリエイターの内訳">
          <div><span>総掲載作品</span><strong>18</strong><small>作品</small></div>
          <div><span>参加クリエイター</span><strong>15</strong><small>人</small></div>
          <div><span>ゲーム</span><strong>9</strong><small>作品</small></div>
          <div><span>映像・音楽</span><strong>7</strong><small>作品</small></div>
          <div><span>ツール・イラスト</span><strong>2</strong><small>作品</small></div>
        </div>
        <FestivalGallery />
      </section>

      <section className="closing">
        <p className="eyebrow"><Sparkles size={15} /> THANK YOU, CREATORS</p>
        <h2>この1年を、次の作品へ。</h2>
        <p>作品をつくってくださった皆さん、見つけてくださった皆さん、本当にありがとうございます。</p>
        <a href="https://x.com/hashtag/AI%E3%83%8B%E3%82%B1%E3%83%95%E3%82%A7%E3%82%B9?src=hashtag_click" target="_blank" rel="noreferrer">
          #AIニケフェス をXで見る <ArrowUpRight size={17} />
        </a>
      </section>

      <footer>
        <span>AIニケフェス — AIニケちゃんDiscordサーバー1周年</span>
        <span>2026.09.01 データベース確認時点</span>
      </footer>
    </main>
  );
}
