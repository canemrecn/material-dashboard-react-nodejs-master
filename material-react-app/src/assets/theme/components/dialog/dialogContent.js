// Bu dosya, diyalog içeriğinin (dialog content) stilini belirlemek için geçersiz kılma bilgilerini içerir.

// dialogContent nesnesi, diyalog içeriğinin kök öğesinin stilini değiştirmek için styleOverrides özelliğini içerir. Bu özellik altında, diyalog içeriğinin kök öğesi ve iç ayırıcılarının (dividers) stil bilgileri bulunur.

// root: Diyalog içeriğinin kök öğesinin stilini tanımlar. Bu özellik, diyalog içeriğinin görünümünü ve düzenini ayarlamak için kullanılır. Örneğin, içeriğin dolgusu (padding), yazı tipi boyutu (fontSize) ve metin rengi (color) belirlenebilir.

// dividers: Diyalog içeriğinin üst ve alt kenar çizgilerinin stilini tanımlar. Bu özellik, iç ayırıcıların (dividers) görünümünü belirler. Örneğin, üst ve alt kenar çizgilerinin kalınlığı (borderWidth) ve rengi (borderColor) belirlenebilir.

// Bu stil geçersiz kılmalar, diyalog bileşeninin içeriğinin görünümünü ve düzenini belirleyerek kullanıcı arayüzünde tutarlılık sağlamak için kullanılır.

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

const dialogContent = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};

export default dialogContent;
