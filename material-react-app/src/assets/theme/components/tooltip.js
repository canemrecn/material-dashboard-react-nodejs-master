
// Bu stil dosyası, Materyal UI tarafından sağlanan Tooltip bileşenini özelleştirmek için kullanılır.

// İçeriği şu şekildedir:

// Fade bileşenini @mui/material/Fade modülünden alır.

// colors adında bir objeden bazı renkleri alır: black ve light.

// typography adında bir objeden metin biçimlendirme özelliklerini alır: size ve fontWeightRegular.

// borders adında bir objeden kenarlık özelliklerini alır: borderRadius.

// tooltip adında bir obje içerir:

// defaultProps özelliği, bileşenin varsayılan özelliklerini tanımlar. arrow özelliği true olarak ayarlanır, yani ok gösterimi etkinleştirilir. TransitionComponent özelliği Fade bileşeni olarak ayarlanır.

// styleOverrides özelliği altında, tooltip ve arrow için özelleştirilmiş stiller bulunur:

// tooltip: Tooltip bileşeninin stillerini tanımlar. maxWidth ile maksimum genişlik belirlenir. backgroundColor ile arka plan rengi, color ile metin rengi, fontSize ile yazı tipi boyutu, fontWeight ile yazı tipi kalınlığı, textAlign ile metin hizalaması, borderRadius ile kenar yarıçapı, opacity ile saydamlık ve padding ile iç içe alan belirlenir.
// arrow: Tooltip bileşeninin okunu stilize eder. color ile ok rengi belirlenir.
// Bu stil dosyası, Tooltip bileşeninin görünümünü özelleştirmek için kullanılır ve defaultProps ile bazı varsayılan özellikleri tanımlar.

// @mui material components
import Fade from "@mui/material/Fade";

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { black, light } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const tooltip = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },

  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(200),
      backgroundColor: black.main,
      color: light.main,
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },

    arrow: {
      color: black.main,
    },
  },
};

export default tooltip;
