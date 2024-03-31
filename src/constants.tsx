import { PixelPacy } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const constants = {
  resume: {
    name: "Pacy",
    about: "フルスタックエンジニア",
    summary:
      "神戸大学在学中に個人事業で生計を立てる。その後、Donutsバンコク支社でRubyメインのフルスタックエンジニアとしてインターン勤務。2019年にFringe81株式会社にエンジニアとして新卒入社。HRTech事業フロントエンドを純粋関数型言語Elmで保守運用、新規開発。2020年に広告事業へ異動し、広告配信システムのログ集計基盤責任者としてScalaでサーバーサイド/インフラの保守運用と新規開発。2021年6月にCryptoGames.incにフルスタックエンジニアとして参加し、同年11月にNFT事業開発リードに就任。2022年7月に同社のCTOに就任。現在はNuxt.js/Next.jsを用いたフロントエンド開発、TypeScript/Go/Pythonなどを用いたサーバーサイド開発、Solidityを用いたスマートコントラクト開発などを行っている。",
    avatarUrl: PixelPacy.src,
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
  },
} as const;
