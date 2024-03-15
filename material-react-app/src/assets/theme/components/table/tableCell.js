
// Bu dosya, tablo hücrelerinin stiline özelleştirmeler ekler. root özelliği, tablo hücrelerinin genel stilini tanımlar. Bu stil, hücrelerin iç boşluğu (padding) ve alt kenarlık (border) gibi özellikleri içerir.

// root: Tablo hücrelerinin genel stilini tanımlar. Özellikle, padding ve borderBottom gibi özellikler bulunur. padding, hücre içeriğinin hücre sınırlarından uzaklığını ayarlar. borderBottom, hücrenin alt kenarlık rengini ve kalınlığını belirler.
// Bu özelleştirmeler, tablo hücrelerinin görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

const tableCell = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

export default tableCell;
