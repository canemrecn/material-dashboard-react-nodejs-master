// Bu stil dosyası, SVG simgelerini özelleştirmek için kullanılır. svgIcon adında bir obje içerir.

// Bu objenin defaultProps özelliği, SVG simgelerinin varsayılan özelliklerini tanımlar. fontSize özelliği "inherit" olarak ayarlanır, yani SVG simgeleri, üzerlerinde uygulanan font boyutunu miras alır.

// styleOverrides özelliği altında, farklı boyutlardaki SVG simgeleri için stil tanımları bulunur:

// fontSizeInherit: Bu stil, simgenin font boyutunu miras almasını sağlar. fontSize özelliği "inherit !important" olarak ayarlanır.

// fontSizeSmall: Bu stil, küçük boyutlardaki SVG simgeleri için font boyutunu belirler. fontSize özelliği pxToRem(20) ile ayarlanır. !important kullanılarak bu stilin diğer stillerden öncelikli olması sağlanır.

// fontSizeLarge: Bu stil, büyük boyutlardaki SVG simgeleri için font boyutunu belirler. fontSize özelliği pxToRem(36) ile ayarlanır. !important kullanılarak bu stilin diğer stillerden öncelikli olması sağlanır.

// Bu şekilde, farklı boyutlardaki SVG simgeleri için özelleştirilmiş font boyutları tanımlanmış olur.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const svgIcon = {
  defaultProps: {
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

export default svgIcon;
