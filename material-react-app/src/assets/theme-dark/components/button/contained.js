// Bu dosya, Material Dashboard 2 React temasının bir parçası olarak, düğmeler için "contained" stilini tanımlar. Contained düğmeler, genellikle arayüzde öne çıkan eylemler için kullanılan, arka plan rengi dolu olan düğmelerdir. Bu stil tanımı, düğmelerin görünümünü özelleştirmek için çeşitli boyutlar, renkler ve durumlar (hover, active, focus) üzerinde detaylı ayarlar yapar.

// Anahtar Özellikler ve Kullanımları:
// base: Tüm contained düğmeler için temel stil ayarlarını içerir. Arka plan rengi, minimum yükseklik, kenarlık, dolgu (padding), metin rengi gibi temel özellikler ve durumları (:hover, :active) tanımlar.

// small, large: Düğmelerin farklı boyutlarını tanımlar. Her boyut için minimum yükseklik, dolgu ve font boyutu gibi özellikler ayarlanır. Ayrıca içerikteki simgelerin (ikonların) boyutu da bu boyutlandırmaya göre ayarlanır.

// primary, secondary: Düğmeler için özel renk temalarını tanımlar. Bu, info ve secondary renklerini kullanır. Düğmelerin arka plan rengini, hover ve focus durumlarında nasıl değişeceğini belirler.

// Stil Detayları:
// Renkler ve Tipografi: colors ve typography dosyalarından alınan renk ve font boyutu değerleri, düğme stillerinde kullanılır. Bu, tema içinde tutarlı bir görünüm sağlar.

// CSS'in JavaScript Notasyonu: Stiller, JavaScript objesi olarak tanımlanır ve CSS özelliklerine atıfta bulunurken camelCase notasyonu kullanılır (örn., backgroundColor, minHeight).

// Pseudo-Class ve Medya Sorguları: &:hover, &:active gibi pseudo-class seçiciler ve durumları, düğmenin farklı durumlarında nasıl görüneceğini tanımlar. Bu, CSS'in kapasitesini JavaScript'in dinamik yapısıyla birleştirir.

// Simgeler ve SVG: Düğme içinde kullanılan simgeler ve SVG'ler için özel stil tanımları yapılır. Bu, içerikteki görsel unsurların boyutunu ve hizalamasını kontrol etmeye yardımcı olur.

// Bu tanımlar, kullanıcı arayüzünüzde düğmeleri özelleştirirken tutarlılık ve marka uyumluluğunu korumanıza yardımcı olur. Ayrıca, çeşitli durumlar ve kullanım senaryoları için esneklik sağlar, böylece farklı ekran boyutları ve kullanıcı etkileşimleri üzerinde tam kontrol sağlayabilirsiniz.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { white, text, info, secondary } = colors;
const { size } = typography;

const contained = {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(37),
    color: text.main,
    padding: `${pxToRem(9)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: white.main,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(29),
    padding: `${pxToRem(6)} ${pxToRem(18)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(44),
    padding: `${pxToRem(12)} ${pxToRem(64)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: info.main,

    "&:hover": {
      backgroundColor: info.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: info.focus,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
