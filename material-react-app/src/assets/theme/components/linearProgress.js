// Bu dosya, lineer ilerleme çubuğunun (LinearProgress) görünümünü özelleştiren stilleri içerir.

// İlk olarak, borders ve colors modüllerinden gerekli özellikler alınır: borderRadius ve light.

// Daha sonra, linearProgress objesi içinde, LinearProgress bileşeninin stillerini özelleştiren styleOverrides belirtilir:

// root: Lineer ilerleme çubuğunun kök elementi için stil tanımları yapılır.
// height: Çubuğun yüksekliği belirlenir. pxToRem fonksiyonu ile dönüştürülerek kullanılır.
// borderRadius: Köşelerin yuvarlatılması için kenar yarıçapı belirlenir.
// overflow: Taşan içeriğin görüntülenmesini sağlar.
// position: Konumlandırma işlemi için relative değeri atanır.
// colorPrimary, colorSecondary: İlerleme çubuğunun arka plan rengi belirlenir.
// bar: İlerleme çubuğunun içerisindeki dolgu çubuğunun stilleri tanımlanır.
// height: Dolgu çubuğunun yüksekliği belirlenir. pxToRem fonksiyonu ile dönüştürülerek kullanılır.
// borderRadius: Dolgu çubuğunun köşelerinin yuvarlatılması için kenar yarıçapı belirlenir.
// position: Konumlandırma işlemi için absolute değeri atanır.
// transform: Dolgu çubuğunun konumunu düzenlemek için kullanılır.
// transition: Genişlik değişimlerinin animasyon süresi ve geçiş türü belirlenir.
// Bu stil tanımları, LinearProgress bileşeninin görünümünü özelleştirerek, çubuğun yüksekliği, kenar yuvarlatması ve dolgu çubuğunun davranışı gibi özelliklerini kontrol etmeyi sağlar.

// Material Dashboard 2 React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;
const { light } = colors;

const linearProgress = {
  styleOverrides: {
    root: {
      height: pxToRem(6),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative",
    },

    colorPrimary: {
      backgroundColor: light.main,
    },

    colorSecondary: {
      backgroundColor: light.main,
    },

    bar: {
      height: pxToRem(6),
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: `translate(0, 0) !important`,
      transition: "width 0.6s ease !important",
    },
  },
};

export default linearProgress;
