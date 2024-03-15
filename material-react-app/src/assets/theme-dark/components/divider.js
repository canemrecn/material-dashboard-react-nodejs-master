
// Bu dosya, bölücü (divider) bileşeninin stillerini belirler. İçeriği incelediğimizde:

// colors modülünden gelen renklerle ilgili değişkenleri (dark, transparent, white) alır.

// rgba ve pxToRem fonksiyonlarını içeriye alır. Bu fonksiyonlar, renkleri alfa değeriyle birlikte oluşturmak ve piksel cinsinden değerleri dönüştürmek için kullanılır.

// divider nesnesi, bölücü bileşeninin farklı durumları için stilleri içerir:

// root: Yatay bölücüler için stil ayarlarını içerir. Arka plan olarak bir lineer gradient (çizgisel geçiş) kullanılır. Bu gradient, sol ve sağ taraflarda yavaş yavaş saydamlık azalması sağlar.
// vertical: Dikey bölücüler için stil ayarlarını içerir. Benzer şekilde, dikey gradient kullanılarak üstten alta doğru yavaş yavaş saydamlık azalması sağlanır.
// light: Hafif bir görünüm sağlamak için stil ayarlarını içerir. Arka plan olarak, beyaz ile koyu renk arasında bir gradient kullanılır. Bu stil, dikey ve yatay bölücüler için geçerlidir.
// Bu dosya, genellikle listelerde veya diğer bileşenler arasında ayrım yapmak için kullanılan bölücü bileşeninin görünümünü özelleştirmek için kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import rgba from "assets/theme-dark/functions/rgba";
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { dark, transparent, white } = colors;

const divider = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(dark.main, 0)}, ${white.main}, ${rgba(
        dark.main,
        0
      )}) !important`,
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${rgba(dark.main, 0)}, ${white.main}, ${rgba(
        dark.main,
        0
      )}) !important`,
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(white.main, 0)}, ${rgba(
        dark.main,
        0.4
      )}, ${rgba(white.main, 0)}) !important`,

      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${rgba(
          dark.main,
          0.4
        )}, ${rgba(white.main, 0)}) !important`,
      },
    },
  },
};

export default divider;
