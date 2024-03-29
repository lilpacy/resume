import { PixelPacy } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Pacy",
  initials: "LP",
  location: "東京, 日本",
  locationLink: "https://www.google.com/maps/place/Tokyo",
  about: "フルスタックエンジニア",
  summary:
    "神戸大学在学中に個人事業で生計を立てる。その後、Donutsバンコク支社でRubyメインのフルスタックエンジニアとしてインターン勤務。2019年にFringe81株式会社にエンジニアとして新卒入社。HRTech事業フロントエンドを純粋関数型言語Elmで保守運用、新規開発。2020年に広告事業へ異動し、広告配信システムのログ集計基盤責任者としてScalaでサーバーサイド/インフラの保守運用と新規開発。2021年6月にCryptoGames.incにフルスタックエンジニアとして参加し、同年11月にNFT事業開発リードに就任。2022年7月に同社のCTOに就任。現在はNuxt.js/Next.jsを用いたフロントエンド開発、TypeScript/Go/Pythonなどを用いたサーバーサイド開発、Solidityを用いたスマートコントラクト開発などを行っている。",
  avatarUrl: PixelPacy.src,
  personalWebsiteUrl: "https://0xpacy.arweave.dev/",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lilpacy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tomohiro-seto-00740a11a/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/0xpacy",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "神戸大学経済学部",
      degree: "学士（経済学）",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Donutsバンコク支社",
      link: "Donutsバンコク支社のURL",
      badges: ["インターン"],
      title: "フルスタックエンジニア",
      start: "2018",
      end: "2018",
      description: "Rubyメインのフルスタックエンジニアとしてインターン勤務",
    },
    {
      company: "Fringe81株式会社",
      link: "https://fringe81.com",
      badges: [],
      title: "フロントエンジニア → バックエンド/インフラエンジニア",
      start: "2019",
      end: "2021",
      description:
        "ARR億円単位のHRTech事業フロントエンドをElmで保守運用、新規開発。広告事業へ異動後は、年間取扱高10億円規模の広告配信システムのログ集計基盤責任者としてScalaでサーバーサイド/インフラ保守運用、新規開発",
    },
    {
      company: "CryptoGames.inc",
      link: "CryptoGames.incのURL",
      badges: [],
      title: "フルスタックエンジニア → NFT事業開発リード → CTO",
      start: "2021",
      end: "現在",
      description:
        "NFTStudio開発、TV放送。Astar初のDapp Stakingを活用したGameFi、AstarFarmコントラクト開発。Oasysチェーンの開発に初期から参画、OasysHub立ち上げ。フロントエンド開発（Nuxt.js/Next.js）、サーバーサイド開発（TypeScript/Go/Python）、スマートコントラクト開発（Solidity）",
    },
  ],
  skills: [
    "Ruby",
    "Elm",
    "Scala",
    "Nuxt.js",
    "Next.js",
    "TypeScript",
    "Go",
    "Python",
    "Solidity",
    "AWS",
  ],
  projects: [
    // あなたのプロジェクトの詳細をここに追加してください
    // 例:
    {
      title: "AstarFarm",
      techStack: ["スマコン開発リード", "Nuxt.js", "JavaScript", "Solidity"],
      description:
        "Astarチェーン初のDapp Stakingコントラクトを使ったWrapper Dappであり、TVL5億円のGameFiプロジェクト。Debunkに掲載あり。",
      link: {
        label: "astarfarm.com",
        href: "https://astarfarm.com",
      },
    },
    {
      title: "OasysHub",
      techStack: ["フロント開発リード", "Next.js", "TypeScript", "Solidity"],
      description:
        "Game特化国産ブロックチェーンOasysの開発に初期から参画、ステーキングサイトフロント開発リード",
      link: {
        label: "hub.oasys.games",
        href: "https://hub.oasys.games",
      },
    },
    {
      title: "MashiroAI NFT",
      techStack: ["ひとりでできるもん", "Next.js", "TypeScript", "Solidity"],
      description:
        "生成AIブームが始まった2022年10月、NovelAIを使って1024体のNFTプロジェクトを2週間でスクラッチ開発。Neo Tokyo PunksとのコラボNFT、Neo Tokyo Punks Memoryを発売し、2222体完売。",
      link: {
        label: "mashiroai.xyz",
        href: "https://mashiroai.xyz",
      },
    },
  ],
} as const;
