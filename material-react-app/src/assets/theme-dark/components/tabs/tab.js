
// Bu dosya, sekmelerin (tabs) stillerini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// typography, borders ve colors modüllerini içeri aktarıyor. Bu modüller, yazı tipi stilleri, sınırlar ve renkler gibi stil bilgilerini içerebilir.

// pxToRem gibi bir stil işlevini içeren functions altında bulunan dosyaları içeri aktarıyor.

// typography modülünden yazı tipi boyutunu (size) ve ağırlığını (fontWeightRegular), borders modülünden köşe yarıçapını (borderRadius) ve colors modülünden beyaz rengi (white) alıyor.

// tab adlı bir nesne tanımlıyor. Bu nesne, sekmelerin kök öğesi ve alt öğeleri için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, sekmelerin stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, sekmelerin genişlik, yazı tipi boyutu, ağırlığı, dolgu miktarı, köşe yarıçapı, renk ve diğer bazı özelliklerini belirtir.

// labelIcon gibi özel bir stil, sekmelerin etiket simgesi ve metni için ayrı ayrı tanımlanmıştır.

// Bu dosya, sekmelerin stiline özgü bazı özelleştirmeler sağlar. Örneğin, sekmelerin yazı tipi boyutunu, ağırlığını veya dolgusunu ayarlayarak sekmelerin görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { white } = colors;

const tab = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: pxToRem(4),
      borderRadius: borderRadius.lg,
      color: `${white.main} !important`,
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};

export default tab;
