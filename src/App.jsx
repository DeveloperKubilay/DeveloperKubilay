import { useEffect, useState } from 'react'

const profile = {
  name: 'Kubilay',
  handle: 'DeveloperKubilay',
  avatar: '/public/imgs/me.png',
  github: 'https://github.com/DeveloperKubilay',
  youtube: 'https://www.youtube.com/@valancess',
  discord: 'valancess',
  discordurl: 'https://discord.gg/SzyxcxYmaa',
  headline: 'Node.js odaklı web geliştirici',
  bio:
    'İnternet iletişimleri, oyun motoru, tarayıcı eklentileri ve kendi araclari ureten; fikri hızla urune cevirmeyi seven yazilimci.',
}

const heroTopics = [
  'Node.js projeleri',
  'Tarayici araclari',
  'VPS panel sistemleri',
  'İletişim protokolleri',
  'Oyun motoru',
  'Local database paketleri',
]

const stats = [
  { value: '70', label: 'acik repo' },
  { value: '1857', label: 'yillik katki' },
  { value: '0', label: 'toplam star' },
  { value: '19', label: 'takipci' },
]

const featuredProjects = [
  {
    name: 'electoria-engine',
    type: 'Game engine',
    summary: 'Ana amacı basitlik olan Az kodla, cross-platform calismayi hedefleyen basit ama islevsel oyun motoru.',
    stack: ['JavaScript', 'Game-Engine', 'Low-code'],
    metric: '4 stars',
    url: 'https://github.com/DeveloperKubilay/electoria-engine',
    image: 'https://opengraph.githubassets.com/portfolio-electoria/DeveloperKubilay/electoria-engine',
    accent: 'bg-heat',
  },
  {
    name: 'Safra',
    type: 'İnternet iletişimi',
    summary: 'Sunucu olmadan arkadaşlarınız ile minecraft oynayın p2p mekanizmasını kullanarak limitleme olmadan oynama imkanı sunar.',
    stack: ['Java', 'Multi-branch', 'Open-source'],
    metric: '38 stars',
    url: 'https://www.curseforge.com/minecraft/mc-mods/safra',
    image: 'https://raw.githubusercontent.com/DeveloperKubilay/Safra/refs/heads/assets/png/readme.gif',
    accent: 'bg-acid',
  },
  {
    name: 'Hızlı Haber',
    type: 'Website',
    summary: 'İnternetten haberleri alıp daha okunaklı birşekilde sunan, Yenilikci yapay-zeka destekli haber okuma sitesi',
    stack: ['Otomasyon', 'Website', 'Front-end'],
    metric: '2 stars',
    url: 'https://xn--hzl-haber-vpbc.com/',
    image: '/public/imgs/3zEbr2D.png',
    accent: 'bg-bolt',
  },
]

const heroMarquee = [...heroTopics, ...heroTopics]

const formatStat = (value) => new Intl.NumberFormat('tr-TR').format(value)

const buildStats = ({ user, repos, contributions }) => [
  { value: formatStat(user.public_repos), label: 'acik repo' },
  { value: formatStat(contributions.total.lastYear), label: 'yillik katki' },
  { value: formatStat(repos.reduce((total, repo) => total + repo.stargazers_count, 0)), label: 'toplam star' },
  { value: formatStat(user.followers), label: 'takipci' },
]

const labProjects = [
  {
    name: 'SaveYourTime',
    copy: 'Dijital hayati kontrol altina almaya odaklanan Chrome extension.',
    lang: 'HTML',
    url: 'https://chromewebstore.google.com/detail/saveyourtime/noefpbkcooahahhneghdjomngoigjdbf',
  },
  {
    name: 'termix',
    copy: 'Acik kaynak, yeni nesil terminal uygulamasi.',
    lang: 'JavaScript',
    url: 'https://github.com/DeveloperKubilay/termix',
  },
  {
    name: 'McAi',
    copy: 'Minecraft oynayabilen insan benzeri yapay zeka deneyi.',
    lang: 'JavaScript',
    url: 'https://www.youtube.com/watch?v=emajgphgwAc',
  },
  {
    name: 'openssh',
    copy: 'Uzaktan terminal baglantisi icin acik kaynakli SSH istemcisi.',
    lang: 'JavaScript',
    url: 'https://www.npmjs.com/package/openssh',
  },
  {
    name: 'ThreadWarden',
    copy: 'Multithreadli Node.js uygulamalarini kolayca yonetmeye yonelik arac.',
    lang: 'JavaScript',
    url: 'https://www.npmjs.com/package/threadwarden',
  },
  {
    name: 'Pear3',
    copy: 'Selenium alternatifi, Sıfırdan yazılmış, Fark edilmeyen web tarayıcı otomasyon aracı.',
    lang: 'JavaScript',
    url: 'https://www.npmjs.com/package/pear3',
  },
  {
    name: 'Ai',
    copy: 'Yapay zeka eğitmeniz için basit ve hızlı bir araç.',
    lang: 'Python',
    url: 'https://github.com/DeveloperKubilay/Ai',
  },
  {
    name: 'LightRoute',
    copy: 'Express.js gibi sıfırdan yazılmış, web frameworkü.',
    lang: 'JavaScript',
    url: 'https://github.com/DeveloperKubilay/lightroute',
  },
  {
    name: 'Kubitdb',
    copy: 'Json tabanlı, local database sistemi',
    lang: 'JavaScript',
    url: 'https://github.com/DeveloperKubilay/kubitdb',
  },
]

const stacks = [
  'Firebase',
  'Google Cloud',
  'Amazon Aws',
  'Microsoft Azure',
  'Github Actions',
  'CodeQL',
  'Git',
  'Cloudflare',
  'Chrome Extensions',
  'Npm packages',
]

const process = [
  ['01', 'Planlama', 'Güncel sistemler ile neler yapılabilir detaylıca araştırma'],
  ['02', 'Hizli prototip', 'İlk olarak çalışan ilk versionu hazırlamak bunu yaparken altyapıyı düzenli ilerletmek.'],
  ['03', 'Servise hazırlamak', 'Olan sistemle yetinmeyip gerekirse tekrar başlayıp daha iyi bir sistem kurmak.'],
  ['04', 'Deney alani', 'Herşeyden önce güvenlik ve deneme alanı, herşeyin test edilebileceği bir alan.'],
]

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-normal"
          aria-label="Sayfa basina don"
        >
          <span className="grid h-8 w-8 place-items-center rounded-[6px] border-2 border-ink bg-acid shadow-hardSm transition-transform group-hover:-translate-y-0.5">
            DK
          </span>
          <span className="hidden sm:block">DeveloperKubilay</span>
        </a>
        <div className="hidden items-center gap-1 text-[11px] font-bold uppercase md:flex">
          {['Projeler', 'Stack', 'Iletisim'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('i', 'i')}`}
              className="rounded-[6px] px-3 py-2 transition-colors hover:bg-ink hover:text-paper"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-[6px] border-2 border-ink bg-ink px-4 py-2 text-[11px] font-black uppercase text-paper shadow-hardSm transition-transform hover:-translate-y-0.5"
        >
          GitHub
        </a>
      </nav>
    </header>
  )
}

function Hero({ stats }) {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-ink">
      <div className="absolute inset-x-0 top-14 h-10 rotate-[-2deg] border-y-2 border-ink bg-acid">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap py-2 font-mono text-xs font-black uppercase">
          {heroMarquee.map((item, index) => (
            <span key={`${item}-${index}`} className="mx-8">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-24 sm:px-6 md:min-h-[78svh] md:grid-cols-[1.08fr_0.92fr] md:items-center lg:px-8">
        <div className="relative z-10 animate-rise">
          <p className="mb-5 inline-flex rounded-[6px] border-2 border-ink bg-bolt px-3 py-2 font-mono text-xs font-black uppercase shadow-hardSm">
            {profile.handle} / Yazılım geliştiricisi
          </p>
          <h1 className="font-display text-[clamp(3.6rem,13vw,10.8rem)] font-black uppercase leading-[0.78] tracking-normal">
            Kubi
            <span className="block stroke-title">lay</span>
          </h1>
          <div className="mt-7 max-w-2xl border-l-4 border-ink pl-5">
            <p className="font-display text-2xl font-bold leading-tight text-balance sm:text-4xl">
              {profile.headline}
            </p>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-ink/78 sm:text-base">
              {profile.bio}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${profile.github}?tab=repositories`}
              className="rounded-[6px] border-2 border-ink bg-acid px-5 py-4 text-center font-mono text-xs font-black uppercase shadow-hard transition-transform hover:-translate-y-1"
            >
              Projelere bak
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-[6px] border-2 border-ink bg-paper px-5 py-4 text-center font-mono text-xs font-black uppercase shadow-hard transition-transform hover:-translate-y-1"
            >
              GitHub profil
            </a>
          </div>
        </div>

        <div className="relative z-10 animate-rise [animation-delay:160ms]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -left-4 top-8 h-full w-full rotate-[-3deg] border-2 border-ink bg-heat" />
            <div className="relative border-2 border-ink bg-paper p-3 shadow-hard">
              <div className="mb-3 flex items-center justify-between border-b-2 border-ink pb-3 font-mono text-[11px] font-black uppercase">
                <span>KUBIS</span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 animate-blink rounded-full bg-heat" />
                  SA
                </span>
              </div>
              <img
                src={profile.avatar}
                alt="Kubilay GitHub profil fotografi"
                className="aspect-square w-full border-2 border-ink object-cover"
              />
              <div className="grid grid-cols-2 border-x-2 border-b-2 border-ink">
                {stats.map((item) => (
                  <div key={item.label} className="border-ink p-4 odd:border-r-2 [&:nth-child(-n+2)]:border-b-2">
                    <p className="font-display text-4xl font-black leading-none">{item.value}</p>
                    <p className="mt-1 font-mono text-[10px] font-bold uppercase">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-5 -top-5 hidden rotate-6 border-2 border-ink bg-bolt px-4 py-3 font-mono text-xs font-black uppercase shadow-hardSm sm:block">
              18 yas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedProject({ project, index }) {
  return (
    <article className="project-card grid overflow-hidden border-2 border-ink bg-paper shadow-hard md:grid-cols-[0.9fr_1.1fr]">
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="relative min-h-64 overflow-hidden border-b-2 border-ink md:border-b-0 md:border-r-2"
      >
        <img src={project.image} alt={`${project.name} GitHub proje gorseli`} className="project-image h-full w-full object-cover" />
        <span className={`absolute left-4 top-4 rounded-[6px] border-2 border-ink ${project.accent} px-3 py-2 font-mono text-[10px] font-black uppercase shadow-hardSm`}>
          0{index + 1} / {project.type}
        </span>
      </a>
      <div className="flex min-h-64 flex-col justify-between p-5 sm:p-7">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-[6px] border-2 border-ink px-2.5 py-1 font-mono text-[10px] font-black uppercase">
                {item}
              </span>
            ))}
          </div>
          <h3 className="font-display text-4xl font-black tracking-normal sm:text-5xl">{project.name}</h3>
          <p className="mt-4 text-sm font-medium leading-7 text-ink/76 sm:text-base">{project.summary}</p>
        </div>
        <div className="mt-8 flex items-end justify-between gap-4">
          <p className="font-mono text-xs font-black uppercase">{project.metric}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-[6px] border-2 border-ink bg-ink px-4 py-3 font-mono text-[11px] font-black uppercase text-paper transition-transform hover:-translate-y-0.5"
          >
            Repo ac
          </a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projeler" className="border-b-2 border-ink bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="font-mono text-xs font-black uppercase">GitHub projelerim</p>
          <h2 className="font-display text-5xl font-black leading-none tracking-normal text-balance sm:text-7xl">
            Baş yapıtlar
          </h2>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.name} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labProjects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group min-h-56 border-2 border-ink bg-paper p-5 shadow-hardSm transition-transform hover:-translate-y-1 hover:bg-acid"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="rounded-[6px] border-2 border-ink bg-paper px-2.5 py-1 font-mono text-[10px] font-black uppercase">
                  {project.lang}
                </span>
                <span className="font-mono text-lg font-black transition-transform group-hover:translate-x-1">-&gt;</span>
              </div>
              <h3 className="font-display text-3xl font-black leading-none">{project.name}</h3>
              <p className="mt-4 text-sm font-medium leading-6 text-ink/74">{project.copy}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="border-b-2 border-ink bg-ink py-14 text-paper sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-4 inline-flex rounded-[6px] border-2 border-paper bg-heat px-3 py-2 font-mono text-xs font-black uppercase text-ink">
              stack
            </p>
            <h2 className="font-display text-5xl font-black leading-none tracking-normal text-balance sm:text-7xl">
              Kod yazan, paketleyen, deneyen bir atölye.
            </h2>
            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-paper/76">
              Kubilay yenilikci sistemleri, sistemlerine entegre ederek güncel yazılım sistemlerine uyum sağlıyor
              bunu yaparken güvenliğe defalarca kontrol ederek devam etmekte
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stacks.map((item, index) => (
              <div
                key={item}
                className="flex min-h-24 items-end justify-between border-2 border-paper bg-paper p-4 text-ink shadow-[6px_6px_0_#00d8c6]"
              >
                <span className="font-display text-2xl font-black">{item}</span>
                <span className="font-mono text-xs font-black">{String(index + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid border-2 border-paper lg:grid-cols-4">
          {process.map(([num, title, copy], index) => (
            <div key={title} className={`p-5 ${index !== 3 ? 'border-b-2 border-paper lg:border-b-0 lg:border-r-2' : ''}`}>
              <p className="font-display text-5xl font-black text-acid">{num}</p>
              <h3 className="mt-5 font-display text-2xl font-black">{title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-paper/70">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="iletisim" className="relative overflow-hidden bg-acid py-14 sm:py-20">
      <div className="absolute inset-0 animate-scan scan-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-[6px] border-2 border-ink bg-paper px-3 py-2 font-mono text-xs font-black uppercase shadow-hardSm">
              Teşekkürlerrrrr :)
            </p>
            <h2 className="font-display text-5xl font-black leading-none tracking-normal text-balance sm:text-7xl">
              Kubiii!!!!
            </h2>
          </div>
          <div className="border-2 border-ink bg-paper p-5 shadow-hard">
            <p className="font-mono text-xs font-black uppercase">iletisim</p>
            <div className="mt-5 grid gap-3">
              <a
                href="mailto:mail@kubidev.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-[6px] border-2 border-ink bg-ink px-4 py-4 text-center font-mono text-xs font-black  text-paper transition-transform hover:-translate-y-0.5"
              >
                mail@kubidev.com
              </a>
              <a
                href={profile.youtube}
                target="_blank"
                rel="noreferrer"
                className="rounded-[6px] border-2 border-ink bg-heat px-4 py-4 text-center font-mono text-xs font-black uppercase text-ink transition-transform hover:-translate-y-0.5"
              >
                youtube / @valancess
              </a>
              <a
                href={profile.discordurl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[6px] border-2 border-ink bg-bolt px-4 py-4 text-center font-mono text-xs font-black uppercase text-ink transition-transform hover:-translate-y-0.5"
              >
                discord / {profile.discord}
              </a>
            </div>
          </div>
        </div>
        <footer className="mt-12 flex flex-col gap-3 border-t-2 border-ink pt-5 font-mono text-[11px] font-black uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>E: Sub-process /usr/bin/dpkg returned an error code (1)</span>
          <a href="https://youtu.be/W0hfVoY8WGM?t=150" className="text-blue-700 underline">
            Bilmem
          </a>
        </footer>
      </div>
    </section>
  )
}

export default function App() {
  const [liveStats, setLiveStats] = useState(stats)

  useEffect(() => {
    Promise.allSettled([
      fetch('https://api.github.com/users/DeveloperKubilay').then((res) => res.json()),
      fetch('https://api.github.com/users/DeveloperKubilay/repos?per_page=100').then((res) => res.json()),
      fetch('https://github-contributions-api.jogruber.de/v4/DeveloperKubilay?y=last').then((res) => res.json()),
    ]).then(([user, repos, contributions]) => {
      if (user.status !== 'fulfilled' || repos.status !== 'fulfilled' || contributions.status !== 'fulfilled') return
      if (!Array.isArray(repos.value) || !contributions.value?.total) return
      setLiveStats(buildStats({ user: user.value, repos: repos.value, contributions: contributions.value }))
    })
  }, [])

  return (
    <main className="min-h-screen text-ink">
      <div className="noise-layer" />
      <Header />
      <Hero stats={liveStats} />
      <Projects />
      <Stack />
      <Contact />
    </main>
  )
}
