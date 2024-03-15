// Bu dosya, farklı türlerdeki ayırıcıların görünümünü belirler.

// colors: Bu, tema içinde tanımlı renkleri içerir. Koyu (dark), şeffaf (transparent) ve beyaz (white) renkleri içerir.
// Daha sonra, her bir ayırıcı türü için görünüm ayarları belirlenir:

// root: Yatay ayırıcıların görünümünü tanımlar. Arka plan rengi şeffaf olup, bir lineer gradient arka planı kullanarak ayırıcının sol ve sağ kenarlarında koyu bir geçiş sağlar. Yüksekliği pxToRem(1) ile ayarlanır ve margin ile boşluk bırakılır. Opaklık 0.25 olarak ayarlanır.
// vertical: Dikey ayırıcıların görünümünü tanımlar. Arka plan rengi ve gradient yönü yatay ayırıcı ile aynıdır, ancak genişlik pxToRem(1) olarak ayarlanır.
// light: Işıklı ayırıcıların görünümünü tanımlar. Arka plan rengi ve gradient yönü yatay ayırıcı ile aynıdır, ancak koyu renk yerine beyaz kullanılır.
// Bu ayırıcı stilleri, arayüzde farklı bölgeleri veya bileşenleri belirgin bir şekilde ayırmak için kullanılabilir.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";

const { dark, transparent, white } = colors;

const divider = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(dark.main, 0)}, ${rgba(
        dark.main,
        0.4
      )}, ${rgba(dark.main, 0)}) !important`,
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: "none",
      opacity: 0.25,
    },

    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to bottom, ${rgba(dark.main, 0)}, ${rgba(
        dark.main,
        0.4
      )}, ${rgba(dark.main, 0)}) !important`,
      width: pxToRem(1),
      height: "100%",
      margin: `0 ${pxToRem(16)}`,
      borderRight: "none",
    },

    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(white.main, 0)}, ${white.main}, ${rgba(
        white.main,
        0
      )}) !important`,

      "&.MuiDivider-vertical": {
        backgroundImage: `linear-gradient(to bottom, ${rgba(white.main, 0)}, ${white.main}, ${rgba(
          white.main,
          0
        )}) !important`,
      },
    },
  },
};

export default divider;
