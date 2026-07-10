import { createFileRoute } from "@tanstack/react-router";
import wale1 from "@/assets/wale.jpg.asset.json";
import wale2 from "@/assets/wale2.jpg.asset.json";
import wale3 from "@/assets/wale_3.jpg.asset.json";
import wale4 from "@/assets/wale_4.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: wale4.url },
      { name: "twitter:image", content: wale4.url },
    ],
  }),
});

const LISTEN_URL = "https://li.sten.to/xenephobia";
const YOUTUBE_URL = "https://youtu.be/ok5PMTLw7Ic?si=2Gk1ECVXek1TuHqh";
const YT_EMBED = "https://www.youtube.com/embed/ok5PMTLw7Ic";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-2xl tracking-tight text-bone">
            WALEY<span className="text-primary">.</span>T
          </a>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-mono">
            <a href="#music" className="hover:text-primary transition">Music</a>
            <a href="#video" className="hover:text-primary transition">Video</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a href={LISTEN_URL} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-xs uppercase tracking-widest font-bold hover:bg-primary/90 transition">
            Listen ▸
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-16 min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.68 0.22 35 / 0.4), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.4 0.15 25 / 0.3), transparent 50%)"
        }} />
        <div className="relative max-w-[1600px] mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center w-full">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              New Single · Out Now
            </div>
            <h1 className="font-display text-[clamp(4rem,14vw,13rem)] leading-[0.85] text-bone">
              XENE<br/>
              <span className="text-primary italic">phobia</span>
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              The new single from <span className="text-bone font-semibold">Waley T</span> — a genre-bending statement on borders, belonging and the noise between. Streaming everywhere.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={LISTEN_URL} target="_blank" rel="noopener" className="group bg-primary text-primary-foreground px-6 py-4 font-bold uppercase tracking-widest text-sm hover:bg-bone transition">
                Stream Now →
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener" className="border border-border px-6 py-4 font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition">
                Watch Video
              </a>
            </div>
            <div className="pt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Distributed by <span className="text-bone">Icon Music</span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden border border-border">
              <img src={wale4.url} alt="Waley T portrait" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-xs uppercase tracking-widest">
                <span>Track 01</span>
                <span className="text-primary">03:42</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-4 py-2 font-display text-2xl rotate-[-4deg]">
              OUT NOW
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-secondary/40 overflow-hidden py-4">
        <div className="marquee whitespace-nowrap font-display text-4xl md:text-6xl text-bone">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-12 pr-12">
              <span>Xenephobia</span><span className="text-primary">✦</span>
              <span>Out Now</span><span className="text-primary">✦</span>
              <span>Waley T</span><span className="text-primary">✦</span>
              <span>Icon Music</span><span className="text-primary">✦</span>
              <span>Stream Everywhere</span><span className="text-primary">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* MUSIC */}
      <section id="music" className="py-24 max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">01 — The Single</div>
            <h2 className="font-display text-6xl md:text-7xl text-bone">Listen<br/>Everywhere</h2>
            <p className="text-muted-foreground">
              Available on Spotify, Apple Music, YouTube Music, Boomplay, Audiomack, Tidal, Deezer and every platform in between.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {[
              { name: "Spotify", tag: "Stream" },
              { name: "Apple Music", tag: "Stream" },
              { name: "YouTube Music", tag: "Watch" },
              { name: "Boomplay", tag: "Stream" },
              { name: "Audiomack", tag: "Stream" },
              { name: "Tidal", tag: "Stream" },
            ].map((p) => (
              <a
                key={p.name}
                href={LISTEN_URL}
                target="_blank"
                rel="noopener"
                className="group border border-border p-6 flex items-center justify-between hover:border-primary hover:bg-secondary/50 transition"
              >
                <div>
                  <div className="font-display text-2xl text-bone group-hover:text-primary transition">{p.name}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">{p.tag} Xenephobia</div>
                </div>
                <span className="text-2xl text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 space-y-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">02 — Visual</div>
              <h2 className="font-display text-6xl md:text-7xl text-bone mt-2">The Video</h2>
            </div>
            <a href={YOUTUBE_URL} target="_blank" rel="noopener" className="font-mono text-xs uppercase tracking-widest hover:text-primary">
              Open on YouTube ↗
            </a>
          </div>
          <div className="relative aspect-video border border-border overflow-hidden">
            <iframe
              className="w-full h-full"
              src={YT_EMBED}
              title="Waley T — Xenephobia (Official Video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 max-w-[1600px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <img src={wale2.url} alt="Waley T" className="aspect-[3/4] object-cover border border-border" />
              <img src={wale3.url} alt="Waley T" className="aspect-[3/4] object-cover border border-border mt-8" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 — The Artist</div>
            <h2 className="font-display text-6xl md:text-8xl text-bone leading-[0.9]">
              Akinsunmade<br/>
              <span className="text-primary">Akinwale</span><br/>
              Oluwatosin
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Known to the world as <span className="text-bone font-semibold">Waley T</span> — a Nigerian recording artist crafting sound at the crossroads of afrobeats, alté and the diasporic underground. Every record is a document; every visual, a mood.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
              <Stat k="Latest" v="Xenephobia" />
              <Stat k="Label" v="Icon Music" />
              <Stat k="Status" v="Out Now" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 space-y-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 — Press</div>
              <h2 className="font-display text-6xl md:text-7xl text-bone mt-2">Gallery</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[wale4, wale2, wale, wale3].map((img, i) => (
              <div key={i} className={`overflow-hidden border border-border group ${i % 2 ? 'md:translate-y-8' : ''}`}>
                <img src={img.url} alt={`Waley T ${i + 1}`} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 max-w-[1600px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">05 — Contact</div>
            <h2 className="font-display text-6xl md:text-8xl text-bone mt-2 leading-[0.9]">
              Bookings<br/><span className="text-primary">&</span> Press
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <ContactRow label="Phone" value="+234 903 355 5809" href="tel:+2349033555809" />
            <ContactRow label="Label" value="Icon Music" />
            <ContactRow label="Stream" value="li.sten.to/xenephobia" href={LISTEN_URL} />
            <ContactRow label="Watch" value="youtu.be/ok5PMTLw7Ic" href={YOUTUBE_URL} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 py-10 flex flex-wrap gap-4 justify-between items-center">
          <div className="font-display text-2xl text-bone">WALEY<span className="text-primary">.</span>T</div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Akinsunmade Akinwale Oluwatosin · All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="font-display text-2xl text-bone mt-1">{v}</div>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center justify-between border-b border-border py-6 group">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
      <div className="font-display text-2xl md:text-4xl text-bone group-hover:text-primary transition">{value} {href && <span className="text-primary">↗</span>}</div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener">{inner}</a> : inner;
}
