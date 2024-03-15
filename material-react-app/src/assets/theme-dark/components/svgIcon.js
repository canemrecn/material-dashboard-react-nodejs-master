
// Bu dosya, SVG simgelerinin boyutlarını ve stilini özelleştirmek için kullanılır. İçeriği şu şekildedir:

// svgIcon nesnesi, SVG simgelerinin özelliklerini belirler.
// defaultProps: SVG simgelerinin varsayılan özelliklerini belirtir.
// fontSize: Simgenin varsayılan yazı tipi boyutunu belirtir.
// styleOverrides: SVG simgelerinin boyutlarını belirlemek için ek özellikler belirtir.
// fontSizeInherit: Simge boyutunu "inherit" olarak ayarlar.
// fontSizeSmall: Simge boyutunu küçük boyutlu simgeler için belirli bir değere ayarlar. Bu durumda, pxToRem fonksiyonu kullanılarak belirli bir piksel değeri rem birime dönüştürülerek ayarlanır.
// fontSizeLarge: Simge boyutunu büyük boyutlu simgeler için belirli bir değere ayarlar. Bu durumda, pxToRem fonksiyonu kullanılarak belirli bir piksel değeri rem birime dönüştürülerek ayarlanır.
// Bu dosya, SVG simgelerinin boyutlarını dinamik olarak belirlemek için kullanılır ve uygulamanın genel görünümünü özelleştirmek için kullanılabilir.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

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
