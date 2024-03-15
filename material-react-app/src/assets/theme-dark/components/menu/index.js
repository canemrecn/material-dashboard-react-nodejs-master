// Bu dosya, bir menü bileşeninin (menu) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// boxShadows, typography, colors ve borders modüllerini içeri aktarıyor. Bu modüller, kutu gölgeleri, tipografi stilleri, renkler ve sınırlar gibi temel stil özelliklerini içerebilir.

// pxToRem gibi bir stil işlevini içeren functions altında bulunan dosyaları içeri aktarıyor.

// boxShadows modülünden orta büyüklükte bir kutu gölgesi (md) alıyor.

// typography modülünden metin boyutunu (size) alıyor.

// colors modülünden metin (text) ve arka plan (background) renklerini alıyor.

// borders modülünden kenar yarıçapını (borderRadius) alıyor.

// menu adlı bir nesne tanımlıyor. Bu nesne, menü bileşeninin varsayılan özelliklerini ve stil düzenlemelerini içerir.

// defaultProps altında, menü öğelerinin otomatik olarak odaklanmasını devre dışı bırakacak olan disableAutoFocusItem özelliğinin varsayılan olarak true olmasını sağlıyor.

// Kök öğesinin altında, menü bileşeninin kağıt kısmının stilini belirten bir styleOverrides nesnesi bulunmaktadır. Bu özellikler, menü bileşeninin genel görünümünü belirler.

// Bu dosya, menü bileşeninin stiline özgü bazı özelleştirmeler sağlar. Örneğin, menü kağıdının boyutunu, kutu gölgesini ve kenar yuvarlaklığını ayarlayarak menünün görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import boxShadows from "assets/theme-dark/base/boxShadows";
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { md } = boxShadows;
const { size } = typography;
const { text, background } = colors;
const { borderRadius } = borders;

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: md,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${background.card} !important`,
      borderRadius: borderRadius.md,
    },
  },
};

export default menu;
