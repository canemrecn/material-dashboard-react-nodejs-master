// Bu dosya, Material Dashboard 2 React teması için "outlined" tip düğme stil tanımlarını içerir. Outlined düğmeler, genellikle içi dolu olmayan ve sadece bir kenarlık ile çevrili olan düğmelerdir. Bu stil, düğmelere daha hafif bir görünüm kazandırır ve genellikle arka planın daha fazla ön plana çıkmasını istediğiniz durumlarda kullanılır. Dosyada tanımlanan stiller, düğmelerin çeşitli boyutları ve durumları için özelleştirme seçenekleri sunar.

// Anahtar Özellikler ve Kullanımları:
// base: Tüm outlined düğmeler için temel stil ayarlarını belirler. Minimum yükseklik, metin rengi, kenarlık rengi ve padding içerir. Ayrıca, hover durumunda düğmenin opaklığını azaltarak kullanıcı etkileşimini görsel olarak geri bildirir.

// small, large: Düğmenin küçük ve büyük boyutları için özel stil tanımları yapar. Bu, düğmenin minimum yüksekliğini, padding'ini ve içindeki ikon veya SVG'lerin boyutunu ayarlar.

// primary, secondary: Düğmeye birincil veya ikincil renk temasını uygular. Bu stil ayarları, kenarlık rengini belirler ve hover durumunda düğmenin arka plan rengini değiştirmez, bu sayede düğmenin outlined stilinin korunmasını sağlar.

// Stil Detayları:
// Renkler ve Tipografi: colors ve typography dosyalarından alınan renk ve font boyutları, düğmelerin stilini belirlemede kullanılır. Bu, temanın genel estetiğine uygun bir görünüm sağlar.

// pxToRem Fonksiyonu: Bu fonksiyon, piksel değerlerini rem birimine çevirerek, tasarımın farklı ekran boyutları ve çözünürlüklerde tutarlı kalmasını sağlar.

// CSS'in JavaScript Notasyonu: Stil tanımları, JavaScript objesi olarak ifade edilir ve CSS özelliklerine atıfta bulunurken camelCase notasyonu kullanılır. Bu, React ve Material-UI ile entegrasyonu kolaylaştırır.

// Bu tanımlar, projenizde kullanacağınız outlined düğmeler için bir temel oluşturur ve uygulamanızın genel tasarım diliyle uyumlu hale getirir. Ayrıca, kullanıcı etkileşimlerine duyarlı ve görsel olarak çekici elemanlar oluşturmanıza olanak tanır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { transparent, light, info, secondary } = colors;
const { size } = typography;

const outlined = {
  base: {
    minHeight: pxToRem(39),
    color: light.main,
    borderColor: light.main,
    padding: `${pxToRem(9)} ${pxToRem(24)}`,

    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(31),
    padding: `${pxToRem(6)} ${pxToRem(18)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(46),
    padding: `${pxToRem(12)} ${pxToRem(64)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: transparent.main,
    borderColor: info.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },
};

export default outlined;
