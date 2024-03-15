// Bu dosya, farklı ekran boyutları için konteyner bileşeninin stilini ayarlar. İçeriği incelediğimizde:

// breakpoints modülünden gelen değerleri (sm, md, lg, xl, xxl) alır. Bu değerler, ekran boyutlarını piksel cinsinden temsil eder.

// Bu ekran boyutlarına göre medya sorgularını tanımlar (SM, MD, LG, XL, XXL).

// sharedClasses adında bir nesne tanımlar. Bu nesne, tüm konteyner bileşenlerine uygulanacak ortak stilleri içerir.

// container adında bir nesne tanımlar. Bu nesne, farklı ekran boyutları için konteyner bileşeninin stillerini belirtir. Her ekran boyutu için belirli bir maksimum genişlik (maxWidth) tanımlanmıştır.

// Küçük (SM), orta (MD), büyük (LG), ekstra büyük (XL) ve çok ekstra büyük (XXL) ekran boyutları için ayrı ayrı stil düzenlemeleri yapılır.

// Her boyut için, .MuiContainer-root sınıfına sharedClasses'daki stiller eklenir ve bir maxWidth değeri atanır.

// Bu dosya, genellikle responsive tasarımlarda kullanılan konteyner bileşenlerinin boyutlarını ayarlamak için kullanılır. Özellikle farklı ekran boyutlarına uyumlu bir şekilde içeriklerin düzenlenmesini sağlamak amacıyla kullanılır.

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme-dark/base/breakpoints";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

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
