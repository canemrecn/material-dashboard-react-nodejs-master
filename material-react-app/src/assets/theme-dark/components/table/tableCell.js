// Bu dosya, tablo hücrelerinin (table cell) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// borders ve colors modüllerini içeri aktarıyor. Bu modüller, sınırlar ve temel renkler gibi stil bilgilerini içerebilir.

// pxToRem gibi bir stil işlevini içeren functions altında bulunan dosyaları içeri aktarıyor.

// borders modülünden kenar kalınlığını (borderWidth) alıyor.

// colors modülünden açık renklerden birini (light) alıyor.

// tableCell adlı bir nesne tanımlıyor. Bu nesne, tablo hücresinin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, tablo hücresinin stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, tablo hücresinin iç içe girme miktarını ve alt kenar çizgisinin stilini belirtir.

// Bu dosya, tablo hücresinin stiline özgü bazı özelleştirmeler sağlar. Örneğin, hücre iç içe girme miktarını veya alt kenar çizgisinin kalınlığını ve rengini ayarlayarak tablo hücresinin görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

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
