// Bu dosya, Material Dashboard 2 React teması içinde bir otomatik tamamlama (autocomplete) bileşeni için stil geçersiz kılmalarını tanımlıyor. autocomplete nesnesi, bu bileşenin çeşitli alt elemanları için özel CSS stil ayarlarını içerir. Bu stil ayarları, otomatik tamamlama bileşeninin görünümünü ve kullanıcı arayüzündeki davranışını özelleştirir, böylece tema genelindeki tasarım diline ve estetiğine uyum sağlar.

// Stil Özellikleri:
// popper: Otomatik tamamlama menüsünün genel stilini belirler. Gölgelendirme, padding, font boyutu, metin rengi, arka plan rengi ve köşe yuvarlaklığı gibi özellikleri içerir.

// paper: Otomatik tamamlama menüsünün kağıt elemanının stilini tanımlar. Gölgelendirme kaldırılır ve arka plan rengi şeffaf yapılır.

// option: Otomatik tamamlama menüsündeki her bir seçenek için stil tanımlarını içerir. Seçeneklerin padding'ini, köşe yuvarlaklığını, font boyutunu ve metin rengini belirler. Ayrıca, üzerine gelindiğinde, odaklanıldığında veya seçildiğinde arka plan ve metin renginin nasıl değişeceğini de tanımlar.

// noOptions: Otomatik tamamlama menüsünde seçenek bulunamadığında gösterilen metnin stilini belirler.

// groupLabel: Seçeneklerin gruplandırıldığı durumda, grup başlıklarının stilini tanımlar.

// loading: Veri yüklenirken gösterilen yükleme metninin stilini tanımlar.

// tag: Seçilen seçenekleri gösteren etiketlerin stilini tanımlar. Etiketlerin görünümü, arka plan rengi, metin rengi ve padding gibi özelliklerle özelleştirilir.

// popupIndicator ve clearIndicator: Otomatik tamamlama bileşeninin açılır menü gösterge simgesi ve temizleme simgesi için stil tanımlarını içerir.

// Kullanım Amacı:
// Bu dosya, otomatik tamamlama bileşeninin kullanıcı arayüzünde nasıl görüneceğini ve kullanıcıyla nasıl etkileşime gireceğini detaylandırır. Özelleştirilen stil ayarları, bileşenin kullanıcı deneyimini iyileştirmeyi, kullanıcıların kolayca veri girebilmesini ve seçenekler arasında hızlı bir şekilde gezinebilmesini amaçlar.

// Yardımcı Fonksiyonlar:
// pxToRem: Piksel cinsinden verilen değerleri rem birimine çevirerek, farklı ekran boyutları ve çözünürlüklerde tutarlı bir görünüm sağlar.

// rgba: Renklerin opaklığını ayarlamak için kullanılır, böylece bileşenin çeşitli durumları için görsel ağırlığı ve dikkat çekiciliği ince ayarlanabilir.

// Bu yapılandırma, Material Dashboard 2 React kullanılarak geliştirilen projelerde, otomatik tamamlama bileşenlerinin görsel tasarımını özelleştirmek ve yönetmek için etkili bir yöntem sunar.

// Material Dashboard 2 React base styles
import boxShadows from "assets/theme-dark/base/boxShadows";
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { md } = boxShadows;
const { size } = typography;
const { text, transparent, light, dark, gradients, background, white } = colors;
const { borderRadius } = borders;

const autocomplete = {
  styleOverrides: {
    popper: {
      boxShadow: md,
      padding: pxToRem(8),
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${background.card} !important`,
      borderRadius: borderRadius.md,
    },

    paper: {
      boxShadow: "none",
      backgroundColor: transparent.main,
    },

    option: {
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: rgba(light.main, 0.2),
        color: white.main,
      },

      '&[aria-selected="true"]': {
        backgroundColor: `${rgba(light.main, 0.2)} !important`,
        color: `${white.main} !important`,
      },
    },

    noOptions: {
      fontSize: size.sm,
      color: text.main,
    },

    groupLabel: {
      color: dark.main,
    },

    loading: {
      fontSize: size.sm,
      color: text.main,
    },

    tag: {
      display: "flex",
      alignItems: "center",
      height: "auto",
      padding: pxToRem(4),
      backgroundColor: gradients.dark.state,
      color: white.main,

      "& .MuiChip-label": {
        lineHeight: 1.2,
        padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
      },

      "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
        color: white.main,
        marginRight: 0,
      },
    },

    popupIndicator: {
      color: text.main,
    },

    clearIndicator: {
      color: text.main,
    },
  },
};

export default autocomplete;
