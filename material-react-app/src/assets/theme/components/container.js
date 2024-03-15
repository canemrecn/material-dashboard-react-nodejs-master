// Bu dosya, farklı ekran boyutları için container bileşenlerinin genişlik ayarlarını belirler.

// breakpoints: Bu, tema içinde tanımlı ekran boyutlarını içerir. Küçük (sm), orta (md), büyük (lg), ekstra büyük (xl) ve çok ekstra büyük (xxl) boyutlardan oluşur.
// Daha sonra, her bir ekran boyutu için container bileşenlerinin genişlik ayarları belirlenir:

// SM, MD, LG, XL, XXL: Her bir medya sorgusu belirli bir ekran boyutuna uygulanır.
// sharedClasses: Ortak özelliklerin bir nesnesi, her bir container bileşeni için genişlik ve konumlandırma ayarlarını içerir.
// container: Her bir medya sorgusuna sahip bir nesne, container bileşenlerinin genişlik ayarlarını içerir. Her bir container bileşeni için maxWidth özelliği belirli bir değere ayarlanır, böylece ekran boyutlarına göre container bileşenlerinin genişliği değişir.
// Bu dosya, uygulamanın duyarlı tasarımını sağlamak için farklı ekran boyutlarına uyumlu container bileşenleri sağlar.

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const {
  values: { sm, md, lg, xl, xxl },
} = breakpoints;

const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;
const XL = `@media (min-width: ${xl}px)`;
const XXL = `@media (min-width: ${xxl}px)`;

const sharedClasses = {
  paddingRight: `${pxToRem(24)} !important`,
  paddingLeft: `${pxToRem(24)} !important`,
  marginRight: "auto !important",
  marginLeft: "auto !important",
  width: "100% !important",
  position: "relative",
};

const container = {
  [SM]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "540px !important",
    },
  },
  [MD]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "720px !important",
    },
  },
  [LG]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "960px !important",
    },
  },
  [XL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "1140px !important",
    },
  },
  [XXL]: {
    ".MuiContainer-root": {
      ...sharedClasses,
      maxWidth: "1320px !important",
    },
  },
};

export default container;
