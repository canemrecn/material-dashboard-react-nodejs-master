
// Bu dosya, Material Dashboard 2 React teması için "text" tipi düğme stil tanımlarını içerir. Text düğmeler, genellikle arka plan rengi olmayan ve üzerine geldiğinde veya tıkladığında minimal görsel değişiklikler gösteren düğmelerdir. Bu stil, arayüzde daha az dikkat çekici eylemler için kullanılır ve kullanıcıların dikkatini ana eylemlerden sapmadan yönlendirmeye yardımcı olur.

// Anahtar Özellikler ve Kullanımları:
// base: Tüm text tipi düğmeler için temel stil ayarlarını belirler. Arka plan rengini transparent olarak ayarlar, minimum yükseklik, metin rengi, gölge efekti (box shadow) ve padding içerir. Hover, focus ve active durumlarında özel davranışları tanımlar.

// small, large: Düğmenin küçük ve büyük boyutları için özel stil tanımları yapar. Her boyut için minimum yükseklik, padding ve font boyutu gibi özellikler ayarlanır. Ayrıca, içerikteki simgelerin (ikonların) boyutunu da bu boyutlandırmaya göre ayarlar.

// primary, secondary: Düğmeye birincil veya ikincil renk temasını uygular. Bu stil ayarları, metin rengini belirler ve hover ve focus durumlarında renk değişikliklerini yönetir. Gölge efekti (box shadow) bu durumlar için devre dışı bırakılır.

// Stil Detayları:
// Renkler ve Tipografi: colors ve typography dosyalarından alınan renk ve font boyutu değerleri, düğmelerin stilini belirlemede kullanılır. Bu, temanın genel estetiğine uygun bir görünüm sağlar.

// pxToRem Fonksiyonu: Bu fonksiyon, piksel değerlerini rem birimine çevirerek, tasarımın farklı ekran boyutları ve çözünürlüklerde tutarlı kalmasını sağlar.

// CSS'in JavaScript Notasyonu: Stil tanımları, JavaScript objesi olarak ifade edilir ve CSS özelliklerine atıfta bulunurken camelCase notasyonu kullanılır. Bu, React ve Material-UI ile entegrasyonu kolaylaştırır.

// Bu tanımlar, projenizde kullanacağınız text tipi düğmeler için bir temel oluşturur ve uygulamanızın genel tasarım diliyle uyumlu hale getirir. Ayrıca, kullanıcı etkileşimlerine duyarlı ve görsel olarak çekici elemanlar oluşturmanıza olanak tanır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { text, info, secondary, transparent } = colors;
const { size } = typography;

const buttonText = {
  base: {
    backgroundColor: transparent.main,
    minHeight: pxToRem(37),
    color: text.main,
    boxShadow: "none",
    padding: `${pxToRem(9)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: transparent.main,
      boxShadow: "none",
    },

    "&:focus": {
      boxShadow: "none",
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none",
    },

    "&:disabled": {
      boxShadow: "none",
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
    color: info.main,

    "&:hover": {
      color: info.main,
    },

    "&:focus:not(:hover)": {
      color: info.focus,
      boxShadow: "none",
    },
  },

  secondary: {
    color: secondary.main,

    "&:hover": {
      color: secondary.main,
    },

    "&:focus:not(:hover)": {
      color: secondary.focus,
      boxShadow: "none",
    },
  },
};

export default buttonText;
