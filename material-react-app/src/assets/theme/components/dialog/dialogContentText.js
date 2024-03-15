// Bu dosya, diyalog içeriğindeki metnin stilini belirlemek için geçersiz kılma bilgilerini içerir.

// dialogContentText nesnesi, diyalog içeriğindeki metnin stilini değiştirmek için styleOverrides özelliğini içerir. Bu özellik altında, metnin kök öğesinin stil bilgileri bulunur.

// root: Metnin kök öğesinin stilini tanımlar. Bu özellik, diyalog içeriğindeki metnin görünümünü belirler. Örneğin, metnin yazı tipi boyutu (fontSize) ve rengi (color) belirlenebilir.
// Bu stil geçersiz kılmalar, diyalog bileşenindeki metnin görünümünü ve düzenini belirleyerek kullanıcı arayüzünde tutarlılık sağlamak için kullanılır. Bu dosya, diyalog içeriğindeki metnin genel görünümünü ayarlamak için kullanılabilir.

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

export default dialogContentText;
