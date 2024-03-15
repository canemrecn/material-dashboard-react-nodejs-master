// Bu dosya, materyal-ui kütüphanesindeki "Fade" bileşenini kullanarak bir açıklama bileşeninin stilini özelleştirmek için kullanılır. İçeriği şu şekildedir:

// tooltip nesnesi, açıklama bileşeninin özelliklerini ve stilini belirler.
// defaultProps: Açıklama bileşeninin varsayılan özelliklerini belirtir.
// arrow: Okun gösterilip gösterilmeyeceğini belirtir.
// TransitionComponent: Geçiş bileşenini belirtir, bu durumda "Fade" bileşeni kullanılır.
// styleOverrides: Açıklama bileşeninin stilini belirlemek için ek özellikler belirtir.
// tooltip: Açıklama bileşeninin stilini belirler.
// maxWidth: Maksimum genişliği belirtir.
// backgroundColor: Arka plan rengini belirtir.
// color: Metin rengini belirtir.
// fontSize: Yazı tipi boyutunu belirtir.
// fontWeight: Yazı tipi kalınlığını belirtir.
// textAlign: Metin hizalamasını belirtir.
// borderRadius: Kenar yarıçapını belirtir.
// opacity: Saydamlığı belirtir.
// padding: İç içe boşluğu belirtir.
// arrow: Açıklama bileşeninin okunun stilini belirler.
// Bu dosya, açıklama bileşeninin görünümünü özelleştirmek için kullanılır ve uygulamanın genel görünümüne uyacak şekilde açıklama bileşeninin arka plan rengi, metin rengi, yazı tipi boyutu gibi özelliklerin ayarlanmasına izin verir.

// @mui material components
import Fade from "@mui/material/Fade";

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { black, white } = colors;
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
      color: white.main,
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
