// Bu dosya, menü (menu) bileşeninin stilini özelleştirmek için kullanılır. paper stil özelliği, menü bileşeninin kağıt yüzeyini düzenler. Özelleştirilebilecek özellikler arasında genişlik, gölge, iç kenar boşluğu, yazı tipi boyutu, renk, hizalama ve köşe yuvarlaklığı bulunur. Bu özelleştirmeler, menünün genel görünümünü ve kullanıcı deneyimini iyileştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import boxShadows from "assets/theme/base/boxShadows";
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { lg } = boxShadows;
const { size } = typography;
const { text, white } = colors;
const { borderRadius } = borders;

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },
  },
};

export default menu;
