
// Bu dosya, adım etiketinin (step label) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// typography ve colors modüllerini içeri aktarıyor. Bu modüller, tipografi stilleri ve temel renkler gibi stil bilgilerini içerebilir.

// pxToRem ve rgba gibi stil işlevlerini içeren functions altında bulunan dosyaları içeri aktarıyor.

// typography modülünden metin boyutu ve düzgünlük (font weight) gibi özellikleri (size ve fontWeightRegular) alıyor.

// colors modülünden beyaz rengini (white) alıyor.

// stepLabel adlı bir nesne tanımlıyor. Bu nesne, adım etiketinin stilini belirlemek için kullanılır.

// Etiket altında, adım etiketinin stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, adım etiketinin farklı durumları için çeşitli stilleri belirtir.

// &.Mui-active ve &.Mui-completed gibi seçicilerle adım etiketinin aktif ve tamamlanmış durumları için metin rengini ve font ağırlığını ayarlar.

// Bu dosya, adım etiketinin stiline özgü bazı özelleştirmeler sağlar. Örneğin, etiketin metin boyutunu, rengini veya font ağırlığını ayarlayarak adım etiketinin görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import typography from "assets/theme-dark/base/typography";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { size, fontWeightRegular } = typography;
const { white } = colors;

const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: "#9fc9ff",
      textTransform: "uppercase",

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },
    },
  },
};

export default stepLabel;
