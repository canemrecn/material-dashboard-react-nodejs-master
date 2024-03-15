
// Bu dosya, menü öğelerinin (menuItem) stilini özelleştirmek için kullanılır. root stil özelliği, menü öğelerinin genel görünümünü düzenler. Özelleştirilebilecek özellikler arasında genişlik, yükseklik, iç kenar boşluğu, köşe yuvarlaklığı, yazı tipi boyutu, renk ve geçiş efektleri bulunur. Bu özelleştirmeler, menü öğelerinin kullanıcı etkileşimlerine yanıt verme şeklini belirlemek için kullanılabilir. Örneğin, bir öğeye fare ile geldiğinde veya üzerine tıklandığında arka plan rengi veya metin rengi gibi özelliklerin değişmesi sağlanabilir.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import typography from "assets/theme/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { light, text, dark } = colors;
const { borderRadius } = borders;
const { size } = typography;

const menuItem = {
  styleOverrides: {
    root: {
      minWidth: pxToRem(160),
      minHeight: "unset",
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: light.main,
        color: dark.main,
      },
    },
  },
};

export default menuItem;
