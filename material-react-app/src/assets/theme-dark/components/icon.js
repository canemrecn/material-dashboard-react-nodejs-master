
// Bu dosya, simge (icon) bileşeninin stillerini belirler. İçeriği incelendiğinde:

// pxToRem fonksiyonunu içeri alır. Bu fonksiyon, piksel cinsinden değerleri rem cinsine dönüştürmek için kullanılır.

// icon nesnesi, simge bileşeninin farklı boyutları için stilleri içerir:

// fontSizeInherit: Simge boyutunu miras alır. Bu stil, varsayılan olarak atanır.
// fontSizeSmall: Küçük boyutta simgeler için stil ayarlarını içerir. pxToRem fonksiyonu kullanılarak 20px boyutu ayarlanır.
// fontSizeLarge: Büyük boyutta simgeler için stil ayarlarını içerir. pxToRem fonksiyonu kullanılarak 36px boyutu ayarlanır.
// Bu dosya, genellikle uygulamanın farklı bölgelerinde kullanılan simgelerin boyutlarını belirlemek ve özelleştirmek için kullanılır.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const icon = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};

export default icon;
