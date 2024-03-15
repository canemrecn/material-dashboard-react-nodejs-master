
// Bu dosya, bir tablo başlığının stilini özelleştirir. root özelliği, tablo başlığının genel stilini tanımlar.

// root: Tablo başlığının genel stilini belirler. Bu stil, özel bir blok görünümü sağlamak için display: "block" özelliğini içerir. Ayrıca, padding (padding) ve kenar yuvarlaklığı (borderRadius) gibi özellikleri de belirler.
// Bu özelleştirmeler, tablo başlığının görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.







// Material Dashboard 2 React base styles
import borders from "assets/theme/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

const tableHead = {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};

export default tableHead;
