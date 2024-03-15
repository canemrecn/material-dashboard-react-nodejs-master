// Bu dosya, bir menü öğesinin (menu item) stiline ilişkin bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors, borders ve typography modüllerini içeri aktarıyor. Bu modüller, temel renkler, sınırlar ve tipografi stilleri gibi stil bilgilerini içerebilir.

// pxToRem ve rgba gibi stil işlevlerini içeren functions altında bulunan dosyaları içeri aktarıyor.

// colors modülünden koyu ve beyaz renkleri (dark ve white) alıyor.

// borders modülünden kenar yarıçapını (borderRadius) alıyor.

// typography modülünden boyutu (size) alıyor.

// menuItem adlı bir nesne tanımlıyor. Bu nesne, menü öğesinin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, menü öğesinin stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, menü öğesinin farklı durumları için çeşitli stilleri belirtir.

// &:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus gibi seçici ifadelerle menü öğesinin farklı durumlarında arka plan ve metin rengi gibi stil özelliklerini belirler.

// Bu dosya, menü öğesinin stiline özgü bazı özelleştirmeler sağlar. Örneğin, menü öğelerinin üzerine gelindiğinde veya seçildiğinde arka plan rengini ve metin rengini ayarlayarak menü öğelerinin görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import typography from "assets/theme-dark/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { dark, white } = colors;
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
      color: rgba(white.main, 0.8),
      transition: "background-color 300ms ease, color 300ms ease",

      "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: dark.main,
        color: white.main,
      },
    },
  },
};

export default menuItem;
