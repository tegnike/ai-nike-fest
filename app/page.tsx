import { ArrowUpRight, CalendarDays, Gamepad2, Sparkles } from 'lucide-react';
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
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> NIKE SERVER 1ST ANNIVERSARY</p>
          <h1>
            つくって、遊んで、<br />
            <em>みんなで祝う。</em>
          </h1>
          <p className="hero-lead">
            AIニケちゃんDiscordサーバー1周年を記念して集まった、ゲーム・映像・音楽・ツールの作品展です。
          </p>
          <div className="event-note">
            <CalendarDays size={20} />
            <span><strong>2026.09.05 SAT 22:00</strong> Discordにて開催</span>
          </div>
        </div>
        <div className="hero-art">
          <img src="https://werewolf.nectalica.com/assets/ogp_nike_nectalica_2026-08-30.jpg" alt="AIニケちゃんとAI人狼" />
          <span className="floating-label">COMMUNITY MADE</span>
        </div>
      </section>

      <section className="works-section" id="works">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><Gamepad2 size={15} /> FESTIVAL WORKS</p>
            <h2>フェスを彩る作品たち</h2>
          </div>
          <p>データベースに保存された投稿と、それぞれの公開先を確認してまとめました。対応環境も作品カードで確認できます。</p>
        </div>
        <div className="stats" aria-label="収録作品数">
          <div><strong>17</strong><span>作品</span></div>
          <div><strong>8</strong><span>ゲーム</span></div>
          <div><strong>3</strong><span>デスクトップOS</span></div>
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
        <span>2026.08.31 データベース確認時点</span>
      </footer>
    </main>
  );
}
