// Bu dosya, diyalog başlığının stilini belirlemek için geçersiz kılma bilgilerini içerir.

// dialogTitle nesnesi, diyalog başlığının stilini değiştirmek için styleOverrides özelliğini içerir. Bu özellik altında, başlığın kök öğesinin stil bilgileri bulunur.

// root: Başlığın kök öğesinin stilini tanımlar. Bu özellik, diyalog başlığının görünümünü belirler. Örneğin, başlığın iç boşluğu (padding) ve yazı tipi boyutu (fontSize) belirlenebilir.
// Bu stil geçersiz kılmalar, diyalog başlığının görünümünü belirleyerek kullanıcı arayüzünde tutarlılık sağlamak için kullanılır. Bu dosya, diyalog başlığının genel görünümünü ayarlamak için kullanılabilir.

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

const dialogTitle = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
